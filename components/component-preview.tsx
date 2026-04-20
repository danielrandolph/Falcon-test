"use client";

import { useState } from "react";
import { Code, Eye } from "lucide-react";

interface ComponentPreviewProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
}

export function ComponentPreview({ title, description, children, code }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="mb-8 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setShowCode(false)}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors ${
              !showCode
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="h-4 w-4" />
            Preview
          </button>
          <button
            onClick={() => setShowCode(true)}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors ${
              showCode
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code className="h-4 w-4" />
            Code
          </button>
        </div>
      </div>
      
      {showCode ? (
        <div className="p-4">
          <pre className="overflow-x-auto rounded-lg bg-background p-4 text-sm">
            <code className="text-muted-foreground">{code}</code>
          </pre>
        </div>
      ) : (
        <div className="flex min-h-[200px] items-center justify-center bg-background/50 p-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
