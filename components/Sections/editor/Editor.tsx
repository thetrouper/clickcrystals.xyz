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

  const editorsDidMount = (editor: any) => {
    setLoading(false);
  };

  return (
    <div>
      <div className="flex flex-row border-b border-white/5 gap-2 md:gap-4 px-4 py-2 justify-between">
        <div className="flex flex-row gap-2">
          <button
            disabled={false}
            onClick={deCompressCode}
            className="text-white/60 hover:text-white text-xs font-medium px-3 py-1.5 rounded-md border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-150"
          >
            Format
          </button>
          <button
            disabled={false}
            onClick={compressCode}
            className="text-white/60 hover:text-white text-xs font-medium px-3 py-1.5 rounded-md border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-150"
          >
            Minify
          </button>
        </div>
        <div className="flex flex-row gap-2">
          <Publish onOpen={updateCodeState} code={code} disabled={false} />
          <Save receiveCode={updateCodeState} disabled={false} />
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row h-screen bg-brand-dark text-black ${loading && 'opacity-0'}`}
      >
        <div className="flex-1 h-full">
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

        <div className="flex-1 h-full">
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
