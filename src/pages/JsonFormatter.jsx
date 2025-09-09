import React, { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState('{"hello":"world","arr":[1,2,3]}');
  const [output, setOutput] = useState("");

  const format = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, 2));
    } catch (e) {
      setOutput(String(e));
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        JSON Formatter / Validator
      </h2>

      {/* Input Area */}
      <label className="block font-medium mb-1">Input JSON</label>
      <textarea
        className="w-full p-3 border rounded-md font-mono text-sm mb-3"
        rows="8"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Format Button */}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={format}
      >
        Format
      </button>

      {/* Output Area */}
      <label className="block font-medium mt-4 mb-1">Output</label>
      <textarea
        className="w-full p-3 border rounded-md font-mono text-sm"
        rows="8"
        value={output}
        readOnly
        placeholder="Formatted JSON will appear here"
      />
    </div>
  );
}
