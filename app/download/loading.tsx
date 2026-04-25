'use client';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <SkeletonTheme
      baseColor="rgba(255,255,255,0.03)"
      highlightColor="rgba(255,255,255,0.07)"
      duration={1.4}
    >
      <main
        className="min-h-screen py-12 md:py-24"
        style={{ background: 'rgb(7,10,20)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3 md:mb-4">
              <Skeleton width={320} height={48} borderRadius={8} />
            </div>
            <div className="flex justify-center">
              <Skeleton width={420} height={16} borderRadius={4} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 pt-4 md:pt-6">
            <Skeleton height={56} borderRadius={999} />
            <Skeleton height={56} borderRadius={999} />
            <Skeleton height={56} borderRadius={999} />
          </div>

          <div className="mb-10">
            <div className="mb-3">
              <Skeleton width={110} height={9} borderRadius={4} />
            </div>
            <div className="mb-6">
              <Skeleton width={220} height={60} borderRadius={12} />
            </div>
            <div className="mb-6">
              <Skeleton height={6} borderRadius={999} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array(4)
                .fill(null)
                .map((_, i) => (
                  <div key={i}>
                    <div className="mb-1.5">
                      <Skeleton width={64} height={9} borderRadius={4} />
                    </div>
                    <Skeleton width={88} height={22} borderRadius={4} />
                  </div>
                ))}
            </div>
          </div>

          <div
            className="rounded-xl p-6 mb-10"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Skeleton width={16} height={16} borderRadius={4} />
              <Skeleton width={100} height={12} borderRadius={4} />
            </div>
            <div className="mb-1.5">
              <Skeleton height={12} borderRadius={4} />
            </div>
            <Skeleton width="60%" height={12} borderRadius={4} />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1.5">
              {[48, 88, 100, 80].map((w, i) => (
                <Skeleton key={i} width={w} height={32} borderRadius={999} />
              ))}
            </div>
            <Skeleton width={200} height={10} borderRadius={4} />
          </div>

          <Skeleton height={467} borderRadius={16} />
        </div>
      </main>
    </SkeletonTheme>
  );
}
