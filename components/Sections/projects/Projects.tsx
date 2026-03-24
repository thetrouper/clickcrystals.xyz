'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const authors: Record<string, string> = {
  ImproperIssues: 'itzispyder',
  TheTrouper: 'thetrouper',
  'I-No-oNe': 'I-No-oNe',
};

const modrinthAuthors: Record<string, string> = {
  ImproperIssues: 'ItziSpyder',
  'I-No-oNe': 'I-No-oNe',
};

// modrinth slugs to exclude per author
const modrinthExclude: Record<string, Set<string>> = {
  ImproperIssues: new Set(['clickcrystals-plus-pack', 'clickcrystals']),
};

// github repo name -> modrinth slug
const mergeMap: Record<string, Record<string, string>> = {
  ImproperIssues: {
    'adv-autoclicker': 'autoclicker',
    'health-indicators': 'healthindicators',
    Impropers3DMinimap: 'impropers-3d-minimap',
    'inv-cleaner': 'inventory-trash-cleaner',
    CrosshairTarget: 'crosshairtarget',
    ImproperUI: 'improperui',
  },
  'I-No-oNe': {
    'Attack-Blocker': 'attack-blocker',
    'Auto-Disconnect': 'auto-disconnect',
    'Death-Effects': 'death-effects',
    'Glowing-entities': 'glowing-entities',
    'Hit-Color': 'no-ones-hit-color',
    'View-Model': 'no-ones-view-model',
  },
};

type Project = {
  name: string;
  description: string | null;
  githubUrl: string | null;
  modrinthUrl: string | null;
};

const STORAGE_KEY = 'projects_counts';
const DEFAULT_COUNTS: Record<string, number> = {
  ImproperIssues: 6,
  TheTrouper: 6,
  'I-No-oNe': 6,
};

export default function Projects() {
  const [authorFilter, setAuthorFilter] = useState('all');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [projects, setProjects] = useState<Record<string, Project[]>>({});
  const [loading, setLoading] = useState(true);
  const [skeletonCounts, setSkeletonCounts] = useState<Record<string, number>>(
    () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored);
      } catch {}
      return DEFAULT_COUNTS;
    },
  );

  const toggleCollapse = (author: string) => {
    setCollapsed((prev) => ({ ...prev, [author]: !prev[author] }));
  };

  useEffect(() => {
    const fetchAll = async () => {
      const results: Record<string, Project[]> = {};

      await Promise.all(
        Object.entries(authors).map(async ([displayName, username]) => {
          const [ghData, mrData] = await Promise.all([
            fetch(
              `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
            ).then((r) => r.json()),
            modrinthAuthors[displayName]
              ? fetch(
                  `https://api.modrinth.com/v2/user/${modrinthAuthors[displayName]}/projects`,
                ).then((r) => r.json())
              : Promise.resolve([]),
          ]);

          const mrBySlug: Record<string, any> = {};
          for (const p of mrData) mrBySlug[p.slug] = p;

          const authorMergeMap = mergeMap[displayName] || {};
          const mergedSlugs = new Set<string>();
          const list: Project[] = [];

          const excluded = new Set([
            'cpp_compile',
            'notepad',
            'clickcrystals.xyz',
          ]);
          for (const repo of ghData.filter(
            (r: any) =>
              !r.fork &&
              r.name.toLowerCase() !== username.toLowerCase() &&
              !excluded.has(r.name),
          )) {
            const mrSlug = authorMergeMap[repo.name];
            const mr = mrSlug ? mrBySlug[mrSlug] : null;
            if (mrSlug) mergedSlugs.add(mrSlug);
            list.push({
              name: mr ? mr.title : repo.name,
              description: mr ? mr.description : repo.description,
              githubUrl: repo.html_url,
              modrinthUrl: mr
                ? `https://modrinth.com/project/${mr.slug}`
                : null,
            });
          }

          // Modrinth-only projects (not merged)
          for (const p of mrData) {
            if (
              !mergedSlugs.has(p.slug) &&
              !modrinthExclude[displayName]?.has(p.slug)
            ) {
              list.push({
                name: p.title,
                description: p.description,
                githubUrl: null,
                modrinthUrl: `https://modrinth.com/project/${p.slug}`,
              });
            }
          }

          results[displayName] = list.sort((a, b) =>
            a.name.localeCompare(b.name),
          );
        }),
      );

      setProjects(results);
      setLoading(false);
      try {
        const counts: Record<string, number> = {};
        for (const [author, list] of Object.entries(results))
          counts[author] = list.length;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
      } catch {}
    };
    fetchAll();
  }, []);

  const authorNames = ['all', ...Object.keys(authors)];

  const grouped = Object.keys(authors)
    .filter((author) => authorFilter === 'all' || author === authorFilter)
    .map((author) => ({
      author,
      username: authors[author],
      projects: projects[author] || [],
    }));

  return (
    <div className="space-y-12">
      <Select onValueChange={setAuthorFilter} value={authorFilter}>
        <SelectTrigger className="w-full sm:w-[200px] md:w-[280px] bg-slate-900 border-slate-700 text-white hover:border-slate-600">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent className="bg-slate-900 border-slate-700">
          {authorNames.map((a) => (
            <SelectItem
              key={a}
              value={a}
              className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white capitalize"
            >
              {a === 'all' ? 'All' : a}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {loading ? (
        <div className="space-y-12">
          {Object.keys(authors).map((author, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-full bg-slate-800/50 animate-pulse" />
                <div className="h-5 bg-slate-800/50 rounded w-32 animate-pulse" />
                <div className="h-4 bg-slate-800/50 rounded w-16 animate-pulse" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {Array(skeletonCounts[author] ?? 6)
                  .fill(null)
                  .map((_, j) => (
                    <div
                      key={j}
                      className="bg-slate-800/40 rounded-lg p-4 animate-pulse shadow-[inset_0_1px_0_0_rgba(148,163,184,0.15)]"
                    >
                      <div className="h-4 bg-slate-700/50 rounded w-2/3 mb-2" />
                      <div className="h-3 bg-slate-800/50 rounded w-full mb-1" />
                      <div className="h-3 bg-slate-800/50 rounded w-4/5 mb-3" />
                      <div className="h-3 bg-slate-700/50 rounded w-12" />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        grouped.map(({ author, username, projects }) => (
          <div key={author}>
            <div
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => toggleCollapse(author)}
            >
              <img
                src={`https://github.com/${username}.png`}
                alt={author}
                width={28}
                height={28}
                className="rounded-full bg-slate-800"
              />
              <Link
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-white hover:text-blue-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {author}
              </Link>
              <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded-full">
                {projects.length} project{projects.length !== 1 ? 's' : ''}
              </span>
              <button className="ml-auto text-slate-500 hover:text-slate-300 transition-colors">
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${collapsed[author] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>
            {!collapsed[author] && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {projects.map((project, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/40 hover:bg-slate-800/60 rounded-lg p-4 transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.15)]"
                  >
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {project.description || 'No description provided.'}
                    </p>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          GitHub
                        </Link>
                      )}
                      {project.modrinthUrl && (
                        <Link
                          href={project.modrinthUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-green-400 hover:text-green-300 transition-colors"
                        >
                          Modrinth
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
