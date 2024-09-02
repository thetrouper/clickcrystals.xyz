"use client"

import { AgGridReact } from 'ag-grid-react';
import "@/styles/ag-grid-theme.css";
import { Suspense, useEffect, useState } from 'react';
import { getParsedReleases } from '@/lib/getReleases.tsx';
import { parseNumber } from '@/lib/utils';
import Downloads from './downloads';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
// import Latest from './Latest';

export default function DownloadTable() {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllVers, setShowAllVers] = useState(0);
  const [colDefs, setColDefs]: any[] = useState();

  const handleShowAllVers = (checked: boolean) => {
    setShowAllVers(checked ? 1 : 0);
    if (checked) {
      setColDefs(
        [
          { field: "version", pinned: true, movable: false, width: 126 },
          {
            field: "code",
            headerName: "Source Code",
            cellRenderer: (params: any) => {
              return (
                <Link href={params.value} className="text-blue-500">
                  Open
                </Link>
              );
            },
            width: 115,
          },
          {
            field: "downloads",
            cellRenderer: (params: any) => {
              return parseNumber(params.value);
            },
            width: 115,
          },
           {
            field: "1211",
            headerName: "1.21.1",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "121",
            headerName: "1.21",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1206",
            headerName: "1.20.6",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
           {
            field: "1205",
            headerName: "1.20.5",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1204",
            headerName: "1.20.4",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
           {
            field: "1203",
            headerName: "1.20.3",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1202",
            headerName: "1.20.2",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1201",
            headerName: "1.20.1",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "120",
            headerName: "1.20",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1194",
            headerName: "1.19.4",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1193",
            headerName: "1.19.3",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1192",
            headerName: "1.19.2",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1191",
            headerName: "1.19.1",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
        ]
      );
    } else {
      setColDefs(
        [
          { field: "version", pinned: true, movable: false, width: 126 },
          {
            field: "code",
            headerName: "Source Code",
            cellRenderer: (params: any) => {
              return (
                <Link href={params.value} className="text-blue-500">
                  Open
                </Link>
              );
            },
            width: 115,
          },
          {
            field: "downloads",
            cellRenderer: (params: any) => {
              return parseNumber(params.value);
            },
            width: 115,
          },
           {
            field: "1211",
            headerName: "1.21.1",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "121",
            headerName: "1.21",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1206",
            headerName: "1.20.6",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1204",
            headerName: "1.20.4",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1203",
            headerName: "1.20.3",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1202",
            headerName: "1.20.2",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1201",
            headerName: "1.20.1",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "120",
            headerName: "1.20",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
        ]
      );
    }
  }

  useEffect(() => {
        setColDefs(
        [
          { field: "version", pinned: true, movable: false, width: 126 },
          {
            field: "code",
            headerName: "Source Code",
            cellRenderer: (params: any) => {
              return (
                <Link href={params.value} className="text-blue-500">
                  Open
                </Link>
              );
            },
            width: 115,
          },
          {
            field: "downloads",
            cellRenderer: (params: any) => {
              return parseNumber(params.value);
            },
            width: 115,
          },
           {
            field: "1211",
            headerName: "1.21.1",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "121",
            headerName: "1.21",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1206",
            headerName: "1.20.6",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1204",
            headerName: "1.20.4",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1203",
            headerName: "1.20.3",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1202",
            headerName: "1.20.2",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "1201",
            headerName: "1.20.1",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
          {
            field: "120",
            headerName: "1.20",
            cellRenderer: (params: any) => {
              return params.value === null ? (
                "Not available"
              ) : (
                <Link href={params.value} className="text-blue-500">
                  Download
                </Link>
              );
            },
            width: 160
          },
        ]
      );
    const loadReleases = async () => {
      try {
        const releases = await getParsedReleases();
        setRowData(releases);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error("Loading releases failed!")
      }
    };

    loadReleases();
  }, []);



  return (
    <div className="my-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">Download Statistics</h2>
      <p className="text-gray-600 mb-4 max-w-4xl">
        Here you can see the exact total download count of ClickCrystals from its all official sources. You can download any release for the available minecraft versions from the table below as well.
      </p>
      <Downloads />

      <div className="my-4">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Checkbox id="showAllVers" value={showAllVers} onCheckedChange={handleShowAllVers} />
          <label
            htmlFor="showAllVers"
            className="select-none text-[14px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show all supported version downloads?
          </label>
        </div>
        <p className="text-xs text-black max-w-2xl select-none mt-2">
          If your minecraft version is missing here even after ticking the checkbox above, it means that ClickCrystals has never supported that minecraft version. If your version is new, ClickCrystals&apos;s next update might release support for it.
          <br /><br />
          <span className="font-semibold">Note:</span> you will have to scroll right in the table below to see downloads for other versions</p>
          <div className="border-l-4 border-yellow-500 bg-yellow-100 p-4 my-4">
            <p className="md:max-w-3xl text-sm text-yellow-800 font-semibold mb-2">Important Safety Warning:</p>
            <p className="md:max-w-3xl text-xs">ClickCrystals has only ever been released for Fabric and we do not plan to support Forge or any other mod loaders.</p>
          <p className="md:max-w-3xl text-xs text-yellow-900 font-semibold mt-2">There are no official ports for other modloaders of ClickCrystals. If you ever find a ClickCrystal port for another modloader, THEN DO NOT DOWNLOAD OR USE IT. They can add rats hidden in the code and your minecraft account might get hacked by the fake version's author. The original, official ClickCrystals staff is not responsible for your account being hacked by a ClickCrystal ratted version.</p>
          </div>
    </div>
      <div
      className="ag-theme-custom h-[467px]"
    >
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
  )
}
