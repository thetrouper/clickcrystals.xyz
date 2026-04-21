'use client';

import { AgGridReact } from 'ag-grid-react';
import '@/styles/ag-grid-theme.css';
import { useState, useMemo } from 'react';
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

interface DownloadTableProps {
  initialData: Record<Exclude<Source, 'all'>, SourceData | null>;
}

function buildColDefs(mcVersions: { field: string; headerName: string }[]) {
  return [
    {
      field: 'version',
      pinned: 'left' as const,
      lockPosition: true,
      width: 150,
      cellStyle: { fontWeight: '900', color: '#f8fafc' },
    },
    {
      field: 'code',
      headerName: 'Source',
      cellRenderer: (params: any) => (
        <a
          href={params.value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-slate-200 hover:underline focus:outline-none"
        >
          View Code
        </a>
      ),
      width: 130,
    },
    {
      field: 'downloads',
      headerName: 'Downloads',
      cellRenderer: (params: any) => (
        <span className="font-mono text-slate-300">
          {parseNumber(params.value)}
        </span>
      ),
      width: 130,
    },
    ...mcVersions.map((col) => ({
      field: col.field,
      headerName: col.headerName,
      cellRenderer: (params: any) =>
        params.value ? (
          <Link
            href={params.value}
            className="text-blue-400 hover:text-blue-300 hover:underline focus:outline-none"
          >
            Download
          </Link>
        ) : (
          <span className="text-slate-600">—</span>
        ),
      width: 150,
    })),
  ];
}

function buildAllData(
  dataCache: Record<Exclude<Source, 'all'>, SourceData | null>,
): SourceData {
  const sources: Exclude<Source, 'all'>[] = [
    'modrinth',
    'curseforge',
    'github',
  ];
  const allFieldMap = new Map<string, string>();

  for (const src of sources) {
    const data = dataCache[src];
    if (!data) continue;
    for (const col of data.mcVersions) {
      if (!allFieldMap.has(col.field))
        allFieldMap.set(col.field, col.headerName);
    }
  }

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
        merged.set(version, { code: row.code, downloads: 0, assets: {} });
        for (const field of Array.from(allFieldMap.keys())) {
          merged.get(version)!.assets[field] = null;
        }
      }
      const entry = merged.get(version)!;
      entry.downloads += row.downloads ?? 0;
      for (const field of Array.from(allFieldMap.keys())) {
        if (entry.assets[field] === null && row[field] != null) {
          entry.assets[field] = row[field];
        }
      }
    }
  }

  const releases: Record<string, any>[] = [];
  merged.forEach((entry, version) => {
    releases.push({
      version,
      code: entry.code,
      downloads: entry.downloads,
      ...entry.assets,
    });
  });

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

export default function DownloadTable({ initialData }: DownloadTableProps) {
  const [source, setSource] = useState<Source>('all');
  const dataCache = initialData;

  const availableSources = useMemo(
    () => ({
      modrinth: dataCache.modrinth !== null,
      curseforge: dataCache.curseforge !== null,
      github: dataCache.github !== null,
    }),
    [dataCache],
  );

  const allData = useMemo(() => buildAllData(dataCache), [dataCache]);
  const currentData = source === 'all' ? allData : dataCache[source];
  const rowData = currentData?.rows ?? [];
  const colDefs = currentData ? buildColDefs(currentData.mcVersions) : [];

  const handleSourceChange = (newSource: Source) => {
    if (newSource === source) return;
    if (newSource !== 'all' && !availableSources[newSource]) return;
    setSource(newSource);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-white tracking-tight">
        Download Statistics
      </h2>
      <p className="text-sm md:text-base text-slate-200 mb-8 max-w-4xl leading-relaxed">
        View total download counts and download any release for available
        Minecraft versions.
      </p>
      <Downloads />

      <div className="mt-8 mb-8">
        <p className="text-sm text-slate-300 mb-4 md:mb-8 leading-relaxed md:leading-loose space-y-4 md:space-y-6">
          <span className="block">
            The table below shows recent releases of ClickCrystals. For all 90+
            releases, visit our{' '}
            <a
              href="https://github.com/clickcrystals-development/ClickCrystals/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:underline decoration-slate-500 hover:text-white hover:decoration-slate-400 transition-colors focus:outline-none"
            >
              GitHub releases page
            </a>
            .
          </span>
          <span className="block">
            Many Minecraft versions are not supported. If there isn't a column
            for your version, it may not be supported.
          </span>
          <span className="hidden md:block">
            <span className="font-semibold text-slate-300">Note:</span> Scroll
            right for more versions and down for older releases.
          </span>
        </p>
        <div className="mt-8 border-l-4 border-yellow-600/60 bg-yellow-500/10 p-4 md:p-5 rounded-r-lg">
          <p className="text-sm text-yellow-200/80 font-semibold mb-2">
            Important Safety Warning
          </p>
          <p className="text-sm text-slate-400 mb-2 leading-relaxed">
            ClickCrystals is only available for the Fabric modloader. There are
            no plans to port to other modloaders.
          </p>
          <p className="text-sm text-slate-400 mb-3 leading-relaxed">
            Downloads for other modloaders are not official and may contain
            malicious code. Only download from official sources listed above.
          </p>
          <p className="text-sm font-medium text-yellow-200/70 leading-relaxed">
            We have seen several websites publishing unofficial malware versions
            of ClickCrystals. Please be careful and only download from official
            sources.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        {(
          [
            { key: 'all', label: 'All', icon: null },
            { key: 'modrinth', label: 'Modrinth', icon: 'modrinth' },
            { key: 'curseforge', label: 'CurseForge', icon: 'curseforge' },
            { key: 'github', label: 'GitHub', icon: 'github' },
          ] as const
        ).map(({ key, label, icon }) => {
          const disabled = key !== 'all' && !availableSources[key];
          const active = source === key;
          return (
            <button
              key={key}
              onClick={() => handleSourceChange(key)}
              disabled={disabled}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 border ${
                active
                  ? 'bg-blue-600 border-blue-700 text-white'
                  : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-500'
              } ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {icon === 'modrinth' && (
                <Image src={modrinthIcon} width={12} height={12} alt="" />
              )}
              {icon === 'curseforge' && (
                <Image src={curseforgeIcon} width={12} height={12} alt="" />
              )}
              {icon === 'github' && (
                <FontAwesomeIcon icon={faGithub} className="w-3 h-3" />
              )}
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 mb-8">
        <div className="hidden md:block ag-theme-quartz-dark h-[467px] rounded-lg overflow-hidden border border-slate-800/50 shadow-lg relative">
          <AgGridReact
            key={source}
            columnDefs={colDefs}
            rowData={rowData}
            suppressTouch={false}
            suppressMenuHide={true}
          />
        </div>

        <div className="block md:hidden rounded-lg overflow-hidden border border-slate-800/50 divide-y divide-slate-800/50">
          {rowData.length === 0 ? (
            <div className="py-8 px-5 text-center text-slate-400">
              Failed to load releases. Please try again later.
            </div>
          ) : (
            (currentData?.mcVersions ?? []).map((col, i) => {
              const release = rowData.find((r: any) => r[col.field]);
              const href = release?.[col.field];
              if (!href) return null;
              return (
                <a
                  key={i}
                  href={href}
                  className="flex items-center justify-between py-4 px-5 hover:bg-slate-800/60 active:bg-slate-800/80 active:scale-[0.98] transition-all"
                >
                  <div>
                    <span className="text-white font-semibold text-base">
                      {col.headerName}
                    </span>
                    <span className="text-slate-400 text-xs ml-2">
                      v{release?.version}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              );
            })
          )}
        </div>
        <a
          href="https://github.com/clickcrystals-development/ClickCrystals/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="block md:hidden text-center py-3 text-blue-400 hover:text-blue-300 text-sm transition-colors"
        >
          View all releases on GitHub
        </a>
      </div>
    </div>
  );
}
