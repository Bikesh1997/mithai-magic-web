import React, { useState } from "react";
import { marked } from "marked";

export default function MarkdownPreviewer() {
  const [md, setMd] = useState(`# Hello Markdown

- Write Markdown on the left
- Live preview on the right`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mt-6">
      {/* Markdown input */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Markdown (raw)</h2>
        <textarea
          className="w-full p-3 border rounded-md font-mono text-sm h-[400px]"
          value={md}
          onChange={(e) => setMd(e.target.value)}
        />
      </div>

      {/* Preview output */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <div
          className="p-4 border rounded-md prose max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(md) }}
        />
      </div>
    </div>
  );
}
