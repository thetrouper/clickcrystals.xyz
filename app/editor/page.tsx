'use client'

const defaultCode = `def module obi-switcher
def desc "obi switch"

on tick {
   if playing {
      if input_active use {
         if holding #sword, #crystal {
            if targeting_block {
               if !if target_block #air, :charged_respawn_anchor {
                  wait 0.02
                  switch #obsidian
                  input right
               }
            }
         }
      }
   }
}`;

import Editor from "@monaco-editor/react"

export default function CCSEditor() {
  return (
    <div className="flex flex-row justify-between h-screen py-8 bg-[#1e1e1e] text-white">
      <div className="w-1/2 h-screen">
        <Editor
          language="plain"
          className="h-full w-1/2"
          defaultValue={defaultCode}
          theme="vs-dark"
        />
      </div>
      <div className="flex flex-col gap-4">
        <button className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] font-semibold px-6 py-2.5 shadow-none text-white text-sm">Format</button>
        <button className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] font-semibold px-6 py-2.5 shadow-none text-white text-sm">Minify</button>
      </div>
      <div className="w-1/2 h-screen">
        <Editor
          language="plain"
          className="h-full w-1/2"
          defaultValue={defaultCode}
          theme="vs-dark"
        />
      </div>
    </div>
  )
}