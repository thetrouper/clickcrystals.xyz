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
      className="w-full mt-3 bg-emerald-800 hover:bg-emerald-700 text-emerald-300 hover:text-emerald-200 transition-colors font-medium text-sm"
    >
      Download
    </Button>
  );
}
