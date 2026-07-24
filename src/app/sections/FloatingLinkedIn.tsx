"use client";

import { Link2 } from "lucide-react";

export default function FloatingLinkedIn() {
  return (
    <a href="https://www.linkedin.com/in/saijal-chauhan-0096ab319" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 comic-btn bg-[#0A66C2] text-white px-5 py-3 hover-wiggle">
      <Link2 size={22} />
      <span className="hidden sm:inline font-display font-bold text-sm">LinkedIn</span>
    </a>
  );
}