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
        className="rounded-xl p-4"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mb-3">
          <Skeleton height={14} width="66%" borderRadius={4} />
        </div>
        <div className="mb-3">
          <Skeleton height={11} width="33%" borderRadius={4} />
        </div>
        <Skeleton height={11} borderRadius={4} />
      </div>
    </SkeletonTheme>
  );
}
