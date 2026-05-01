'use client';

import Link from 'next/link';
import Image from 'next/image';
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

const SKELETON_COUNTS: Record<string, number> = {
  ImproperIssues: 20,
  TheTrouper: 20,
  'I-No-oNe': 20,
};

export default function Projects() {
  const [authorFilter, setAuthorFilter] = useState('all');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [projects, setProjects] = useState<Record<string, Project[]>>({});
  const [loading, setLoading] = useState(true);

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
        <SelectTrigger
          className="w-full sm:w-[200px] md:w-[280px] text-white"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent
          className="text-white"
          style={{
            background: 'rgb(10,13,24)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {authorNames.map((a) => (
            <SelectItem
              key={a}
              value={a}
              className="text-white hover:bg-slate-800 focus:bg-slate-800 focus:text-white"
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
                <div
                  className="w-7 h-7 rounded-full animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                />
                <div
                  className="h-5 rounded w-32 animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                />
                <div
                  className="h-4 rounded w-16 animate-pulse"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {Array(SKELETON_COUNTS[author] ?? 6)
                  .fill(null)
                  .map((_, j) => (
                    <div
                      key={j}
                      className="rounded-xl p-4 animate-pulse"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        boxShadow:
                          'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.5)',
                      }}
                    >
                      <div
                        className="h-4 rounded w-2/3 mb-2"
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                      />
                      <div
                        className="h-3 rounded w-full mb-1"
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      />
                      <div
                        className="h-3 rounded w-4/5 mb-3"
                        style={{ background: 'rgba(255,255,255,0.04)' }}
                      />
                      <div
                        className="h-3 rounded w-12"
                        style={{ background: 'rgba(255,255,255,0.06)' }}
                      />
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
              <Image
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
              <span
                className="text-xs text-slate-500 px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
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
                    className="rounded-xl p-4 transition-all duration-200 cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.5)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background =
                        'rgba(255,255,255,0.07)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background =
                        'rgba(255,255,255,0.05)';
                    }}
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
