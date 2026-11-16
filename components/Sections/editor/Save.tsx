'use client';

import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { saveCode } from '@/lib/scripts';
import { useRouter } from 'next/navigation';

type SaveProps = {
  receiveCode: any;
  disabled: boolean;
};

const Save = ({ receiveCode, disabled }: SaveProps) => {
  const router = useRouter();
  const [saveDisabled, setSaveDisabled] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setSaveDisabled(!saveDisabled);
    const code = receiveCode();
    const query = await saveCode(code);

    if (query.success) {
      navigator.clipboard.writeText(
        `${window.location.hostname}/editor/${query.id}`,
      );
      router.push(`/editor/${query.id}`);
      toast({
        title: 'Successfully saved snippet',
        description: 'The link to share it has been copied to clipboard',
        variant: 'passive',
      });
    } else {
      toast({
        title: 'Failed to save snippet',
        description: query.error,
        variant: 'destructive',
      });
    }

    setSaveDisabled(false);
  };

  return (
    <button
      className="text-white/40 hover:text-white text-xs font-medium px-3 py-1.5 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-150"
      disabled={saveDisabled || disabled}
      onClick={handleSave}
    >
      {saveDisabled ? (
        <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="32"
            strokeDashoffset="12"
          />
        </svg>
      ) : (
        'Save'
      )}
    </button>
  );
};

export default Save;
