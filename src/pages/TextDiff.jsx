import React, { useState } from "react";
import { diffWords } from "diff";

export default function TextDiff() {
  const [a, setA] = useState("Hello world");
  const [b, setB] = useState("Hello brave new world");

  const parts = diffWords(a, b);

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">Text Diff</h2>

      {/* Original text */}
      <label className="block font-medium mb-1">Original</label>
      <textarea
        className="w-full p-3 border rounded-md font-mono text-sm mb-3"
        rows="6"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      {/* Changed text */}
      <label className="block font-medium mb-1">Changed</label>
      <textarea
        className="w-full p-3 border rounded-md font-mono text-sm mb-3"
        rows="6"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      {/* Diff result */}
      <div className="p-4 border rounded-md bg-gray-50 font-mono text-sm leading-relaxed">
        {parts.map((p, i) => (
          <span
            key={i}
            className={`${
              p.added
                ? "bg-green-200"
                : p.removed
                ? "bg-red-200 line-through"
                : ""
            }`}
          >
            {p.value}
          </span>
        ))}
      </div>
    </div>
  );
}
