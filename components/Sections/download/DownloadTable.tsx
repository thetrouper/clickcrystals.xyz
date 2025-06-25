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
      { field: 'version', pinned: true, movable: false, width: 126 },
      {
        field: 'code',
        headerName: 'Source Code',
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
      ...versionColumns.map((col) => ({
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
      <div className="ag-theme-custom h-[467px]">
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
