'use client';

import dynamic from 'next/dynamic';
import { NextAuthProvider } from '@/lib/provider';
import ConfigCard from './ConfigCard';
import { Input } from '@/components/ui/input';
import SearchCategoryMenu from './SearchCategoryMenu';
import SkeletonCard from './SkeletonCard';
import { Suspense, useState } from 'react';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewConfigCard = dynamic(() => import('./NewConfig'), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] bg-slate-800/50 rounded animate-pulse" />
  ),
});

export default function ConfigsGrid({ configs }: { configs: any }) {
  const [category, setCategory] = useState('All');
  const [filter, setFilter] = useState('');

  const updateCategory = (value: string) => {
    setCategory(value);
  };

  const updateFilter = (e: any) => {
    setFilter(e.target.value);
  };

  const filteredConfigs = configs.filter(
    ({ title, description, categories, user }: any) => {
      const matchesCategory =
        category === 'All' ||
        categories
          .map((cate: string) => cate.toLowerCase())
          .includes(category.toLowerCase());
      const matchesSearchQuery =
        title.toLowerCase().includes(filter.toLowerCase()) ||
        description.toLowerCase().includes(filter.toLowerCase());
      categories
        .map((cat: string) => cat.toLowerCase())
        .includes(filter.toLowerCase());
      return matchesCategory && matchesSearchQuery;
    },
  );

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <SearchCategoryMenu value={category} onChange={updateCategory} />
        <Input
          type="text"
          placeholder="Search configs..."
          value={filter}
          onChange={updateFilter}
          className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 hover:border-slate-600 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Suspense fallback={<Fallback />}>
          {filteredConfigs.length === 0 ? (
            <div className="flex flex-col col-span-full text-center py-10 gap-2">
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="size-8 text-slate-500 left-0 right-0 mx-auto"
              />
              <h2 className="text-2xl font-semibold text-slate-400 font-sans tracking-tight">
                No configs found
              </h2>
              <div className="flex justify-center">
                <p className="text-slate-500 text-center max-w-4xl">
                  Try adjusting your search or filters to find what you&apos;re
                  looking for.
                </p>
              </div>
            </div>
          ) : (
            <>
              <NextAuthProvider>
                <NewConfigCard />
              </NextAuthProvider>
              {filteredConfigs.map((config: any) => (
                <ConfigCard key={config.id} config={config} />
              ))}
            </>
          )}
        </Suspense>
      </div>
    </div>
  );
}

function Fallback() {
  return (
    <>
      {Array(6)
        .fill(null)
        .map((_, index: number) => (
          <SkeletonCard key={index} />
        ))}
    </>
  );
}
