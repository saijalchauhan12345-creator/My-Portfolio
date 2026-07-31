"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-20 bg-[#FFF9F0] px-4">
      <div className="absolute top-24 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-[#FFD23F] rounded-full opacity-70 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-32 right-4 md:right-16 w-24 h-24 md:w-40 md:h-40 bg-[#4ECDC4] rounded-full opacity-60 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-4 md:right-10 w-16 h-16 md:w-24 md:h-24 bg-[#FF6B9D] rounded-full opacity-60 animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <div className="inline-block comic-card px-4 py-2 mb-6 md:mb-8 bg-[#FFD23F] rotate-[-2deg]">
            <p className="font-display font-bold text-xs sm:text-sm md:text-base text-[#1B1B2F]">👋 Hey, welcome to my world!</p>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 text-[#1B1B2F] leading-tight">
            Hi, I&apos;m <span className="text-[#FF6B9D]">Saijal</span> ✨
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#1B1B2F]/70 mb-8 md:mb-10 font-medium opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            AI & ML Engineer | Full Stack Developer
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <a href="#projects" className="comic-btn px-6 py-3 md:px-8 md:py-4 bg-[#FF6B9D] text-white text-sm md:text-base text-center">
              View My Work 🚀
            </a>
            <a href="#contact" className="comic-btn px-6 py-3 md:px-8 md:py-4 bg-white text-[#1B1B2F] text-sm md:text-base text-center">
              Contact Me 💌
            </a>
            <a href="/resume.pdf" download className="comic-btn px-6 py-3 md:px-8 md:py-4 bg-[#4ECDC4] text-[#1B1B2F] text-sm md:text-base text-center">
              Download CV 📄
            </a>
          </div>
        </div>

        <div className="relative flex justify-center order-1 md:order-2">
          <div className="comic-card overflow-hidden rounded-[24px] md:rounded-[32px] max-w-[240px] sm:max-w-xs md:max-w-sm animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <Image src="/images/avtar.handle.png" alt="Saijal Chauhan avatar" width={500} height={600} className="w-full h-auto object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}