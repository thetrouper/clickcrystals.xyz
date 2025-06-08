'use client';

import { Button } from '@/components/ui/button';

export default function DownloadButton({
  downloadAction,
}: {
  downloadAction: () => void;
}) {
  return (
    <Button
      onClick={downloadAction}
      className="w-full m-0 rounded-tl-none rounded-tr-none hover:opacity-80 transition-all duration-100 bg-[#2b65ca] text-white hover:bg-[#2359b6] rounded-bl-none rounded-br-none"
    >
      Download
    </Button>
  );
}
