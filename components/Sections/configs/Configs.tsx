import ConfigsGrid from "./ConfigsGrid";
import SkeletonCard from "./SkeletonCard";
import { Suspense } from "react";

export default function Configs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
      <Suspense fallback={<Fallback />}>
        <ConfigsGrid />
      </Suspense>
    </div>
  );
}

function Fallback() {
  return (
    <>
    {Array(6).fill(null).map((_, index: number) => (
       <SkeletonCard key={index} />
    ))}
    </>
  )
}
