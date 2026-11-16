export default function SkeletonCard() {
  return (
    <div className="w-full h-full rounded border border-[#276CB0]/40 bg-[#14213A] animate-pulse p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="h-5 w-2/5 rounded-md bg-white/10" />
        <div className="h-3.5 w-1/4 rounded-md bg-white/5" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-3 w-full rounded-md bg-white/5" />
        <div className="h-3 w-4/5 rounded-md bg-white/5" />
      </div>
      <div className="rounded-md bg-white/5 p-3 flex flex-col gap-1.5 mt-auto">
        <div className="h-2.5 w-3/4 rounded bg-white/5" />
        <div className="h-2.5 w-1/2 rounded bg-white/5" />
        <div className="h-2.5 w-2/3 rounded bg-white/5" />
      </div>
    </div>
  );
}
