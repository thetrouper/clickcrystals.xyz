'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const authors: Record<string, string> = {
  ImproperIssues: 'https://github.com/itzispyder',
  TheTrouper: 'https://github.com/thetrouper',
  'I-No-oNe': 'https://github.com/I-No-oNe',
};

const projects = [
  {
    name: 'PDK (Plugin Development Kit)',
    description:
      'Plugin Development Kit for developing Minecraft Spigot Plugins',
    links: { GitHub: 'https://github.com/ItziSpyder/pdk' },
    author: 'ImproperIssues',
  },
  {
    name: 'Impropers 3D Minimap',
    description: 'Minimap but with 3D terrain!',
    links: {
      GitHub: 'https://github.com/ItziSpyder/Impropers3DMinimap',
      Modrinth: 'https://modrinth.com/mod/impropers-3d-minimap',
    },
    author: 'ImproperIssues',
  },
  {
    name: 'CrosshairTarget',
    description: 'Changes your crosshair in-game depending on context.',
    links: {
      GitHub: 'https://github.com/ItziSpyder/CrosshairTarget',
      Modrinth: 'https://modrinth.com/mod/crosshairtarget',
    },
    author: 'ImproperIssues',
  },
  {
    name: 'Moblist',
    description:
      'Minecraft mod that lets you debug list of entities in your world',
    links: { GitHub: 'https://github.com/ItziSpyder/mobslist' },
    author: 'ImproperIssues',
  },
  {
    name: 'ImproperUI',
    description: 'A rendering library using scripts!',
    links: {
      GitHub: 'https://github.com/ItziSpyder/ImproperUi',
      Modrinth: 'https://modrinth.com/mod/ImproperUi',
    },
    author: 'ImproperIssues',
  },
  {
    name: 'Advanced AutoClicker',
    description: 'Advanced Autoclicker for Minecraft!',
    links: {
      GitHub: 'https://github.com/ItziSpyder/adv-autoclicker',
      Modrinth: 'https://modrinth.com/mod/autoclicker',
    },
    author: 'ImproperIssues',
  },
  {
    name: 'Health Indicators',
    description: 'Renders player health above their heads',
    links: {
      GitHub: 'https://github.com/ItziSpyder/health-indicators',
      Modrinth: 'https://modrinth.com/mod/healthindicators',
    },
    author: 'ImproperIssues',
  },
  {
    name: 'CC+',
    description:
      'An old Version of ClickCrystals, but with a rat on the chat event listener class.',
    links: { GitHub: 'https://github.com/thetrouper/ClickCrystalsPlus' },
    author: 'TheTrouper',
  },
  {
    name: 'View Model',
    description: 'A mod that let you change the hands positions 👐',
    links: {
      GitHub: 'https://github.com/I-No-oNe/View-Model',
      Modrinth: 'https://modrinth.com/mod/no-ones-view-model',
    },
    author: 'I-No-oNe',
  },
  {
    name: 'Free Camera',
    description:
      "A minecraft mod that let your camera to be free while the player isn't moving 📸",
    links: { GitHub: 'https://github.com/I-No-oNe/Free-Camera' },
    author: 'I-No-oNe',
  },
  {
    name: 'The CC+ Pack',
    description: 'The official ClickCrystalPlus Pack!',
    links: {
      GitHub: 'https://github.com/I-No-oNe/ClickCrystalPlus-Pack',
      Modrinth: 'https://modrinth.com/resourcepack/clickcrystalplus-pack',
    },
    author: 'I-No-oNe',
  },
  {
    name: 'Glowing Entities',
    description:
      'Minecraft client-side mod that makes entities glow in the dark!',
    links: {
      GitHub: 'https://github.com/I-No-oNe/Glowing-entities',
      Modrinth: 'https://modrinth.com/mod/Glowing-entities',
    },
    author: 'I-No-oNe',
  },
  {
    name: 'Mod By No-oNe',
    description: 'Mod that "No one" will ever use',
    links: { GitHub: 'https://github.com/I-No-oNe/Mod-by-no-one/' },
    author: 'I-No-oNe',
  },
];

export default function Projects() {
  const [authorFilter, setAuthorFilter] = useState('all');
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggleCollapse = (author: string) => {
    setCollapsed((prev) => ({ ...prev, [author]: !prev[author] }));
  };

  const authorNames = ['all', ...Object.keys(authors)];

  const grouped = Object.keys(authors)
    .filter((author) => authorFilter === 'all' || author === authorFilter)
    .map((author) => ({
      author,
      url: authors[author],
      projects: projects.filter((p) => p.author === author),
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

      {grouped.map(({ author, url, projects }) => (
        <div key={author}>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={`${url}.png`}
              alt={author}
              width={28}
              height={28}
              className="rounded-full"
            />
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-white hover:text-blue-400 transition-colors"
            >
              {author}
            </Link>
            <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded-full">
              {projects.length} project{projects.length !== 1 ? 's' : ''}
            </span>
            <button
              onClick={() => toggleCollapse(author)}
              className="ml-auto text-slate-500 hover:text-slate-300 transition-colors"
            >
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
                    {project.description}
                  </p>
                  <div className="flex gap-3">
                    {Object.entries(project.links).map(([label, link]) => (
                      <Link
                        key={label}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
