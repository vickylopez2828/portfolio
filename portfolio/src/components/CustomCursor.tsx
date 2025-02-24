import React from "react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("CustomCursor cargado");

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", moveCursor);
    
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "32px",
        height: "32px",
        backgroundImage: "url('/tu-cursor.cur')", // Ruta a tu archivo .cur
        backgroundSize: "cover",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)", // Centrar la imagen
        zIndex: 9999,
      }}
    />
  );
}
