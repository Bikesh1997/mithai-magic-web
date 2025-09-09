import React from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

// Pages - using the existing pages from the project
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

interface Tool {
  label: string;
  path: string;
  color: string;
  description: string;
}

const tools: Tool[] = [
  { 
    label: "Dashboard", 
    path: "/",
    color: "bg-slate-50 border-slate-200",
    description: "Overview and navigation"
  },
  { 
    label: "Code Editor", 
    path: "/codeshare",
    color: "bg-blue-50 border-blue-200",
    description: "Write and format code"
  },
  { 
    label: "Image Processing", 
    path: "/image-tools",
    color: "bg-purple-50 border-purple-200",
    description: "Image upload and preview"
  },
  { 
    label: "Screenshot Tool", 
    path: "/screenshot",
    color: "bg-cyan-50 border-cyan-200",
    description: "Capture screenshots"
  },
  { 
    label: "Code Formatter", 
    path: "/code-formatter",
    color: "bg-emerald-50 border-emerald-200",
    description: "Format and beautify code"
  },
  { 
    label: "Text Diff", 
    path: "/text-diff",
    color: "bg-orange-50 border-orange-200",
    description: "Compare text differences"
  },
  { 
    label: "Whiteboard", 
    path: "/whiteboard",
    color: "bg-indigo-50 border-indigo-200",
    description: "Digital drawing board"
  },
  { 
    label: "JSON Formatter", 
    path: "/json-formatter",
    color: "bg-blue-50 border-blue-200",
    description: "Format and validate JSON"
  },
  { 
    label: "Color Palette", 
    path: "/color-palette",
    color: "bg-rose-50 border-rose-200",
    description: "Color palette generator"
  },
  { 
    label: "Base64 Encoder", 
    path: "/base64",
    color: "bg-green-50 border-green-200",
    description: "Encode and decode Base64"
  },
  { 
    label: "UUID Generator", 
    path: "/uuid",
    color: "bg-yellow-50 border-yellow-200",
    description: "Generate unique identifiers"
  },
  { 
    label: "Markdown Editor", 
    path: "/markdown",
    color: "bg-violet-50 border-violet-200",
    description: "Edit and preview markdown"
  },
];

function ToolCard({ tool, isActive }: { tool: Tool; isActive: boolean }) {
  return (
    <Link to={tool.path}>
      <div className={`
        tool-card p-6 rounded-lg border-2 
        ${tool.color} ${isActive ? 'ring-2 ring-primary ring-offset-2' : ''} 
        transition-all duration-200 cursor-pointer
      `}>
        <h3 className="font-semibold text-lg mb-2 text-foreground">{tool.label}</h3>
        <p className="text-sm text-muted-foreground">{tool.description}</p>
      </div>
    </Link>
  );
}

function Navigation() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-3">
              Development Tools Hub
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional development utilities and tools
            </p>
          </div>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div 
              key={tool.path} 
              className="fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ToolCard 
                tool={tool} 
                isActive={location.pathname === tool.path}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Professional Development Tools © 2024
          </p>
        </div>
      </footer>
    </div>
  );
}

function ToolWrapper({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link 
            to="/"
            className="professional-button bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center gap-2"
          >
            ← Back to Tools
          </Link>
          <h1 className="text-2xl font-semibold text-foreground">
            {title}
          </h1>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-card border border-border rounded-lg professional-shadow p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/codeshare" element={
          <ToolWrapper title="Code Editor">
            <Codeshare />
          </ToolWrapper>
        } />
        <Route path="/image-tools" element={
          <ToolWrapper title="Image Processing">
            <ImageTools />
          </ToolWrapper>
        } />
        <Route path="/screenshot" element={
          <ToolWrapper title="Screenshot Tool">
            <Screenshot />
          </ToolWrapper>
        } />
        <Route path="/whiteboard" element={
          <ToolWrapper title="Whiteboard">
            <Whiteboard />
          </ToolWrapper>
        } />
        <Route path="/code-formatter" element={
          <ToolWrapper title="Code Formatter">
            <CodeFormatter />
          </ToolWrapper>
        } />
        <Route path="/text-diff" element={
          <ToolWrapper title="Text Diff">
            <TextDiff />
          </ToolWrapper>
        } />
        <Route path="/json-formatter" element={
          <ToolWrapper title="JSON Formatter">
            <JsonFormatter />
          </ToolWrapper>
        } />
        <Route path="/color-palette" element={
          <ToolWrapper title="Color Palette">
            <ColorPalette />
          </ToolWrapper>
        } />
        <Route path="/base64" element={
          <ToolWrapper title="Base64 Encoder">
            <Base64Tool />
          </ToolWrapper>
        } />
        <Route path="/uuid" element={
          <ToolWrapper title="UUID Generator">
            <UuidTool />
          </ToolWrapper>
        } />
        <Route path="/markdown" element={
          <ToolWrapper title="Markdown Editor">
            <MarkdownPreviewer />
          </ToolWrapper>
        } />
      </Routes>
    </BrowserRouter>
  );
}