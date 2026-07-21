"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", level: 80 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB / MySQL", level: 75 },
    ],
  },
  {
    title: "AI/ML & Tools",
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Pandas / NumPy / Scikit-Learn", level: 75 },
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 65 },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".skill-fill");
            bars.forEach((bar) => {
              const level = (bar as HTMLElement).dataset.level;
              (bar as HTMLElement).style.width = `${level}%`;
            });
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2 }
    );

    ref.current?.querySelectorAll(".skill-category").forEach((cat, i) => {
      (cat as HTMLElement).style.animationDelay = `${i * 0.2}s`;
      observer.observe(cat);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Tech <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Stack</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="skill-category bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 opacity-0 translate-y-10 transition-all duration-700">
              <h3 className="text-xl font-bold mb-6 text-indigo-400">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="skill-fill h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out" data-level={skill.level} style={{ width: "0%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}