'use client';

import { Compressor } from '@/lib/compressor';
import Editor from 'react-monaco-editor';
import { languageDef, configuration, theme } from '@/lib/editor-config';
import { useEffect, useState } from 'react';
import Publish from './Publish';
import Save from './Save';
import { useSearchParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

const CCSEditor = ({ defaultCode }: { defaultCode: string | null }) => {
  const defaultSnippet = `// @anonymous\ndef module custom-module
def desc "Custom Scripted Module"

on module_enable {

}

on module_disable {

}`;

  const compressor = new Compressor();
  const [code, setCode] = useState(
    defaultCode === null ? defaultSnippet : defaultCode,
  );
  const [result, setResult] = useState('');
  const [editor, setEditor] = useState<any>();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();

  const deCompressCode = () => {
    setResult(compressor.decompress(editor.getValue()));
  };

  const compressCode = () => {
    setResult(compressor.compress(editor.getValue()));
  };

  const updateCodeState = () => {
    setCode((v: string) => editor.getValue());
    return editor.getValue();
  };
  useEffect(() => {
    return () => {
      const error = searchParams.get('error');

      if (error === 'exception') {
        toast({
          title: 'Failed to load snippet',
          description:
            'There was some server-side error during loading of snippet. Please try again later.',
          variant: 'destructive',
        });
        router.push('/editor');
      } else if (error === 'not_found') {
        toast({
          title: 'Snippet does not exist',
          description:
            'The snippet you are trying to load does not exist in our database.',
          variant: 'destructive',
        });
        router.push('/editor');
      }
    };
  }, [searchParams, router, toast]);

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
  const [mobileTab, setMobileTab] = useState<'input' | 'output'>('input');

  const editorsDidMount = (editor: any) => {
    setLoading(false);
  };

  return (
    <div>
      <div className="flex flex-wrap bg-gradient-to-b from-slate-900 to-slate-950 gap-2 md:gap-3 pt-4 px-4 md:px-8 pb-4 items-center justify-between border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold text-sm md:text-base">ClickScript Editor</span>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          <button
            disabled={false}
            onClick={deCompressCode}
            className="bg-slate-800/30 hover:bg-slate-800/50 font-semibold px-3 md:px-4 py-2 text-white text-xs md:text-sm rounded-lg transition-colors border border-slate-900/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)]"
          >
            Format
          </button>
          <button
            disabled={false}
            onClick={compressCode}
            className="bg-slate-800/30 hover:bg-slate-800/50 font-semibold px-3 md:px-4 py-2 text-white text-xs md:text-sm rounded-lg transition-colors border border-slate-900/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)]"
          >
            Minify
          </button>
          <Publish onOpen={updateCodeState} code={code} disabled={false} />
          <Save receiveCode={updateCodeState} disabled={false} />
        </div>
      </div>
      <div className="lg:hidden flex border-b border-slate-800/50 bg-slate-900">
        <button
          onClick={() => setMobileTab('input')}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            mobileTab === 'input'
              ? 'text-white border-b-2 border-blue-500 bg-slate-800/30'
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          Input
        </button>
        <button
          onClick={() => setMobileTab('output')}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            mobileTab === 'output'
              ? 'text-white border-b-2 border-blue-500 bg-slate-800/30'
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          Output
        </button>
        {mobileTab === 'output' && (
          <button
            onClick={() => {
              navigator.clipboard.writeText(result);
              toast({
                title: 'Copied to clipboard',
                description: 'Output code copied successfully',
                variant: 'passive',
              });
            }}
            className="px-4 py-3 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
          </button>
        )}
      </div>
      <div className="flex flex-col lg:flex-row h-screen bg-[#ffffff] text-black dark:bg-[#1e1e1e] dark:text-white">
        <div className={`flex-1 h-full ${mobileTab === 'input' ? 'block' : 'hidden'} lg:block`}>
          <Editor
            language={'ccs'}
            editorWillMount={editorWillMount}
            editorDidMount={editorDidMount}
            className="h-screen"
            value={code}
            theme={dark ? 'ccs' : 'light'}
            options={{
              wordWrap: 'on',
              autoClosingBrackets: 'always',
              autoClosingQuotes: 'always',
              autoIndent: 'brackets',
              quickSuggestions: true,
              quickSuggestionsDelay: 1,
              wordBasedSuggestions: 'allDocuments',
              acceptSuggestionOnCommitCharacter: true,
              tabSize: 2,
              readOnly: false,
            }}
          />
        </div>

        <div className={`flex-1 h-full ${mobileTab === 'output' ? 'block' : 'hidden'} lg:block`}>
          <Editor
            language="ccs"
            className="h-screen"
            editorDidMount={editorsDidMount}
            theme={dark ? 'ccs' : 'light'}
            value={result}
            options={{
              readOnly: true,
              wordWrap: 'on',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CCSEditor;
