"use client";

import { useState, useEffect } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#FFF9F0] flex items-center justify-center">
      <div className="text-center">
        <div className="font-display text-5xl font-extrabold text-[#1B1B2F] mb-4 animate-float">
          Saijal <span className="text-[#FF6B9D]">Chauhan</span>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="w-4 h-4 rounded-full bg-[#FFD23F] border-2 border-[#1B1B2F] animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-4 h-4 rounded-full bg-[#FF6B9D] border-2 border-[#1B1B2F] animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-4 h-4 rounded-full bg-[#4ECDC4] border-2 border-[#1B1B2F] animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
}