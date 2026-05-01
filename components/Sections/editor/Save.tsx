'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { saveCode } from '@/lib/scripts';
import { useRouter } from 'next/navigation';

type SaveProps = {
  receiveCode: any;
  disabled: boolean;
};

const Save = ({ receiveCode, disabled }: SaveProps) => {
  const router = useRouter();
  const [saveDisabled, setSaveDisabled] = useState(false);
  const [saved, setSaved] = useState(false);
  const [failed, setFailed] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setSaveDisabled(true);
    setFailed(false);
    const code = receiveCode();
    const query = await saveCode(code);

    if (query.success) {
      try {
        await navigator.clipboard.writeText(
          `${window.location.hostname}/editor/${query.id}`,
        );
      } catch (err) {
        // Clipboard requires HTTPS or localhost
      }
      router.push(`/editor/${query.id}`);
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        setSaveDisabled(false);
      }, 1000);
    } else {
      setFailed(true);
      setTimeout(() => {
        setFailed(false);
        setSaveDisabled(false);
      }, 3000);
    }
  };

  return (
    <button
      className={`font-semibold px-3 md:px-4 py-2 text-white text-xs md:text-sm rounded-lg transition-colors border flex items-center justify-center gap-2 min-w-[80px] ${
        saved
          ? 'bg-green-600 hover:bg-green-500 border-green-700'
          : failed
            ? 'bg-red-600 hover:bg-red-500 border-red-700'
            : 'bg-blue-600 hover:bg-blue-500 border-blue-700'
      } disabled:bg-slate-700 disabled:cursor-not-allowed disabled:border-slate-600 disabled:opacity-50`}
      disabled={saveDisabled || disabled}
      onClick={handleSave}
    >
      {saved ? (
        <>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Saved</span>
        </>
      ) : failed ? (
        <>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>Failed</span>
        </>
      ) : (
        <span>Save</span>
      )}
    </button>
  );
};

export default Save;
