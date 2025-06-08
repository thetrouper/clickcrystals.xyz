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
    a.download = 'config.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Card className="cursor-pointer hover:bg-slate-100/60 transition-colors flex flex-col h-full">
        <CardContent className="flex-grow space-y-2 p-4">
          <CardTitle className="text-lg">{config.title}</CardTitle>
          <div className="flex flex-wrap gap-2 -ml-1">
            {config.categories.map((category, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {category}
              </Badge>
            ))}
          </div>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3">
            {config.description}
          </CardDescription>
          <div className="flex items-center space-x-2 pt-2">
            {config.user.avatar != '#' && (
              <Avatar className="w-6 h-6">
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
            {config.user.avatar != '#' ? (
              <div className="text-sm">{config.user.name}</div>
            ) : (
              <>
                by
                <div className="text-sm font-semibold ml-1">
                  {config.user.name}
                </div>
              </>
            )}
          </div>
        </CardContent>
        <ConfigCardControls downloadAction={handleDownload} config={config} />
      </Card>
    </div>
  );
}
