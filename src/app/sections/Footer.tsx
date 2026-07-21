import { Link2, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 lg:px-8 bg-[#08080f]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Saijal Chauhan. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/saijalchauhan12345-creator" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Link2 size={20} />
          </a>
          <a href="https://www.linkedin.com/in/saijal-chauhan-0096ab319" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Link2 size={20} />
          </a>
          <a href="mailto:saijalchauhan12345@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}