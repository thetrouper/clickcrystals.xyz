'use client';

import { Suspense, useEffect, useState } from "react";
import ScriptCard from "./ScriptCard";
import SkeletonCard from "./SkeletonCard";
import { getParsedScripts } from "@/lib/getScripts";
import FilterSelectMenu from "./FilterSelectMenu";
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export default function Scripts() {
  const [scripts, setScripts] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | boolean>(false);

  useEffect(() => {
    const fetchScripts = async () => {
      try {
        const parsedScripts = await getParsedScripts();
        setScripts(parsedScripts);
        setLoading(false);
      } catch (err: any) {
        setError((err as Error).message);
        setLoading(false);
      }
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

  if (selectedCategory === "All") {
    filteredScripts.sort(([titleA]: any, [titleB]: any) =>
      titleA.toLowerCase().localeCompare(titleB.toLowerCase())
    );
  }

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : error ? (
          <div className="flex flex-col col-span-full text-center py-10 gap-2">
            <FontAwesomeIcon icon={faXmarkCircle} className="size-8 text-red-500 left-0 right-0 mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-600 font-sans tracking-tight">Sorry, a error occured!</h2>
            <div className="flex justify-center">
              <p className="text-gray-500 text-center max-w-4xl md:max-w-2xl">Some error occured while we tried to load the scripts. Please contact us through Discord if you need assistance.<br /><br />Error message: <span className="bg-black text-sm p-1 text-white font-mono">{error}</span></p>
            </div>
          </div>
        ) : filteredScripts.length > 0 ? (
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
        ) : (
          <div className="flex flex-col col-span-full text-center py-10 gap-2">
            <FontAwesomeIcon icon={faXmarkCircle} className="size-8 text-black left-0 right-0 mx-auto" />
            <h2 className="text-2xl font-semibold text-gray-600 font-sans tracking-tight">No scripts found</h2>
            <div className="flex justify-center">
              <p className="text-gray-500 text-center max-w-4xl">Try adjusting your search or filters to find what you&apos;re looking for.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
