'use client';

export default function DownloadButton({
  downloadAction,
}: {
  downloadAction: () => void;
}) {
  return (
    <button
      onClick={downloadAction}
      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-150 active:scale-95 hover:opacity-90"
      style={{
        background: 'rgba(37,99,235,0.9)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)',
      }}
    >
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download
    </button>
  );
}
