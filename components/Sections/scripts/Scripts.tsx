'use client';

import ScriptCard from "./ScriptCard";

interface Script {
  author: string;
  description: string;
  script: string;
}

const scripts: Record<string, Script> = {
  "Obsidian Switcher": {
    author: "Wither123go",
    description: "Obsidian Switch by Wither123go.",
    script: `// @wither123go
def module obi-switcher
def desc "obi switch"

on tick {
   if playing {
      if input_active use {
         if holding #sword, #crystal {
            if targeting_block {
               if !if target_block #air, :charged_respawn_anchor {
                  wait 0.02
                  switch #obsidian
                  input right
               }
            }
         }
      }
   }
}
    `,
  },
};

export default function Scripts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(scripts).map(([title, { author, description, script }]) => (
        <ScriptCard
          key={title}
          title={title}
          author={author}
          description={description}
          script={script}
        />
      ))}
    </div>
  );
}
