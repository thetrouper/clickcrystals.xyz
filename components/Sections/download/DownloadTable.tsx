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
            field: "v121",
            headerName: "v1.21",
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
            field: "v1206",
            headerName: "v1.20.6",
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
            field: "v1204",
            headerName: "v1.20.4",
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
            field: "v1202",
            headerName: "v1.20.2",
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
            field: "v1201",
            headerName: "v1.20.1",
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
            field: "v120",
            headerName: "v1.20",
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
            field: "v1904",
            headerName: "v1.19.4",
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
            field: "v1903",
            headerName: "v1.19.3",
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
            field: "v1902",
            headerName: "v1.19.2",
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
            field: "v121",
            headerName: "v1.21",
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
            field: "v1206",
            headerName: "v1.20.6",
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
            field: "v1204",
            headerName: "v1.20.4",
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
            field: "v1202",
            headerName: "v1.20.2",
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
            field: "v120",
            headerName: "v1.20",
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
          field: "v121",
          headerName: "v1.21",
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
          field: "v1206",
          headerName: "v1.20.6",
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
          field: "v1204",
          headerName: "v1.20.4",
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
          field: "v1202",
          headerName: "v1.20.2",
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
          field: "v120",
          headerName: "v1.20",
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
      
      <div className="flex items-center space-x-2 my-4 cursor-pointer">
        <Checkbox id="showAllVers" value={showAllVers} onCheckedChange={handleShowAllVers} />
        <label
          htmlFor="showAllVers"
          className="select-none text-[14px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show all supported versions?
        </label>
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