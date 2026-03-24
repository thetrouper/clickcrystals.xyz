'use client';

import { Suspense, useEffect, useState } from 'react';
import ScriptCard from './ScriptCard';
import SkeletonCard from './SkeletonCard';
import { getParsedScripts } from '@/lib/getScripts';
import FilterSelectMenu from './FilterSelectMenu';
import { Input } from '@/components/ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Scripts() {
  const [scripts, setScripts] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<string | boolean>(false);
  const [showInfo, setShowInfo] = useState(true);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem('hideScriptsInfo') === 'true';
    if (dismissed) {
      setShowInfo(false);
    }
  }, []);

  const handleDismissInfo = () => {
    setShowInfo(false);
    localStorage.setItem('hideScriptsInfo', 'true');
  };

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
          selectedCategory === 'All' ||
          scriptData.category === selectedCategory.toLowerCase();
        const matchesSearchQuery =
          title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          scriptData.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
      })
    : [];

  if (selectedCategory === 'All') {
    filteredScripts.sort(([titleA]: any, [titleB]: any) =>
      titleA.toLowerCase().localeCompare(titleB.toLowerCase()),
    );
  }

  return (
    <div>
      {showInfo && (
        <div className="relative border-l-4 border-emerald-500 bg-emerald-900/20 p-4 md:p-5 mb-4 md:mb-6 rounded">
          <button
            onClick={handleDismissInfo}
            className="absolute top-2 right-2 md:top-3 md:right-3 text-slate-400 hover:text-slate-300 transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="size-4" />
          </button>
          <p className="text-sm md:text-base text-emerald-400 font-semibold mb-2 md:mb-3">
            Did you know?
          </p>
          <p className="text-sm text-slate-300 mb-2 md:mb-3 leading-relaxed">
            The scripts you&apos;re currently seeing on this page are the same
            scripts as you can see in the ClickCrystals in-game Online Script
            Browser!
          </p>
          <p className="text-sm text-slate-300 leading-relaxed">
            <span className="text-white font-semibold">
              ClickCrystals Script (ClickScript/CCS)
            </span>{' '}
            can do a lot of tasks. From simple swaps and hotbar changing,
            through automatic complete farms, to blatant auto-totem, kill-aura,
            auto-pot, jump-reset, anchor-switch, obsidian-switch, etc.
          </p>
        </div>
      )}

      <div className="sticky top-0 z-10 backdrop-blur-sm pb-4 -mt-4 pt-4 flex flex-col sm:flex-row gap-4 mb-4">
        <FilterSelectMenu
          value={selectedCategory}
          onChange={handleCategoryChange}
        />
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search scripts..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 hover:border-slate-600 focus:border-blue-500 pr-10"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300"
            >
              <FontAwesomeIcon icon={faXmark} className="size-4" />
            </button>
          )}
        </div>
      </div>

      {loading ? (
        <div className="h-5 w-32 bg-slate-800/50 rounded mb-3 animate-pulse" />
      ) : (
        !error && (
          <p className="text-slate-400 text-sm mb-3">
            {filteredScripts.length} script
            {filteredScripts.length !== 1 ? 's' : ''} found
          </p>
        )
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          Array.from({ length: 34 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : error ? (
          <div className="flex flex-col col-span-full text-center py-10 gap-2">
            <FontAwesomeIcon
              icon={faXmarkCircle}
              className="size-8 text-red-500 left-0 right-0 mx-auto"
            />
            <h2 className="text-2xl font-semibold text-gray-600 font-sans tracking-tight">
              Sorry, an error occurred!
            </h2>
            <div className="flex justify-center">
              <p className="text-gray-500 text-center max-w-4xl md:max-w-2xl">
                Some error occurred while we tried to load the scripts. Please
                contact us through Discord if you need assistance.
                <br />
                <br />
                Error message:{' '}
                <span className="bg-black text-sm p-1 text-white font-mono">
                  {error}
                </span>
              </p>
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
                category={scriptData.category}
                isExpanded={expandedCard === title}
                onToggle={() =>
                  setExpandedCard(expandedCard === title ? null : title)
                }
              />
            ))}
          </Suspense>
        ) : (
          <div className="flex flex-col col-span-full text-center py-16 gap-3">
            <div className="size-16 mx-auto bg-slate-800/50 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="size-8 text-slate-600"
              />
            </div>
            <h2 className="text-xl font-semibold text-slate-500">
              No scripts found
            </h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Try adjusting your search or filters to find what you&apos;re
              looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
