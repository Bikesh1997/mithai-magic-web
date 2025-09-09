import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function randomString(length = 16) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let out = "";
  for (let i = 0; i < length; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

export default function UuidTool() {
  const [uuid, setUuid] = useState(uuidv4());
  const [rand, setRand] = useState(randomString());

  return (
    <div className="max-w-3xl mx-auto mt-6 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        UUID / Random String Generator
      </h2>

      {/* UUID section */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => setUuid(uuidv4())}
        >
          New UUID v4
        </button>
        <input
          type="text"
          readOnly
          value={uuid}
          className="flex-1 p-2 border rounded-md font-mono text-sm"
        />
      </div>

      {/* Random string section */}
      <div className="flex flex-col md:flex-row gap-3">
        <button
          className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
          onClick={() => setRand(randomString())}
        >
          New Random String
        </button>
        <input
          type="text"
          readOnly
          value={rand}
          className="flex-1 p-2 border rounded-md font-mono text-sm"
        />
      </div>
    </div>
  );
}
