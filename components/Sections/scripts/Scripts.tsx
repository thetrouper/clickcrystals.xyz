'use client';

import { Suspense, useEffect, useState } from "react";
import ScriptCard from "./ScriptCard";
import SkeletonCard from "./SkeletonCard";
import { getParsedScripts } from "@/lib/getScripts";

export default function Scripts() {
  const [scripts, setScripts] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScripts = async () => {
      const parsedScripts = await getParsedScripts();
      setScripts(parsedScripts);
      setLoading(false);
    };

    fetchScripts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))
      ) : (
        <Suspense fallback={<SkeletonCard />}>
          {scripts && Object.entries(scripts).map(([title, scriptData]: any) => (
            <ScriptCard
              key={title}
              title={title}
              author={scriptData.author}
              description={scriptData.description}
              script={scriptData.script}
            />
          ))}
        </Suspense>
      )}
    </div>
  );
}
