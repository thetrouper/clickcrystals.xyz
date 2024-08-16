'use client'

import { Compressor } from "@/lib/compressor";
import Editor from "@monaco-editor/react"
import { useEffect, useState } from "react"

export default function CCSEditor() {
  const [code, setCode] = useState(`// @you
def module create Module Name
def desc Describe your module

// this is the ClickScript playground
// write your ClickScript codes here and directly format or minify the code!`);

  const [result, setResult] = useState(`// When you click format or minify, the result will appear here.`);

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (prefersDark) {
      setDark(true);
    }
  }, []);

  const compressor = new Compressor();

  const handleCodeEdit = (value: any, event: any) => {
    setCode(value);
  }

  const deCompressCode = (e: any) => {
    setResult(compressor.decompress(code));
  }

  const compressCode = (e: any) => {
    setResult(compressor.compress(code));
  }

  return (
    <div className={`flex flex-col lg:flex-row h-screen bg-[${dark ? "#1e1e1e] text-white" : "#ffffff] text-black"}`}>
      <div className="flex-1 h-full">
        <Editor
          language="plain"
          className="h-full"
          value={code}
          onChange={handleCodeEdit}
          theme={dark ? "vs-dark" : "light"}
          options={{
            'wordWrap': true,
          }}
        />
      </div>

      <div className="flex flex-col justify-center items-center p-4 lg:w-1/12 lg:px-2 lg:py-8">
        <button onClick={deCompressCode} className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] active:bg-[#2e3d75] font-semibold px-6 py-2.5 shadow-none text-white text-sm w-full mb-4 lg:w-auto">Format</button>
        <button onClick={compressCode} className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] active:bg-[#2e3d75] font-semibold px-6 py-2.5 shadow-none text-white text-sm w-full lg:w-auto">Minify</button>
      </div>

      <div className="flex-1 h-full">
        <Editor
          language="plain"
          className="h-full"
          theme={dark ? "vs-dark" : "light"}
          value={result}
          options={{
            'readOnly': true,
            'wordWrap': true,
          }}
        />
      </div>
    </div>
  )
}
