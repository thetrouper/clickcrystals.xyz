'use client'

import { Compressor } from "@/lib/compressor";
import Editor from "react-monaco-editor";
import { languageDef, configuration, theme } from '@/lib/editor-config';
import { useEffect, useState } from "react";
import Publish from "./Publish";
import { loadCode, saveCode } from "@/lib/supabase";
import Save from "./Save";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const CCSEditor = ({codeId} : {codeId: string}) => {
  const defaultCode = `// @anonymous\ndef module custom-module
def desc "Custom Scripted Module"

on module_enable {

}

on module_disable {

}`
  
  const compressor = new Compressor();
  const [fetching, setFetching] = useState(codeId != "");
  const [code, setCode] = useState(codeId === "" ? defaultCode : (fetching ? `Loading snippet ${codeId}...` : ""));
  const [result, setResult] = useState("");
  const [editor, setEditor] = useState<any>();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const handleLoadSnippet = async () => {
      const query = await loadCode(codeId);

      if (query.success) {
        setCode(query.code);
      } else {
        router.push("/editor")
        toast({
          title: "Failed to load snippet",
          description: query.error,
          variant: "destructive"
        })
        setCode(defaultCode);
      }
      setFetching(false);
    }
  
    return () => {
      if (codeId != "") {
        handleLoadSnippet();
      }
    }
  }, [])


  const deCompressCode = () => {
    setResult(compressor.decompress(editor.getValue()));
  };

  const compressCode = () => {
    setResult(compressor.compress(editor.getValue()));
  };
  
  const updateCodeState = () => {
    setCode((v: string) => editor.getValue())
    return editor.getValue();
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
    <div>
      <div className="flex flex-row bg-white dark:bg-[#1e1e1e] gap-2 md:gap-4 pt-4 mx-8 justify-between">
        <div className="flex flex-row gap-2 md:gap-4">
          <button disabled={fetching} onClick={deCompressCode} className="btn border-transparent focus:ring-[#ac8929] shadow-none bg-[#ac8929] hover:bg-[#725915] font-semibold px-6 py-2.5 text-white text-sm w-full mb-4 lg:w-auto">Format</button>
          <button disabled={fetching} onClick={compressCode} className="btn border-transparent focus:ring-[#ac8929] shadow-none bg-[#ac8929] hover:bg-[#725915] font-semibold px-6 py-2.5 text-white text-sm w-full mb-4 lg:w-auto">Minify</button>
      </div>
        <div className="flex flex-row gap-2 md:gap-4">
          <Publish onOpen={updateCodeState} code={code} disabled={fetching} />
          <Save receiveCode={updateCodeState} disabled={fetching} />
      </div>
      </div>
      <div className={`flex flex-col lg:flex-row h-screen bg-[#ffffff] text-black dark:bg-[#1e1e1e] dark:text-white ${loading && 'opacity-0'}`}>
        <div className="flex-1 h-full">
          <Editor
            language={fetching ? "plain" : "ccs"}
            editorWillMount={editorWillMount}
            editorDidMount={editorDidMount}
            className="h-screen"
            value={code}
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
              'readOnly': fetching
            }}
          />
        </div>

        <div className="flex-1 h-full">
          <Editor
            language="ccs"
            className="h-screen"
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
    </div>
  )
}

export default CCSEditor;