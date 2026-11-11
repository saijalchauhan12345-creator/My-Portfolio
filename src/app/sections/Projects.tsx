
"use client";

import { useEffect, useRef } from "react";
import { Link2 } from "lucide-react";

const projects = [
  {
    title: "Campus Path AI",
    desc: "AI-powered career platform generating personalized learning roadmaps based on skill level, with GitHub API integration for developer profile analysis. Built with a team of 4.",
    tech: ["Node.js", "Express.js", "MongoDB", "Gemini AI", "GitHub API"],
    color: "#FFD23F",
    emoji: "🗺️",
    github: "https://github.com/saijalchauhan12345-creator/Campus-Path-AI",
  },
  {
    title: "AI Debate Arena",
    desc: "Solo full-stack platform where users debate topics against an AI opponent with real-time generated responses and secure JWT-based authentication.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT"],
    color: "#FF6B9D",
    emoji: "🎙️",
    github: "https://github.com/saijalchauhan12345-creator/ai-debate-",
  },
  {
    title: "COVID-19 EDA Dashboard",
    desc: "End-to-end exploratory data analysis on the John Hopkins COVID-19 dataset — trends, heatmaps, and time-series growth rate analysis across US, Brazil, and India.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "NumPy"],
    color: "#4ECDC4",
    emoji: "📊",
    github: "https://github.com/saijalchauhan12345-creator/COVID-19",
  },
  {
    title: "Object Detection & Tracking",
    desc: "Real-time object detection and tracking system using YOLOv8, OpenCV, and ByteTrack. Detects objects from webcam or video input with bounding boxes, object labels, and unique tracking IDs.",
    tech: ["Python", "YOLOv8", "OpenCV", "ByteTrack"],
    color: "#A78BFA",
    emoji: "👁️",
    github: "https://github.com/saijalchauhan12345-creator/object-detection",
  },
];

export default function Projects() {
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

    ref.current?.querySelectorAll(".project-card").forEach((card, i) => {
      (card as HTMLElement).style.animationDelay = `${i * 0.2}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-[#FFF9F0]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block comic-card px-5 py-2 mb-4 bg-[#4ECDC4] rotate-[-2deg]">
            <p className="font-display font-bold text-sm text-[#1B1B2F]">
              🛠️ What I&apos;ve Built
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#1B1B2F]">
            My Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card comic-card p-6 opacity-0 translate-y-10"
            >
              <div
                className="relative h-40 mb-6 rounded-2xl flex items-center justify-center border-3 border-[#1B1B2F]"
                style={{ backgroundColor: project.color }}
              >
                <span className="text-6xl">{project.emoji}</span>
              </div>

              <h3 className="font-display text-xl font-bold mb-2 text-[#1B1B2F]">
                {project.title}
              </h3>

              <p className="text-[#1B1B2F]/70 text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-semibold rounded-full border-2 border-[#1B1B2F] text-[#1B1B2F]"
                    style={{ backgroundColor: `${project.color}55` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#1B1B2F] text-white text-sm"
              >
                <Link2 size={16} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
