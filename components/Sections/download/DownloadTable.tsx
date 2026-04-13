'use client';

import { AgGridReact } from 'ag-grid-react';
import '@/styles/ag-grid-theme.css';
import { useEffect, useState } from 'react';
import { getParsedReleases } from '@/lib/getReleases.tsx';
import { getModrinthParsedReleases } from '@/lib/getModrinthReleases';
import { parseNumber } from '@/lib/utils';
import Downloads from './downloads';
import Link from 'next/link';
import Image from 'next/image';
import modrinthIcon from '@/public/icons/modrinth.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type Source = 'modrinth' | 'github';

interface SourceData {
  rows: any[];
  mcVersions: { field: string; headerName: string }[];
}

const GITHUB_MC_VERSIONS = [
  { field: '12111', headerName: '1.21.11' },
  { field: '1218', headerName: '1.21.8' },
  { field: '1217', headerName: '1.21.7' },
  { field: '1216', headerName: '1.21.6' },
  { field: '1215', headerName: '1.21.5' },
  { field: '1214', headerName: '1.21.4' },
  { field: '1211', headerName: '1.21.1' },
  { field: '121', headerName: '1.21' },
  { field: '1206', headerName: '1.20.6' },
  { field: '1204', headerName: '1.20.4' },
  { field: '1202', headerName: '1.20.2' },
  { field: '1201', headerName: '1.20.1' },
  { field: '120', headerName: '1.20' },
  { field: '1194', headerName: '1.19.4' },
];

function buildColDefs(
  mcVersions: { field: string; headerName: string }[],
  sourceType: Source,
) {
  return [
    { field: 'version', pinned: true, movable: false, width: 126 },
    {
      field: 'code',
      headerName: sourceType === 'modrinth' ? 'Release' : 'Source Code',
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

export default function DownloadTable() {
  const [source, setSource] = useState<Source>('modrinth');
  const [loading, setLoading] = useState(true);
  const [dataCache, setDataCache] = useState<Record<Source, SourceData | null>>(
    {
      modrinth: null,
      github: null,
    },
  );
  const [availableSources, setAvailableSources] = useState<
    Record<Source, boolean>
  >({
    modrinth: true,
    github: true,
  });

  const currentData = dataCache[source];
  const rowData = currentData?.rows ?? [];
  const colDefs = currentData
    ? buildColDefs(currentData.mcVersions, source)
    : [];

  // Load data for a specific source
  const loadSource = async (src: Source): Promise<boolean> => {
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
      } else {
        const releases = await getParsedReleases();
        setDataCache((prev) => ({
          ...prev,
          github: {
            rows: releases,
            mcVersions: GITHUB_MC_VERSIONS,
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

  // Initial load: try Modrinth first, fallback to GitHub
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const modrinthSuccess = await loadSource('modrinth');

      // If Modrinth failed, load GitHub and set as active source
      if (!modrinthSuccess) {
        await loadSource('github');
        setSource('github');
      }
      setLoading(false);
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSourceChange = async (newSource: Source) => {
    if (newSource === source || loading) return;
    if (!availableSources[newSource]) return;

    setLoading(true);
    await loadSource(newSource);
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

      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-gray-500 font-medium select-none">
          Showing releases from:
        </span>
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
        {!availableSources.modrinth && source === 'github' && (
          <span className="text-xs text-amber-600 italic ml-1">
            Modrinth unavailable — showing GitHub releases
          </span>
        )}
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
