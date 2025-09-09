import React, { useRef, useState } from 'react';

export default function ImageTools() {
  const [file, setFile] = useState(null);
  const [src, setSrc] = useState(null);
  const [status, setStatus] = useState('');
  const fileInputRef = useRef(null);

  function handleFileInput(e) {
    const f = e.target.files[0];
    handleFile(f);
  }

  function handleFile(f) {
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = () => setSrc(reader.result);
    reader.readAsDataURL(f);
    setStatus('Image loaded! 📸');
  }

  function downloadImage() {
    if (!src) return;
    const a = document.createElement('a');
    a.href = src;
    a.download = 'my-image.png';
    a.click();
    setStatus('Image downloaded! 🎉');
  }

  function clearImage() {
    setFile(null);
    setSrc(null);
    setStatus('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">🎨 Image Magic Tool! ✨</h2>
        <p className="text-lg text-gray-600">Pick an image and let's have some fun!</p>
      </div>

      {/* File Upload Area */}
      <div className="bg-gradient-to-br from-pink-100 to-purple-100 border-4 border-dashed border-pink-300 rounded-3xl p-12 text-center mb-6">
        <div className="text-6xl mb-4">🖼️</div>
        <h3 className="text-2xl font-bold mb-4">Drop your image here!</h3>
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*" 
          onChange={handleFileInput}
          className="hidden"
          id="file-input"
        />
        <label 
          htmlFor="file-input" 
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold text-xl cursor-pointer hover:scale-105 transition-all inline-block"
        >
          📁 Choose Image
        </label>
      </div>

      {/* Image Preview */}
      {src && (
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">🎯 Your Amazing Image!</h3>
          <div className="text-center mb-6">
            <img 
              src={src} 
              alt="Your uploaded image" 
              className="max-w-full max-h-96 rounded-2xl shadow-lg mx-auto"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={downloadImage}
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all"
            >
              💾 Download Image
            </button>
            <button
              onClick={clearImage}
              className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all"
            >
              🗑️ Clear Image
            </button>
          </div>
        </div>
      )}

      {/* Status */}
      {status && (
        <div className="text-center mt-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-2xl font-bold text-xl inline-block animate-bounce">
            {status}
          </div>
        </div>
      )}
    </div>
  );
}