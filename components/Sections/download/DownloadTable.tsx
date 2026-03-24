'use client';

import { AgGridReact } from 'ag-grid-react';
import '@/styles/ag-grid-theme.css';
import { useEffect, useState } from 'react';
import { getParsedReleases } from '@/lib/getReleases.tsx';
import { parseNumber } from '@/lib/utils';
import Downloads from './downloads';
// import Latest from './Latest';

export default function DownloadTable() {
  const [rowData, setRowData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [colDefs, setColDefs]: any[] = useState();

  const formatVersion = (ver: string) => {
    const versionMap: Record<string, string> = {
      '12111': '1.21.11',
      '12110': '1.21.10',
      '1219': '1.21.9',
      '1218': '1.21.8',
      '1217': '1.21.7',
      '1216': '1.21.6',
      '1215': '1.21.5',
      '1214': '1.21.4',
      '1211': '1.21.1',
      '121': '1.21',
      '1206': '1.20.6',
      '1204': '1.20.4',
      '1202': '1.20.2',
      '1201': '1.20.1',
      '120': '1.20',
      '1194': '1.19.4',
    };
    return versionMap[ver] || ver;
  };

  const mobileVersions = [
    '12111',
    '12110',
    '1219',
    '1218',
    '1217',
    '1216',
    '1215',
    '1214',
    '1211',
    '121',
    '1206',
    '1204',
    '1202',
    '1201',
    '120',
    '1194',
  ];

  useEffect(() => {
    const versionColumns = [
      { field: '12111', headerName: '1.21.11' },
      { field: '12110', headerName: '1.21.10' },
      { field: '1219', headerName: '1.21.9' },
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

    setColDefs([
      {
        field: 'version',
        headerName: 'Version',
        pinned: 'left',
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
      ...versionColumns.map((col) => ({
        field: col.field,
        headerName: col.headerName,
        cellRenderer: (params: any) =>
          params.value ? (
            <a
              href={params.value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 hover:underline focus:outline-none"
            >
              Download
            </a>
          ) : (
            <span className="text-slate-600">—</span>
          ),
        width: 150,
      })),
    ]);

    const loadReleases = async () => {
      try {
        const releases = await getParsedReleases();
        setRowData(releases);
      } catch (err) {
        console.error('Loading releases failed:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadReleases();
  }, []);

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
      <div className="mt-8 mb-8">
        {/* Mobile: API-driven list */}
        <div className="block md:hidden rounded-lg overflow-hidden border border-slate-800/50 divide-y divide-slate-800/50">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 px-5"
              >
                <div className="flex-1">
                  <div className="h-4 w-20 bg-slate-700/50 rounded animate-pulse mb-2"></div>
                  <div className="h-3 w-16 bg-slate-700/30 rounded animate-pulse"></div>
                </div>
                <div className="w-5 h-5 bg-slate-700/50 rounded animate-pulse"></div>
              </div>
            ))
          ) : error ? (
            <div className="py-8 px-5 text-center text-slate-400">
              Failed to load releases. Please try again later.
            </div>
          ) : (
            mobileVersions.map((ver, i) => {
              const release = rowData.find((r: any) => r[ver]);
              const href =
                ver === '1214'
                  ? 'https://github.com/clickcrystals-development/ClickCrystals/releases/download/v1.2.9/ClickCrystals-1.21.4-1.2.9.jar'
                  : release?.[ver];
              const version =
                ver === '1214'
                  ? '1.2.9'
                  : ver === '1211' || ver === '121'
                    ? '1.2.9-1.3.7'
                    : release?.version;
              if (!href) return null;
              return (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 px-5 hover:bg-slate-800/60 active:bg-slate-800/80 active:scale-[0.98] transition-all"
                >
                  <div>
                    <span className="text-white font-semibold text-base">
                      {formatVersion(ver)}
                    </span>
                    <span className="text-slate-400 text-xs ml-2">
                      v{version}
                      {(ver === '1211' || ver === '121') && (
                        <span className="text-yellow-500 text-[10px] uppercase font-semibold px-1.5 py-0.5">
                          {' '}
                          exp
                        </span>
                      )}
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

        {/* Desktop: Full table */}
        <div className="hidden md:block ag-theme-quartz-dark h-[467px] rounded-lg overflow-hidden border border-slate-800/50 shadow-lg relative">
          {loading ? (
            <div className="w-full h-full rounded bg-slate-800/30 animate-pulse"></div>
          ) : error ? (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              Failed to load releases. Please try again later.
            </div>
          ) : (
            <AgGridReact
              columnDefs={colDefs}
              rowData={rowData}
              loading={loading}
              suppressTouch={false}
              suppressMenuHide={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}
