'use client';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonCard() {
  return (
    <SkeletonTheme
      baseColor="rgba(255,255,255,0.03)"
      highlightColor="rgba(255,255,255,0.07)"
      duration={1.4}
    >
      <div
        className="rounded-xl p-5 flex flex-col h-full"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex-grow space-y-3">
          <Skeleton height={14} width="66%" borderRadius={4} />
          <div className="flex gap-2">
            <Skeleton height={18} width={64} borderRadius={4} />
            <Skeleton height={18} width={48} borderRadius={4} />
          </div>
          <Skeleton height={11} borderRadius={4} />
          <Skeleton height={11} width="80%" borderRadius={4} />
          <div className="flex items-center gap-2 pt-2">
            <Skeleton width={20} height={20} borderRadius={999} />
            <Skeleton height={11} width={96} borderRadius={4} />
          </div>
        </div>
        <div className="mt-4">
          <Skeleton height={36} borderRadius={8} />
        </div>
      </div>
    </SkeletonTheme>
  );
}
