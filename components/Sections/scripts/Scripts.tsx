'use client';

import { Suspense, useEffect, useState } from "react";
import ScriptCard from "./ScriptCard";
import SkeletonCard from "./SkeletonCard";
import { getParsedScripts } from "@/lib/getScripts";
import FilterSelectMenu from "./FilterSelectMenu";
import { Input } from "@/components/ui/input"

export default function Scripts() {
  const [scripts, setScripts] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchScripts = async () => {
      const parsedScripts = await getParsedScripts();
      setScripts(parsedScripts);
      setLoading(false);
    };

    fetchScripts();
  }, []);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredScripts = scripts
    ? Object.entries(scripts).filter(([title, scriptData]: any) => {
      const matchesCategory =
        selectedCategory === "All" || scriptData.category === selectedCategory.toLowerCase();
      const matchesSearchQuery =
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        scriptData.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    })
    : [];

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <FilterSelectMenu value={selectedCategory} onChange={handleCategoryChange} />
        <Input
          type="text"
          placeholder="Search scripts..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          <Suspense fallback={<SkeletonCard />}>
            {filteredScripts.map(([title, scriptData]: any) => (
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
    </div>
  );
}
