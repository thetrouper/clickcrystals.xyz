'use client'

import { Compressor } from "@/lib/compressor";
import Editor from "react-monaco-editor";
import { languageDef, configuration, theme } from '@/lib/editor-config';
import { useState } from "react";
import Publish from "./Publish";

export default function CCSEditor() {
  const defaultCode = `// @anonymous\ndef module custom-module
def desc "Custom Scripted Module"

on module_enable {

}

on module_disable {

}`
  
  const compressor = new Compressor();
  const [code, setCode] = useState(defaultCode);
  const [result, setResult] = useState("");
  const [editor, setEditor] = useState<any>();

  const deCompressCode = () => {
    setResult(compressor.decompress(editor.getValue()));
  };

  const compressCode = () => {
    setResult(compressor.compress(editor.getValue()));
  };
  
  const updateCodeState = () => {
    setCode(editor.getValue())
  }

  const [dark, setDark] = useState(true);
  // useEffect(() => {
  //   const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  //   if (darkThemeQuery.matches) {
  //     setDark(true);
  //   }
  //   darkThemeQuery.addEventListener("change", (e) => {
  //     if (e.matches) {
  //       setDark(true);
  //     } else {
  //       setDark(false);
  //     }
  //   });
  // }, []);

  const editorWillMount = (monaco: any) => {
    if (!monaco.languages.getLanguages().some(({ id }: any) => id === 'ccs')) {
      monaco.languages.register({ id: 'ccs' });
      monaco.languages.setMonarchTokensProvider('ccs', languageDef);
      monaco.languages.setLanguageConfiguration('ccs', configuration);
      monaco.editor.defineTheme('ccs', theme);
    }
  };

  const editorDidMount = (editor: any) => {
    editor.focus();
    setEditor(editor);
  };

  const [loading, setLoading] = useState(true);

  const editorsDidMount = (editor: any) => {
    setLoading(false);
  };

  return (
    <div className={`flex flex-col lg:flex-row h-screen bg-[#ffffff] text-black dark:bg-[#1e1e1e] dark:text-white ${loading && 'opacity-0'}`}>
      <div className="flex-1 h-full">
        <Editor
          language="ccs"
          editorWillMount={editorWillMount}
          editorDidMount={editorDidMount}
          className="h-full"
          value={defaultCode}
          theme={dark ? "ccs" : "light"}
          options={{
            'wordWrap': 'on',
            'autoClosingBrackets': 'always',
            'autoClosingQuotes': 'always',
            'autoIndent': 'brackets',
            'quickSuggestions': true,
            'quickSuggestionsDelay': 1,
            'wordBasedSuggestions': 'allDocuments',
            'acceptSuggestionOnCommitCharacter': true,
            'tabSize': 2,
          }}
        />
      </div>

      <div className="flex flex-col justify-center items-center p-4 lg:w-1/12 lg:px-2 lg:py-8 bg-white dark:bg-[#1e1e1e]">
        <button onClick={deCompressCode} className="btn border-transparent focus:ring-[#ac8929] shadow-none bg-[#ac8929] hover:bg-[#725915] font-semibold px-6 py-2.5 text-white text-sm w-full lg:w-auto">Format</button>
        <button onClick={compressCode} className="btn border-transparent focus:ring-[#ac8929] shadow-none bg-[#ac8929] hover:bg-[#725915] font-semibold px-6 py-2.5 text-white text-sm w-full my-4 lg:w-auto">Minify</button>
        <Publish onOpen={updateCodeState} code={code} />
      </div>

      <div className="flex-1 h-full">
        <Editor
          language="ccs"
          className="h-full"
          editorDidMount={editorsDidMount}
          theme={dark ? "ccs" : "light"}
          value={result}
          options={{
            'readOnly': true,
            'wordWrap': "on",
          }}
        />
      </div>
    </div>
  )
}
