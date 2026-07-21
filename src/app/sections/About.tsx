"use client";

import { useEffect, useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Building AI-powered web apps with React, Node.js, Express, and MongoDB — from idea to deployment.",
    color: "#FFD23F",
  },
  {
    icon: Palette,
    title: "AI & Machine Learning",
    desc: "Working with Gemini AI, GNNs, and data science tools to build intelligent, real-world solutions.",
    color: "#FF6B9D",
  },
  {
    icon: Zap,
    title: "Problem Solving",
    desc: "Strong DSA foundation in C++, honed through coding marathons and consistent practice.",
    color: "#4ECDC4",
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    ref.current?.querySelectorAll(".about-card").forEach((card, i) => {
      (card as HTMLElement).style.animationDelay = `${i * 0.2}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-[#FFF9F0]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center order-2 md:order-1">
            <div className="comic-card overflow-hidden rounded-[32px] max-w-xs animate-slide-in-left">
              <Image src="/images/image2.png" alt="Saijal Chauhan" width={400} height={500} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="inline-block comic-card px-5 py-2 mb-4 bg-[#9B5DE5] rotate-[2deg]">
              <p className="font-display font-bold text-sm text-white">✨ Get to know me</p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-[#1B1B2F]">
              About <span className="text-[#FF6B9D]">Me</span>
            </h2>
            <p className="text-[#1B1B2F]/70 leading-relaxed text-lg">
              Final-year AI & ML student at KCC Institute of Technology and Management, Greater Noida, passionate about
              building intelligent full-stack applications — from AI-powered debate platforms to career roadmap tools.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="about-card comic-card p-8 opacity-0 translate-y-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-3 border-[#1B1B2F]" style={{ backgroundColor: card.color }}>
                <card.icon size={28} className="text-[#1B1B2F]" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-[#1B1B2F]">{card.title}</h3>
              <p className="text-[#1B1B2F]/70 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}