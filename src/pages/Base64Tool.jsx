import React, { useState } from "react";

export default function Base64Tool() {
  const [text, setText] = useState("Hello Base64");
  const [b64, setB64] = useState("");
  const [decoded, setDecoded] = useState("");

  const encode = () =>
    setB64(btoa(unescape(encodeURIComponent(text))));
  const decode = () => {
    try {
      setDecoded(decodeURIComponent(escape(atob(b64))));
    } catch (e) {
      setDecoded(String(e));
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-6 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Base64 Encoder / Decoder
      </h2>

      <label className="block font-medium mb-1">Text</label>
      <textarea
        className="w-full p-2 border rounded-md mb-3 font-mono text-sm"
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-2"
        onClick={encode}
      >
        Encode →
      </button>

      <label className="block font-medium mt-4 mb-1">Base64</label>
      <textarea
        className="w-full p-2 border rounded-md mb-3 font-mono text-sm"
        rows="3"
        value={b64}
        onChange={(e) => setB64(e.target.value)}
      />

      <button
        className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
        onClick={decode}
      >
        Decode →
      </button>

      <label className="block font-medium mt-4 mb-1">Decoded</label>
      <textarea
        className="w-full p-2 border rounded-md mb-3 font-mono text-sm"
        rows="3"
        value={decoded}
        readOnly
      />
    </div>
  );
}
