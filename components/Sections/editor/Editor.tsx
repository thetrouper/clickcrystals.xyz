'use client';

import { Compressor } from '@/lib/compressor';
import Editor, { Monaco } from '@monaco-editor/react';
import { languageDef, configuration, theme } from '@/lib/editor-config';
import { useEffect, useState, useRef } from 'react';
import Publish from './Publish';
import Save from './Save';
import { useSearchParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

const CCSEditor = ({ defaultCode }: { defaultCode: string | null }) => {
  const defaultSnippet = `// @your-name\ndef module custom-module\ndef desc "Custom Scripted Module"\n\non module_enable {\n\n}\n\non module_disable {\n\n}`;

  const compressor = new Compressor();
  const [code, setCode] = useState(
    defaultCode === null ? defaultSnippet : defaultCode,
  );
  const [result, setResult] = useState('');
  const editorRef = useRef<any>(null);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const router = useRouter();

  const deCompressCode = () => {
    if (editorRef.current) {
      setResult(compressor.decompress(editorRef.current.getValue()));
    }
  };

  const compressCode = () => {
    if (editorRef.current) {
      setResult(compressor.compress(editorRef.current.getValue()));
    }
  };

  const getEditorValue = () => {
    if (editorRef.current) {
      return editorRef.current.getValue();
    }
    return code;
  };

  useEffect(() => {
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
  }, [searchParams, router, toast]);

  function handleEditorWillMount(monaco: Monaco) {
    monaco.languages.register({ id: 'ccs' });
    monaco.languages.setMonarchTokensProvider('ccs', languageDef as any);
    monaco.languages.setLanguageConfiguration('ccs', configuration);
    monaco.editor.defineTheme('ccs', theme as any);
    monaco.editor.setTheme('ccs');
  }

  const [mounted, setMounted] = useState(false);

  function handleEditorDidMount(editor: any, monaco: Monaco) {
    editorRef.current = editor;
    const model = editor.getModel();
    if (model) {
      monaco.editor.setModelLanguage(model, 'ccs');
      monaco.editor.setTheme('ccs');
    }
    setMounted(true);
  }

  function handleEditorChange(value: string | undefined) {
    if (value) {
      setCode(value);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap bg-gradient-to-b from-slate-900 to-slate-950 gap-2 md:gap-3 pt-4 px-4 md:px-8 pb-4 items-center justify-between border-b border-slate-800/50">
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
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3">
          <Publish onOpen={getEditorValue} code={code} disabled={false} />
          <Save receiveCode={getEditorValue} disabled={false} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-screen bg-[#1e1e1e] text-white">
        <div className="flex-1 h-1/2 lg:h-full relative">
          {!mounted && (
            <div className="absolute inset-0 bg-slate-950 z-10 p-4 space-y-3">
              <div className="h-4 bg-slate-800/50 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-slate-800/50 rounded w-full animate-pulse" />
              <div className="h-4 bg-slate-800/50 rounded w-5/6 animate-pulse" />
              <div className="h-4 bg-slate-800/50 rounded w-full animate-pulse" />
              <div className="h-4 bg-slate-800/50 rounded w-2/3 animate-pulse" />
            </div>
          )}
          <Editor
            height="100%"
            defaultLanguage="ccs"
            language="ccs"
            beforeMount={handleEditorWillMount}
            onMount={handleEditorDidMount}
            value={code}
            onChange={handleEditorChange}
            theme="ccs"
            loading={<div className="h-full bg-[#1e1e1e]" />}
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

        <div className="flex-1 h-1/2 lg:h-full border-t lg:border-t-0 lg:border-l border-slate-800/50 relative">
          {!mounted && <div className="absolute inset-0 bg-slate-950 z-10" />}
          <Editor
            height="100%"
            defaultLanguage="ccs"
            language="ccs"
            theme="ccs"
            value={result}
            onMount={() => {}}
            loading={<div className="h-full bg-[#1e1e1e]" />}
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
