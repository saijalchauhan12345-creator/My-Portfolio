"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle, Link2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

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

    ref.current?.querySelectorAll(".contact-animate").forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.15}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.type) setStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong" });
      }
    } catch {
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#FFF9F0]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block comic-card px-5 py-2 mb-4 bg-[#FF6B9D] rotate-[2deg]">
            <p className="font-display font-bold text-sm text-white">💌 Let&apos;s Connect</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#1B1B2F]">Get In Touch</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="contact-animate comic-card p-8 opacity-0 translate-y-10 bg-[#FFD23F]">
              <h3 className="font-display text-2xl font-bold mb-3 text-[#1B1B2F]">Let&apos;s Talk 🎉</h3>
              <p className="text-[#1B1B2F]/80 mb-8 leading-relaxed font-medium">
                Have a project in mind? Want to collaborate? I&apos;d love to hear from you!
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-3 border-[#1B1B2F] flex items-center justify-center">
                    <Mail size={20} className="text-[#1B1B2F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1B1B2F]/60 font-semibold">Email</p>
                    <p className="text-[#1B1B2F] font-bold text-sm">saijalchauhan12345@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-3 border-[#1B1B2F] flex items-center justify-center">
                    <Phone size={20} className="text-[#1B1B2F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1B1B2F]/60 font-semibold">Phone</p>
                    <p className="text-[#1B1B2F] font-bold text-sm">+91-8766217296</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-3 border-[#1B1B2F] flex items-center justify-center">
                    <MapPin size={20} className="text-[#1B1B2F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1B1B2F]/60 font-semibold">Location</p>
                    <p className="text-[#1B1B2F] font-bold text-sm">Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-3 border-[#1B1B2F] flex items-center justify-center">
                    <Link2 size={20} className="text-[#1B1B2F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1B1B2F]/60 font-semibold">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/saijal-chauhan-0096ab319" target="_blank" rel="noopener noreferrer" className="text-[#1B1B2F] font-bold text-sm hover:underline">
                      saijal-chauhan
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border-3 border-[#1B1B2F] flex items-center justify-center">
                    <Link2 size={20} className="text-[#1B1B2F]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1B1B2F]/60 font-semibold">GitHub</p>
                    <a href="https://github.com/saijalchauhan12345-creator" target="_blank" rel="noopener noreferrer" className="text-[#1B1B2F] font-bold text-sm hover:underline">
                      saijalchauhan12345-creator
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="contact-animate comic-card p-8 opacity-0 translate-y-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#1B1B2F] mb-2">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-3 bg-[#FFF9F0] border-3 border-[#1B1B2F] rounded-xl text-[#1B1B2F] placeholder-[#1B1B2F]/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1B1B2F] mb-2">Your Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-4 py-3 bg-[#FFF9F0] border-3 border-[#1B1B2F] rounded-xl text-[#1B1B2F] placeholder-[#1B1B2F]/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1B1B2F] mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Inquiry" className="w-full px-4 py-3 bg-[#FFF9F0] border-3 border-[#1B1B2F] rounded-xl text-[#1B1B2F] placeholder-[#1B1B2F]/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-[#1B1B2F] mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className="w-full px-4 py-3 bg-[#FFF9F0] border-3 border-[#1B1B2F] rounded-xl text-[#1B1B2F] placeholder-[#1B1B2F]/40 focus:outline-none focus:ring-2 focus:ring-[#FF6B9D] transition-all resize-none" />
              </div>

              <button type="submit" disabled={isLoading} className="comic-btn w-full px-8 py-4 bg-[#FF6B9D] text-white flex items-center justify-center gap-2 disabled:opacity-70">
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {status.type && (
                <div className={`flex items-center gap-3 p-4 rounded-xl border-3 border-[#1B1B2F] ${status.type === "success" ? "bg-[#4ECDC4]" : "bg-[#FF6B9D]"}`}>
                  {status.type === "success" ? <CheckCircle size={20} className="text-[#1B1B2F]" /> : <AlertCircle size={20} className="text-[#1B1B2F]" />}
                  <p className="text-sm font-bold text-[#1B1B2F]">{status.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}