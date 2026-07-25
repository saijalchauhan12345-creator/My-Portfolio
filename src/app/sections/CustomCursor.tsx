"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
  const colors = ["#FFD23F", "#FF6B9D", "#4ECDC4", "#9B5DE5"];

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });

    const handleClick = (e: MouseEvent) => {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setParticles((prev) => [...prev, ...newParticles]);
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
      }, 700);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <div
        className="hidden md:block fixed w-6 h-6 rounded-full border-3 border-[#1B1B2F] pointer-events-none z-[200] transition-transform duration-75"
        style={{ left: position.x - 12, top: position.y - 12, backgroundColor: "#FFD23F55" }}
      />
      {particles.map((p) => (
        <div
          key={p.id}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-[200] animate-confetti-pop"
          style={{
            left: p.x,
            top: p.y,
            backgroundColor: p.color,
            border: "1.5px solid #1B1B2F",
          }}
        />
      ))}
    </>
  );
}