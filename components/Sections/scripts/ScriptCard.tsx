'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useRef } from "react";

interface ScriptCardProps {
  title: string;
  author: string;
  description: string;
  script: string;
}

export default function ScriptCard({ title, author, description, script }: ScriptCardProps) {
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopyClick = () => {
    if (preRef.current) {
      const range = document.createRange();
      range.selectNodeContents(preRef.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);

      navigator.clipboard.writeText(preRef.current.textContent || "");
    }
  };

  return (
    <Card key={title} className="w-full h-full rounded">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <span className="text-primary">by {author}</span>
      </CardHeader>
      <CardContent className="flex-1">
        <p>{description}</p>
        <div
          className="text-sm text-muted-foreground bg-muted rounded-md cursor-pointer my-4"
          onClick={handleCopyClick}
        >
          <pre ref={preRef} className="overflow-x-scroll">
            <code>{script}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
