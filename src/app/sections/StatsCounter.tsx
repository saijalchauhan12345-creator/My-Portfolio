"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Projects Built", value: 4, suffix: "+", color: "#FFD23F", link: null },
  { label: "Certifications", value: 3, suffix: "", color: "#FF6B9D", link: null },
  { label: "LeetCode Problems", value: 100, suffix: "+", color: "#9B5DE5", link: "https://leetcode.com/u/saijal06/" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1500;
            const startTime = Date.now();
            const isDecimal = target % 1 !== 0;

            const tick = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const current = target * progress;
              setCount(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current));
              if (progress < 1) requestAnimationFrame(tick);
              else setCount(target);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-extrabold text-[#1B1B2F]">
      {count}{suffix}
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-[#FFF9F0]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) =>
          stat.link ? (
            <a key={i} href={stat.link} target="_blank" rel="noopener noreferrer" className="comic-card p-6 text-center hover-wiggle cursor-pointer" style={{ backgroundColor: stat.color }}>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-bold text-[#1B1B2F] mt-2">{stat.label} 🔗</p>
            </a>
          ) : (
            <div key={i} className="comic-card p-6 text-center" style={{ backgroundColor: stat.color }}>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm font-bold text-[#1B1B2F] mt-2">{stat.label}</p>
            </div>
          )
        )}
      </div>
    </section>
  );
}