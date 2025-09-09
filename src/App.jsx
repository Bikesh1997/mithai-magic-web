import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Codeshare from "./pages/Codeshare";
import Whiteboard from "./pages/Whiteboard";
import CodeFormatter from "./pages/CodeFormatter";
import TextDiff from "./pages/TextDiff";
import JsonFormatter from "./pages/JsonFormatter";
import ColorPalette from "./pages/ColorPalette";
import Base64Tool from "./pages/Base64Tool";
import UuidTool from "./pages/UuidTool";
import MarkdownPreviewer from "./pages/MarkdownPreviewer";

import ImageTools from "./pages/ImageTools";
import Screenshot from "./pages/Screenshot";

const items = [
  { label: "Home", path: "/" },
  { label: "Codeshare", path: "/codeshare" },
  { label: "Image Tools", path: "/image-tools" },
  { label: "Screenshot", path: "/screenshot" },
  { label: "Code Formatter", path: "/code-formatter" },
  { label: "Text Diff", path: "/text-diff" },
  { label: "Whiteboard", path: "/whiteboard" },
  { label: "JSON Formatter", path: "/json-formatter" },
  { label: "Color Palette", path: "/color-palette" },
  { label: "Base64 Tool", path: "/base64" },
  { label: "UUID Generator", path: "/uuid" },
  { label: "Markdown Previewer", path: "/markdown" },
];

export default function App() {
  return (
    <BrowserRouter>
      <div className="container flex min-h-screen">
        {/* Sidebar */}
        <aside className="sidebar w-64 p-4 border-r bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">MiniApps Hub</h3>
          <nav>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block px-2 py-1 rounded hover:bg-blue-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="main flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codeshare" element={<Codeshare />} />
            <Route path="/image-tools" element={<ImageTools />} />
            <Route path="/screenshot" element={<Screenshot />} />
            <Route path="/whiteboard" element={<Whiteboard />} />
            <Route path="/code-formatter" element={<CodeFormatter />} />
            <Route path="/text-diff" element={<TextDiff />} />
            <Route path="/json-formatter" element={<JsonFormatter />} />
            <Route path="/color-palette" element={<ColorPalette />} />
            <Route path="/base64" element={<Base64Tool />} />
            <Route path="/uuid" element={<UuidTool />} />
            <Route path="/markdown" element={<MarkdownPreviewer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
