'use client';

import {
  Card,
  CardDescription,
  CardContent,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { JsonValue } from '@prisma/client/runtime/library';
import ConfigCardControls from './ConfigCardControls.tsx';

export type Config = {
  id: number;
  title: string;
  description: string;
  user: any;
  categories: string[];
  config: JsonValue;
};

export default async function ConfigCard({ config }: { config: Config }) {
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(config.config, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.title.toLowerCase().replace(/\s+/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative border-2 border-slate-700/50 bg-slate-800/40 hover:bg-slate-800/60 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 rounded-lg p-5 transition-all duration-200 group flex flex-col h-full">
      <div className="flex-grow space-y-3">
        <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors">
          {config.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {config.categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-slate-700 text-slate-400 bg-slate-800/50"
            >
              {category}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {config.description}
        </p>
        <div className="flex items-center space-x-2 pt-2">
          {config.user.avatar != '#' && (
            <Avatar className="w-5 h-5">
              <AvatarImage
                src={config.user.avatar}
                alt={config.user.name}
                className="rounded-full"
              />
              <AvatarFallback>
                {config.user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
          <span className="text-xs text-slate-500 font-medium">
            by {config.user.name}
          </span>
        </div>
      </div>
      <ConfigCardControls downloadAction={handleDownload} config={config} />
    </div>
  );
}
