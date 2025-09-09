import React, { useMemo, useState } from "react";

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (x) =>
    Math.round(255 * x)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

export default function ColorPalette() {
  const [base, setBase] = useState("#4A2C7D");

  const palette = useMemo(() => {
    // simple scale: adjust lightness (for demo we just repeat base)
    const res = [];
    for (let i = 90; i >= 10; i -= 10) {
      res.push({ hex: base, shade: i, mix: i });
    }
    return res;
  }, [base]);

  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>

      {/* Base color input */}
      <label className="block font-medium mb-1">Base HEX</label>
      <input
        type="text"
        value={base}
        onChange={(e) => setBase(e.target.value)}
        className="w-full p-2 border rounded-md mb-4 font-mono"
        placeholder="#4A2C7D"
      />

      {/* Grid of colors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {palette.map((p, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg shadow text-center"
            style={{ backgroundColor: p.hex, color: "#fff" }}
          >
            <div
              className="h-16 w-full rounded mb-2"
              style={{ backgroundColor: p.hex }}
            />
            <p className="text-sm font-mono">{p.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
