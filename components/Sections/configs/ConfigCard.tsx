'use client';

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { JsonValue } from "@prisma/client/runtime/library";
import { motion } from "framer-motion";

type Config = {
  id?: number | string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  categories: string[];
  config: JsonValue;
};

export default function ConfigCard({ config }: { config: Config }) {
  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(config.config, null, 2)], { type: 'application/json' });
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
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 100
      }}
      transition={{
        duration: 0.2,
      } }
    >
      <Card
      className="cursor-pointer hover:bg-slate-100/60 transition-colors flex flex-col"
      onClick={handleDownload}
    >
      <CardHeader className="flex-grow space-y-2 p-4">
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
          {config.avatar != "#" && (
            <Avatar className="w-6 h-6">
            <AvatarImage src={config.avatar} alt={config.author} className="rounded-full" />
            <AvatarFallback>{config.author.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          )}
            {config.avatar != "#" ? (
              <div className="text-sm">{config.author}</div>
            ) : (
                <>by<div className="text-sm font-semibold ml-1">{config.author}</div></>
          )}
        </div>
      </CardHeader>
    </Card>
    </motion.div>
  );
}
