import React, { useState } from "react";
import prettier from "prettier/standalone";
import babelParser from "prettier/plugins/babel";
import estree from "prettier/plugins/estree";

export default function CodeFormatter() {
  const [lang, setLang] = useState("babel");
  const [input, setInput] = useState(
    'function hello(name){console.log("Hi "+name)}'
  );
  const [output, setOutput] = useState("");

  const run = async () => {
    try {
      const formatted = await prettier.format(input, {
        parser: lang,
        plugins: [babelParser, estree],
      });
      setOutput(formatted);
    } catch (e) {
      setOutput(String(e));
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Code Formatter
      </h2>

      {/* Language toggle */}
      <div className="flex justify-center gap-2 mb-4">
        <button
          className={`px-4 py-2 rounded-md border ${
            lang === "babel"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          }`}
          onClick={() => setLang("babel")}
        >
          JavaScript
        </button>
        <button
          className={`px-4 py-2 rounded-md border ${
            lang === "json"
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          }`}
          onClick={() => setLang("json")}
        >
          JSON (use JS parser)
        </button>
      </div>

      {/* Input area */}
      <label className="block font-medium mb-1">Input</label>
      <textarea
        className="w-full p-3 border rounded-md font-mono text-sm mb-3"
        rows="8"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste code here"
      />

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={run}
      >
        Format
      </button>

      {/* Output area */}
      <label className="block font-medium mt-4 mb-1">Formatted Output</label>
      <textarea
        className="w-full p-3 border rounded-md font-mono text-sm"
        rows="8"
        value={output}
        readOnly
        placeholder="Formatted code will appear here"
      />
    </div>
  );
}
