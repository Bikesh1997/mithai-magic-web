import React, { useState, useRef } from "react";

export default function Screenshot() {
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);
  const videoRef = useRef();

  // Capture Screen (client side)
  const startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setStatus("Capturing...");
    } catch (err) {
      console.error(err);
      setStatus("Error: " + err.message);
    }
  };

  const takeScreenshot = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const url = canvas.toDataURL("image/png");
    setImage(url);
    setStatus("Screenshot captured!");
  };

  const downloadImage = () => {
    if (!image) return;
    const a = document.createElement("a");
    a.href = image;
    a.download = "screenshot.png";
    a.click();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Screenshot Tool</h2>

      <button onClick={startCapture}>Start Screen Capture</button>
      <button onClick={takeScreenshot} style={{ marginLeft: 8 }}>
        Take Screenshot
      </button>
      <button onClick={downloadImage} style={{ marginLeft: 8 }}>
        Download Screenshot
      </button>

      <div style={{ marginTop: 12 }}>Status: {status}</div>

      <div style={{ marginTop: 12 }}>
        <video
          ref={videoRef}
          style={{ width: "100%", maxHeight: "400px", border: "1px solid #ccc" }}
          autoPlay
          muted
        />
      </div>

      {image && (
        <div style={{ marginTop: 12 }}>
          <h4>Preview:</h4>
          <img src={image} alt="screenshot" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
}
