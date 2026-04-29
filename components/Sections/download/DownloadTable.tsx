'use client';

import { AgGridReact } from 'ag-grid-react';
import '@/styles/ag-grid-theme.css';
import { useState, useMemo, useEffect } from 'react';
import { parseNumber } from '@/lib/utils';
import Downloads from './downloads';
import Image from 'next/image';
import modrinthIcon from '@/public/icons/modrinth.svg';
import curseforgeIcon from '@/public/icons/curseforge.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
      width: 140,
      cellStyle: {
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: '-0.01em',
      },
    },
    {
      field: 'code',
      headerName: 'Source',
      cellRenderer: (params: any) => (
        <a
          href={params.value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-colors focus:outline-none"
          style={{ color: 'rgba(147,197,253,0.7)' }}
        >
          GitHub ↗
        </a>
      ),
      width: 110,
    },
    {
      field: 'downloads',
      headerName: 'Downloads',
      cellRenderer: (params: any) => (
        <span className="font-mono text-slate-400 text-xs">
          {parseNumber(params.value)}
        </span>
      ),
      width: 120,
    },
    ...mcVersions.map((col) => ({
      field: col.field,
      headerName: col.headerName,
      cellRenderer: (params: any) =>
        params.value ? (
          <a
            href={params.value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors focus:outline-none"
          >
            Download
          </a>
        ) : (
          <span className="text-slate-800 text-xs">—</span>
        ),
      width: 130,
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
        for (const field of Array.from(allFieldMap.keys()))
          merged.get(version)!.assets[field] = null;
      }
      const entry = merged.get(version)!;
      entry.downloads += row.downloads ?? 0;
      for (const field of Array.from(allFieldMap.keys())) {
        if (entry.assets[field] === null && row[field] != null)
          entry.assets[field] = row[field];
      }
    }
  }
  const releases: Record<string, any>[] = [];
  merged.forEach((entry, version) =>
    releases.push({
      version,
      code: entry.code,
      downloads: entry.downloads,
      ...entry.assets,
    }),
  );
  const fieldsWithData = new Set<string>();
  for (const release of releases) {
    for (const [key, val] of Object.entries(release)) {
      if (!['version', 'code', 'downloads'].includes(key) && val != null)
        fieldsWithData.add(key);
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

const filterSources = [
  { key: 'all' as const, label: 'All', icon: null },
  { key: 'modrinth' as const, label: 'Modrinth', icon: 'modrinth' },
  { key: 'curseforge' as const, label: 'CurseForge', icon: 'curseforge' },
  { key: 'github' as const, label: 'GitHub', icon: 'github' },
];

export default function DownloadTable({ initialData }: DownloadTableProps) {
  const [source, setSource] = useState<Source>('all');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const availableSources = useMemo(
    () => ({
      modrinth: initialData.modrinth !== null,
      curseforge: initialData.curseforge !== null,
      github: initialData.github !== null,
    }),
    [initialData],
  );

  const allData = useMemo(() => buildAllData(initialData), [initialData]);
  const currentData = source === 'all' ? allData : initialData[source];
  const rowData = currentData?.rows ?? [];
  const colDefs = currentData ? buildColDefs(currentData.mcVersions) : [];

  return (
    <div>
      <Downloads />

      <div
        className="mt-16 mb-10 rounded-xl p-6 relative overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              'linear-gradient(to right, rgba(234,179,8,0.9), rgba(234,179,8,0.2), transparent)',
          }}
        />
        <div
          className="absolute top-0 left-0 w-48 h-16 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 0% 0%, rgba(234,179,8,0.07), transparent 70%)',
          }}
        />
        <div className="relative flex items-center gap-2.5 mb-3">
          <svg
            className="w-4 h-4 text-yellow-400 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-yellow-400 font-semibold text-sm">
            Safety Warning
          </p>
        </div>
        <p className="relative text-slate-300 text-sm leading-relaxed mb-1.5">
          ClickCrystals is only available for the{' '}
          <span className="text-white font-semibold">Fabric modloader</span>.
          Downloads for other modloaders are not official and may contain
          malicious code.
        </p>
        <p className="relative text-slate-500 text-sm leading-relaxed">
          We have seen several websites publishing unofficial malware versions.
          Only download from the official sources listed above.
        </p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1.5">
          {filterSources.map(({ key, label, icon }) => {
            const disabled =
              key !== 'all' && !availableSources[key as Exclude<Source, 'all'>];
            const active = source === key;
            return (
              <button
                key={key}
                onClick={() => {
                  if (!disabled) setSource(key);
                }}
                disabled={disabled}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-blue-600 text-white border border-blue-700'
                    : 'text-slate-400 hover:text-white'
                } ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
                style={
                  active
                    ? {
                        boxShadow: 'inset 0 1px 0 rgba(96,165,250,0.3)',
                      }
                    : {
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }
                }
              >
                {icon === 'modrinth' && (
                  <Image src={modrinthIcon} width={10} height={10} alt="" />
                )}
                {icon === 'curseforge' && (
                  <Image src={curseforgeIcon} width={10} height={10} alt="" />
                )}
                {icon === 'github' && (
                  <FontAwesomeIcon icon={faGithub} className="w-2.5 h-2.5" />
                )}
                {label}
              </button>
            );
          })}
        </div>
        <p className="text-slate-700 text-xs hidden md:block">
          Scroll right for more · down for older releases
        </p>
      </div>

      <SkeletonTheme
        baseColor="rgba(255,255,255,0.04)"
        highlightColor="rgba(255,255,255,0.08)"
      >
        <div
          className="hidden md:block rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          }}
        >
          {!ready ? (
            <div
              className="h-[467px] p-0"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <Skeleton height={44} borderRadius={0} />
              <div className="p-3 space-y-1.5">
                {Array(14)
                  .fill(null)
                  .map((_, i) => (
                    <Skeleton key={i} height={32} borderRadius={6} />
                  ))}
              </div>
            </div>
          ) : (
            <div className="ag-theme-quartz-dark h-[467px]">
              <AgGridReact
                key={source}
                columnDefs={colDefs}
                rowData={rowData}
                suppressTouch={false}
                suppressMenuHide={true}
                suppressRowClickSelection={true}
              />
            </div>
          )}
        </div>

        <div className="block md:hidden space-y-2">
          {!ready ? (
            <div className="space-y-2">
              {Array(8)
                .fill(null)
                .map((_, i) => (
                  <Skeleton key={i} height={64} borderRadius={12} />
                ))}
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
                  className="flex items-center justify-between py-4 px-5 rounded-xl transition-all active:scale-[0.98]"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      'rgba(255,255,255,0.05)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      'rgba(255,255,255,0.03)')
                  }
                >
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {col.headerName}
                    </p>
                    <p className="text-slate-500 text-[11px] font-mono mt-0.5">
                      v{release?.version}
                    </p>
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
          className="block md:hidden text-center py-4 text-slate-600 hover:text-slate-400 text-xs transition-colors mt-2"
        >
          View all 90+ releases on GitHub →
        </a>
      </SkeletonTheme>
    </div>
  );
}
