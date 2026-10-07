import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile } = useProfile();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-once="true"
      className="py-12 border-t border-slate-800 bg-[#070A12] text-slate-400 text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="text-sm font-bold text-white tracking-wider uppercase font-mono">
              {profile.fullName}
            </span>
            <p className="mt-1 text-slate-500">
              E-Portfolio Sinh viên Công nghệ Thông tin · {profile.university}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all hover:scale-105 cursor-pointer ml-2"
              aria-label="Về đầu trang"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Đầu trang</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar with 2026 copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 {profile.fullName}. Tất cả các quyền được bảo lưu.
          </div>

          <div className="flex items-center gap-1">
            <span>Thiết kế & hoàn thiện với React 19, Tailwind CSS & Three.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
