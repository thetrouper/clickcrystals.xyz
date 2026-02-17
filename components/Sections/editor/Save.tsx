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
      className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed font-semibold px-3 md:px-4 py-2 text-white text-xs md:text-sm rounded-lg transition-colors border border-blue-700 shadow-[inset_0_1px_0_0_rgba(96,165,250,0.3)] flex items-center justify-center"
      disabled={saveDisabled || disabled}
      onClick={handleSave}
    >
      {saveDisabled && (
        <FontAwesomeIcon
          icon={faSpinner}
          className="mr-2 size-3 animate-spin"
        />
      )}
      Save
    </button>
  );
};

export default Save;
