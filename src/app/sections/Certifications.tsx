"use client";

import { useEffect, useRef } from "react";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "Certificate of Excellence — Code Farming 24-Hour Code-A-Thon",
    org: "HackerRank | Voyager Coding Club, KCC Institute",
    date: "April 2026",
    color: "#FFD23F",
  },
  {
    title: "Artificial Intelligence Trainee",
    org: "Tripple One Solutions | In association with Kshitij, IIT Kharagpur",
    date: "May – Jun 2025",
    color: "#FF6B9D",
  },
  {
    title: "HCL GUVI STaR — Scholarship Test and Rewards",
    org: "GUVI | HCL",
    date: "March 2026",
    color: "#4ECDC4",
  },
];

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.15 }
    );

    ref.current?.querySelectorAll(".cert-card").forEach((card, i) => {
      (card as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-24 px-6 lg:px-8 bg-[#FFF9F0]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block comic-card px-5 py-2 mb-4 bg-[#9B5DE5] rotate-[-2deg]">
            <p className="font-display font-bold text-sm text-white">🏆 Achievements</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#1B1B2F]">Certifications</h2>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-card comic-card p-6 flex items-start gap-5 opacity-0 translate-y-10">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center border-3 border-[#1B1B2F] shrink-0"
                style={{ backgroundColor: cert.color }}
              >
                <Award size={26} className="text-[#1B1B2F]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#1B1B2F] mb-1">{cert.title}</h3>
                <p className="text-[#1B1B2F]/70 text-sm font-medium">{cert.org}</p>
                <p className="text-[#1B1B2F]/50 text-xs font-semibold mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}