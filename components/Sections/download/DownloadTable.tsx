'use client';

import { AgGridReact } from 'ag-grid-react';
import '@/styles/ag-grid-theme.css';
import { useEffect, useState, useMemo } from 'react';
import { getParsedReleases } from '@/lib/getReleases.tsx';
import { getModrinthParsedReleases } from '@/lib/getModrinthReleases';
import { getCurseForgeParsedReleases } from '@/lib/getCurseForgeReleases';
import { parseNumber } from '@/lib/utils';
import Downloads from './downloads';
import Link from 'next/link';
import Image from 'next/image';
import modrinthIcon from '@/public/icons/modrinth.svg';
import curseforgeIcon from '@/public/icons/curseforge.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Source = 'all' | 'modrinth' | 'curseforge' | 'github';

interface SourceData {
  rows: any[];
  mcVersions: { field: string; headerName: string }[];
}

function buildColDefs(mcVersions: { field: string; headerName: string }[]) {
  return [
    { field: 'version', pinned: true, movable: false, width: 126 },
    {
      field: 'code',
      headerName: 'Release',
      cellRenderer: (params: any) => (
        <Link href={params.value} className="text-blue-500">
          Open
        </Link>
      ),
      width: 115,
    },
    {
      field: 'downloads',
      cellRenderer: (params: any) => parseNumber(params.value),
      width: 115,
    },
    ...mcVersions.map((col) => ({
      field: col.field,
      headerName: col.headerName,
      cellRenderer: (params: any) =>
        params.value === null ? (
          'Not available'
        ) : (
          <Link href={params.value} className="text-blue-500">
            Download
          </Link>
        ),
      width: 160,
    })),
  ];
}

/**
 * Merge releases from Modrinth, CurseForge, and GitHub into a single "All" view.
 * Priority: Modrinth > CurseForge > GitHub.
 * For each mod version, pick the best release link and merge asset URLs by priority.
 * No duplicate MC version assets per mod version.
 */
function buildAllData(
  dataCache: Record<Exclude<Source, 'all'>, SourceData | null>,
): SourceData {
  // Priority order: modrinth first, curseforge second, github last
  const sources: Exclude<Source, 'all'>[] = [
    'modrinth',
    'curseforge',
    'github',
  ];

  // Collect all mc version columns across all sources
  const allFieldMap = new Map<string, string>(); // field -> headerName
  for (const src of sources) {
    const data = dataCache[src];
    if (!data) continue;
    for (const col of data.mcVersions) {
      if (!allFieldMap.has(col.field)) {
        allFieldMap.set(col.field, col.headerName);
      }
    }
  }

  // Merge rows by mod version
  const merged = new Map<
    string,
    { code: string; downloads: number; assets: Record<string, string | null> }
  >();

  for (const src of sources) {
    const data = dataCache[src];
    if (!data) continue;

    for (const row of data.rows) {
      const version: string = row.version;

      if (!merged.has(version)) {
        merged.set(version, {
          code: row.code,
          downloads: 0,
          assets: {},
        });
        // Initialize all fields to null
        for (const field of Array.from(allFieldMap.keys())) {
          merged.get(version)!.assets[field] = null;
        }
      }

      const entry = merged.get(version)!;
      // Sum downloads across all sources
      entry.downloads += row.downloads ?? 0;

      // For each MC version field, fill in the asset URL only if not already set
      // (higher priority sources are processed first)
      for (const field of Array.from(allFieldMap.keys())) {
        if (entry.assets[field] === null && row[field] != null) {
          entry.assets[field] = row[field];
        }
      }
    }
  }

  // Build release rows
  const releases: Record<string, any>[] = [];
  merged.forEach((entry, version) => {
    releases.push({
      version,
      code: entry.code,
      downloads: entry.downloads,
      ...entry.assets,
    });
  });

  // Build mc version columns (only those with at least one non-null value)
  const fieldsWithData = new Set<string>();
  for (const release of releases) {
    for (const [key, val] of Object.entries(release)) {
      if (!['version', 'code', 'downloads'].includes(key) && val != null) {
        fieldsWithData.add(key);
      }
    }
  }

  const mcVersions = Array.from(fieldsWithData)
    .filter((field) => allFieldMap.has(field))
    .map((field) => ({ field, headerName: allFieldMap.get(field)! }))
    .sort((a, b) => {
      const pA = a.headerName.split('.').map(Number);
      const pB = b.headerName.split('.').map(Number);
      for (let i = 0; i < Math.max(pA.length, pB.length); i++) {
        const diff = (pB[i] ?? 0) - (pA[i] ?? 0);
        if (diff !== 0) return diff;
      }
      return 0;
    });

  return { rows: releases, mcVersions };
}

export default function DownloadTable() {
  const [source, setSource] = useState<Source>('all');
  const [loading, setLoading] = useState(true);
  const [dataCache, setDataCache] = useState<
    Record<Exclude<Source, 'all'>, SourceData | null>
  >({
    modrinth: null,
    curseforge: null,
    github: null,
  });
  const [availableSources, setAvailableSources] = useState<
    Record<Exclude<Source, 'all'>, boolean>
  >({
    modrinth: true,
    curseforge: true,
    github: true,
  });

  // Compute "all" merged data whenever cache changes
  const allData = useMemo(() => buildAllData(dataCache), [dataCache]);

  const currentData = source === 'all' ? allData : dataCache[source];
  const rowData = currentData?.rows ?? [];
  const colDefs = currentData ? buildColDefs(currentData.mcVersions) : [];

  // Load data for a specific source
  const loadSource = async (src: Exclude<Source, 'all'>): Promise<boolean> => {
    if (dataCache[src]) return true; // Already loaded

    try {
      if (src === 'modrinth') {
        const result = await getModrinthParsedReleases();
        setDataCache((prev) => ({
          ...prev,
          modrinth: {
            rows: result.releases,
            mcVersions: result.mcVersions,
          },
        }));
        setAvailableSources((prev) => ({ ...prev, modrinth: true }));
        return true;
      } else if (src === 'curseforge') {
        const result = await getCurseForgeParsedReleases();
        setDataCache((prev) => ({
          ...prev,
          curseforge: {
            rows: result.releases,
            mcVersions: result.mcVersions,
          },
        }));
        setAvailableSources((prev) => ({ ...prev, curseforge: true }));
        return true;
      } else {
        const result = await getParsedReleases();
        setDataCache((prev) => ({
          ...prev,
          github: {
            rows: result.releases,
            mcVersions: result.mcVersions,
          },
        }));
        setAvailableSources((prev) => ({ ...prev, github: true }));
        return true;
      }
    } catch (error) {
      setAvailableSources((prev) => ({ ...prev, [src]: false }));
      return false;
    }
  };

  // Initial load: load all three sources in parallel
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      await Promise.all([
        loadSource('modrinth'),
        loadSource('curseforge'),
        loadSource('github'),
      ]);
      setLoading(false);
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSourceChange = async (newSource: Source) => {
    if (newSource === source || loading) return;

    if (newSource !== 'all' && !availableSources[newSource]) return;

    setLoading(true);
    if (newSource !== 'all') {
      await loadSource(newSource);
    }
    setSource(newSource);
    setLoading(false);
  };

  return (
    <div className="my-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
        Download Statistics
      </h2>
      <p className="text-gray-600 mb-4 max-w-4xl">
        Here you can see the exact total download count of ClickCrystals from
        its all official sources. You can download any release for the available
        minecraft versions from the table below as well.
      </p>
      <Downloads />

      <div className="my-4">
        <p className="text-xs text-black max-w-2xl select-none mt-2">
          The table below shows several of the recent releases of ClickCrystals.
          If you want to see all our 90+ releases, please visit our GitHub
          releases page.
          <br />
          <br />
          Many of the minecraft versions are not supported by the mod, so if
          there isn't a specific column for your version, it may not be
          supported.
          <br />
          <br />
          <span className="font-semibold">Note:</span> you might have to scroll
          right in the grid to see downloads for other versions.
        </p>
        <div className="border-l-4 border-yellow-500 bg-yellow-100 p-4 my-4">
          <p className="md:max-w-3xl text-sm text-yellow-800 font-semibold mb-2">
            Important Safety Warning:
          </p>
          <p className="md:max-w-3xl text-xs">
            ClickCrystals is only available for the Fabric modloader and there
            are no current or future plans to port the mod to other modloaders.
          </p>
          <p className="md:max-w-3xl text-xs text-yellow-900 mt-2">
            If you see any downloads for ClickCrystals on other modloaders, they
            are not official and may contain malicious code. Please only
            download ClickCrystals from the official sources listed below.
            <br />
            <br />
            <span className="font-semibold">
              This is not rare, we have seen several websites publishing
              unofficial malware versions of ClickCrystals.
            </span>{' '}
            Therefore, please be careful and only download from the official
            sources listed on our website.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs text-gray-500 font-medium select-none w-full sm:w-auto">
          Showing releases from:
        </span>
        <button
          onClick={() => handleSourceChange('all')}
          disabled={loading}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 ${
            source === 'all'
              ? 'bg-[#6366f1] text-white shadow-sm'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          } cursor-pointer`}
        >
          <svg
            className="size-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
          All
        </button>
        <button
          onClick={() => handleSourceChange('modrinth')}
          disabled={!availableSources.modrinth || loading}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 ${
            source === 'modrinth'
              ? 'bg-[#1bd96a] text-white shadow-sm [&>img]:brightness-0 [&>img]:invert'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          } ${!availableSources.modrinth ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <Image
            src={modrinthIcon}
            width={14}
            height={14}
            alt=""
            className="size-3.5"
          />
          Modrinth
        </button>
        <button
          onClick={() => handleSourceChange('curseforge')}
          disabled={!availableSources.curseforge || loading}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 ${
            source === 'curseforge'
              ? 'bg-[#f16436] text-white shadow-sm [&>img]:brightness-0 [&>img]:invert'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          } ${!availableSources.curseforge ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <Image
            src={curseforgeIcon}
            width={14}
            height={14}
            alt=""
            className="size-3.5"
          />
          CurseForge
        </button>
        <button
          onClick={() => handleSourceChange('github')}
          disabled={!availableSources.github || loading}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-150 ${
            source === 'github'
              ? 'bg-[#24292f] text-white shadow-sm'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          } ${!availableSources.github ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <FontAwesomeIcon icon={faGithub} className="size-3.5" />
          GitHub
        </button>
      </div>

      <div className="ag-theme-custom h-[467px]">
        {loading ? (
          <div className="w-full h-full rounded bg-gray-200 animate-pulse"></div>
        ) : (
          <AgGridReact
            key={source}
            columnDefs={colDefs}
            rowData={rowData}
            suppressTouch={false}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20, 30, 50, 100]}
            paginationAutoPageSize={true}
            suppressMenuHide={true}
          />
        )}
      </div>
    </div>
  );
}
