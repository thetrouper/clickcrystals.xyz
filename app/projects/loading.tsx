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
        className="my-12 mx-6 md:mx-24"
        style={{ background: 'rgb(7,10,20)' }}
      >
        <div className="mb-10">
          <div className="mb-3">
            <Skeleton height={36} width="40%" borderRadius={8} />
          </div>
          <Skeleton height={16} width="60%" borderRadius={4} />
        </div>
        <div className="mb-4">
          <Skeleton height={40} width={280} borderRadius={8} />
        </div>
        <div className="space-y-12">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-4">
                  <Skeleton width={28} height={28} borderRadius={999} />
                  <Skeleton width={120} height={18} borderRadius={4} />
                  <Skeleton width={56} height={14} borderRadius={4} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {Array(6)
                    .fill(null)
                    .map((_, j) => (
                      <div
                        key={j}
                        className="rounded-xl p-4"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          boxShadow:
                            'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.5)',
                        }}
                      >
                        <div className="mb-2">
                          <Skeleton height={14} width="66%" borderRadius={4} />
                        </div>
                        <div className="mb-1">
                          <Skeleton height={11} borderRadius={4} />
                        </div>
                        <div className="mb-3">
                          <Skeleton height={11} width="80%" borderRadius={4} />
                        </div>
                        <div className="flex gap-3">
                          <Skeleton height={11} width={48} borderRadius={4} />
                          <Skeleton height={11} width={64} borderRadius={4} />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </main>
    </SkeletonTheme>
  );
}
