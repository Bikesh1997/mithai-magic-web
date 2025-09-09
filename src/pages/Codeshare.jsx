import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export default function Codeshare() {
  const [code, setCode] = useState('// Start typing your code here...\nconsole.log("Hello World!");');

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">👨‍💻 Code Editor! ✨</h2>
        <p className="text-lg text-gray-600">Write and share your awesome code!</p>
      </div>

      {/* Code Editor */}
      <div className="bg-white rounded-3xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">🚀 Your Code</h3>
          <button
            onClick={copyCode}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all"
          >
            📋 Copy Code
          </button>
        </div>
        
        <div className="border-4 border-purple-200 rounded-2xl overflow-hidden">
          <CodeMirror 
            value={code} 
            height="420px" 
            extensions={[javascript()]} 
            onChange={(value) => setCode(value)}
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}