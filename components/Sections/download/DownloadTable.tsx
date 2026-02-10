'use client';

import { AgGridReact } from 'ag-grid-react';
import '@/styles/ag-grid-theme.css';
import { useEffect, useState } from 'react';
import { getParsedReleases } from '@/lib/getReleases.tsx';
import { parseNumber } from '@/lib/utils';
import Downloads from './downloads';
import Link from 'next/link';
// import Latest from './Latest';

export default function DownloadTable() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [colDefs, setColDefs]: any[] = useState();

  useEffect(() => {
    const versionColumns = [
      { field: '1218', headerName: '1.21.8' },
      { field: '1217', headerName: '1.21.7' },
      { field: '1216', headerName: '1.21.6' },
      { field: '1215', headerName: '1.21.5' },
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
        pinned: true,
        width: 150,
        cellStyle: { fontWeight: '600', color: '#f8fafc' },
      },
      {
        field: 'code',
        headerName: 'Source',
        cellRenderer: (params: any) => (
          <a
            href={params.value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
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
          <span className="font-mono text-slate-400">
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
              className="text-emerald-400 hover:text-emerald-300 underline"
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
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error('Loading releases failed!');
      }
    };

    loadReleases();
  }, []);

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">
        Download Statistics
      </h2>
      <p className="text-lg text-slate-300 mb-8 max-w-4xl leading-relaxed">
        View total download counts and download any release for available
        Minecraft versions.
      </p>
      <Downloads />

      <div className="my-8">
        <p className="text-sm text-slate-400 max-w-3xl mb-6 leading-relaxed">
          The table below shows recent releases of ClickCrystals. For all 90+
          releases, visit our GitHub releases page.
          <br />
          <br />
          Many Minecraft versions are not supported. If there isn't a column for
          your version, it may not be supported.
          <br />
          <br />
          <span className="font-semibold text-slate-300">Note:</span> Scroll
          right in the grid to see downloads for other versions.
        </p>
        <div className="border-l-4 border-yellow-500 bg-yellow-500/10 backdrop-blur-sm p-6 rounded-r-lg">
          <p className="text-base text-yellow-200 font-semibold mb-3">
            Important Safety Warning
          </p>
          <p className="text-sm text-slate-300 mb-3 leading-relaxed">
            ClickCrystals is only available for the Fabric modloader. There are
            no plans to port to other modloaders.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            Downloads for other modloaders are not official and may contain
            malicious code. Only download from official sources listed above.
            <br />
            <br />
            <span className="font-semibold text-yellow-200">
              We have seen several websites publishing unofficial malware
              versions of ClickCrystals.
            </span>{' '}
            Please be careful and only download from official sources.
          </p>
        </div>
      </div>
      <div className="ag-theme-quartz-dark h-[467px] rounded-lg overflow-hidden">
        {loading ? (
          <div className="w-full h-full rounded bg-gray-200 animate-pulse"></div>
        ) : (
          <AgGridReact
            columnDefs={colDefs}
            rowData={rowData}
            loading={loading}
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
