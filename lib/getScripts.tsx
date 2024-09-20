'use server';

import { Compressor } from './compressor.ts';

interface ScriptInfo {
  author: string;
  description: string;
  script: string;
  category: string;
}

type ParsedScripts = Record<string, ScriptInfo>;

async function fetchAndParseCategory(category: string): Promise<ParsedScripts> {
  const response = await fetch(
    `https://itzispyder.github.io/clickcrystals/scripts/content/${category}.category`,
    {
      cache: 'force-cache',
    },
  );
  const compressed: string = await response.text();
  const decompressed: string = new Compressor().decompress(compressed);
  const scripts: string[] = decompressed
    .split(/^```/gm)
    .filter((s: string) => s.trim().length > 0);
  const parsed: ParsedScripts = {};

  scripts.forEach((script: string) => {
    const lines: string[] = script
      .split(/\n/gm)
      .filter((s: string) => s.match(/.*(def|module|desc|\/{2}).*/gm));
    let name: string = 'Unnamed Module';
    let desc: string = 'No description provided';
    let author: string | null = null;

    lines.forEach((line: string) => {
      if (line.match(/.*(def module|module create).*/gm)) {
        name = captialize(
          line.replace(/.*(def module|module create)\s+/gm, '').trim(),
        );
      } else if (
        line.match(/.*(def description|def desc|description|desc).*/gm)
      ) {
        desc = line
          .replace(/.*(def description|def desc|description|desc)\s+/gm, '')
          .replace(/(^\")|(\"$)/gm, '')
          .trim();
      } else if (line.match(/^\s*(\/{2})\s*@\s*.*$/gm)) {
        author = captialize(line.replace(/^\s*(\/{2})\s*@\s*/gm, '').trim());
      }
    });

    parsed[name] = {
      author: author || 'Anonymous',
      description: desc,
      script: new Compressor().decompress(script.trim()),
      category: category,
    };
  });

  return parsed;
}

export async function getParsedScripts(): Promise<ParsedScripts> {
  const categories: string[] = [
    'anchor',
    'crystal',
    'hacks',
    'macros',
    'totem',
  ];

  const results: ParsedScripts[] = await Promise.all(
    categories.map((category: string) => fetchAndParseCategory(category)),
  );

  return results.reduce(
    (acc: ParsedScripts, curr: ParsedScripts) => ({ ...acc, ...curr }),
    {},
  );
}

function captialize(str: string): string {
  var words = str.toLowerCase().split(/[ \\/+_,-]/gm);
  var result = '';
  for (var i = 0; i < words.length; i++) {
    var str = words[i];
    result += str.substring(0, 1).toUpperCase() + str.substring(1) + ' ';
  }
  return result.trim();
}
