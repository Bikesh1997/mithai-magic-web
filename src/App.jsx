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

const tools = [
  { 
    label: "🏠 Home", 
    path: "/",
    color: "bg-gradient-to-br from-red-400 to-red-500",
    description: "Start Here!"
  },
  { 
    label: "👨‍💻 Code Share", 
    path: "/codeshare",
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    description: "Share Code"
  },
  { 
    label: "🎨 Image Magic", 
    path: "/image-tools",
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    description: "Edit Images"
  },
  { 
    label: "📸 Screenshot", 
    path: "/screenshot",
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
    description: "Capture Screen"
  },
  { 
    label: "✨ Code Pretty", 
    path: "/code-formatter",
    color: "bg-gradient-to-br from-emerald-400 to-green-500",
    description: "Format Code"
  },
  { 
    label: "🔍 Text Compare", 
    path: "/text-diff",
    color: "bg-gradient-to-br from-orange-400 to-yellow-500",
    description: "Compare Text"
  },
  { 
    label: "🎨 Whiteboard", 
    path: "/whiteboard",
    color: "bg-gradient-to-br from-indigo-400 to-purple-600",
    description: "Draw Together"
  },
  { 
    label: "📋 JSON Fix", 
    path: "/json-formatter",
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    description: "Format JSON"
  },
  { 
    label: "🌈 Color Fun", 
    path: "/color-palette",
    color: "bg-gradient-to-br from-rose-400 to-pink-500",
    description: "Pick Colors"
  },
  { 
    label: "🔐 Base64", 
    path: "/base64",
    color: "bg-gradient-to-br from-green-400 to-emerald-500",
    description: "Encode/Decode"
  },
  { 
    label: "🔑 UUID Maker", 
    path: "/uuid",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    description: "Generate IDs"
  },
  { 
    label: "📝 Markdown", 
    path: "/markdown",
    color: "bg-gradient-to-br from-violet-400 to-indigo-500",
    description: "Write Docs"
  },
];

function ToolCard({ tool, isActive }) {
  return (
    <Link to={tool.path}>
      <div className={`
        p-8 rounded-3xl text-white text-center 
        ${tool.color} ${isActive ? 'animate-pulse shadow-2xl' : 'hover:shadow-xl'} 
        transition-all duration-300 hover:scale-105 hover:rotate-1 cursor-pointer
        shadow-lg
      `}>
        <h3 className="font-bold text-2xl mb-3">{tool.label}</h3>
        <p className="text-lg opacity-90 font-medium">{tool.description}</p>
      </div>
    </Link>
  );
}

function Navigation() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-bold text-5xl md:text-6xl mb-4 animate-bounce">
            🚀 Fun Productivity Hub! 🎨
          </h1>
          <p className="text-xl opacity-90 font-medium">
            Pick a super cool tool to get started! ✨
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto p-8">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool, index) => (
            <div 
              key={tool.path} 
              className="animate-bounce"
              style={{ animationDelay: `${index * 0.1}s`, animationDuration: '2s' }}
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
      <footer className="mt-16 p-8 text-center">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mx-auto inline-block px-8 py-4 rounded-2xl font-bold text-xl animate-pulse">
          Made with 💖 for Super Cool Kids!
        </div>
      </footer>
    </div>
  );
}

function ToolWrapper({ children, title }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link 
            to="/"
            className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl flex items-center gap-2 text-lg font-semibold transition-all hover:scale-105"
          >
            🏠 Back to Tools
          </Link>
          <h1 className="font-bold text-3xl">
            {title}
          </h1>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl p-6">
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
          <ToolWrapper title="👨‍💻 Code Share">
            <Codeshare />
          </ToolWrapper>
        } />
        <Route path="/image-tools" element={
          <ToolWrapper title="🎨 Image Magic">
            <ImageTools />
          </ToolWrapper>
        } />
        <Route path="/screenshot" element={
          <ToolWrapper title="📸 Screenshot Tool">
            <Screenshot />
          </ToolWrapper>
        } />
        <Route path="/whiteboard" element={
          <ToolWrapper title="🎨 Whiteboard Fun">
            <Whiteboard />
          </ToolWrapper>
        } />
        <Route path="/code-formatter" element={
          <ToolWrapper title="✨ Code Pretty">
            <CodeFormatter />
          </ToolWrapper>
        } />
        <Route path="/text-diff" element={
          <ToolWrapper title="🔍 Text Compare">
            <TextDiff />
          </ToolWrapper>
        } />
        <Route path="/json-formatter" element={
          <ToolWrapper title="📋 JSON Fix">
            <JsonFormatter />
          </ToolWrapper>
        } />
        <Route path="/color-palette" element={
          <ToolWrapper title="🌈 Color Fun">
            <ColorPalette />
          </ToolWrapper>
        } />
        <Route path="/base64" element={
          <ToolWrapper title="🔐 Base64 Tool">
            <Base64Tool />
          </ToolWrapper>
        } />
        <Route path="/uuid" element={
          <ToolWrapper title="🔑 UUID Maker">
            <UuidTool />
          </ToolWrapper>
        } />
        <Route path="/markdown" element={
          <ToolWrapper title="📝 Markdown Magic">
            <MarkdownPreviewer />
          </ToolWrapper>
        } />
      </Routes>
    </BrowserRouter>
  );
}