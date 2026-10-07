import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { CORE_STATS } from '../data/portfolioData';
import { Camera, Download, Send, ArrowRight, Github, Linkedin, Mail, Copy, Check, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile, openUploadModal, downloadCV, showToast } = useProfile();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    showToast(`Đã sao chép email: ${profile.email}`, 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none animate-ambient-glow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Subtle Tech Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Column: Typography & Human Presence */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Clean Status Kicker (Anti-slop: clean text with bullet) */}
            <div
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-once="true"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sẵn sàng cho kỳ Thực tập & Dự án mới · 2026</span>
            </div>

            {/* Student Name */}
            <h1
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-once="true"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.1]"
            >
              {profile.fullName}
            </h1>

            {/* University & Role Headline */}
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-once="true"
              className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-medium text-cyan-400 font-mono"
            >
              <span>{profile.title}</span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span className="text-slate-300 font-sans">{profile.university}</span>
            </div>

            {/* Bio Description */}
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="300"
              data-aos-once="true"
              className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed text-balance"
            >
              {profile.bio} Chú trọng vào kiến trúc mã nguồn sạch, trải nghiệm tương tác trực quan 3D WebGL và tối ưu hóa hiệu năng render 60fps trên mọi kích thước thiết bị.
            </p>

            {/* Primary Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
              data-aos-once="true"
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Xem dự án tiêu biểu</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={downloadCV}
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-medium text-sm border border-slate-700/80 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Tải hồ sơ CV (2026)</span>
              </button>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Liên hệ</span>
              </a>
            </div>

            {/* Social Links & Email Micro-interaction */}
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="500"
              data-aos-once="true"
              className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400"
            >
              <span className="font-mono text-slate-500">Kết nối:</span>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all duration-200 hover:scale-105"
                title="Xem trang GitHub"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all duration-200 hover:scale-105"
                title="Hồ sơ LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              {/* Copy Email Button with Micro-interaction */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 transition-all duration-200 hover:scale-105 cursor-pointer"
                title="Bấm để sao chép địa chỉ Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-medium">Đã sao chép email!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="font-mono">{profile.email}</span>
                    <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 ml-0.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Profile Portrait Avatar */}
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-once="true"
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative group">
              {/* Outer Glow Halo with Keyframe Pulse */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/25 via-blue-500/15 to-purple-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-ambient-glow" />

              {/* Portrait Container with 3D Frame Feeling */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl shadow-cyan-950/60 transition-transform duration-300 group-hover:scale-[1.02]">
                
                {/* Profile Image with Fallback and Resilient Rendering */}
                <img
                  src={profile.avatarUrl}
                  alt={profile.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Corner Frame Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

                {/* Hover Overlay Button to Change / Upload Avatar (Prompt C.1 UX requirement) */}
                <div
                  onClick={openUploadModal}
                  className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-200 flex flex-col items-center justify-center gap-2 cursor-pointer p-4 text-center"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openUploadModal();
                    }
                  }}
                  aria-label="Thay đổi ảnh đại diện cá nhân"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 transform scale-90 group-hover:scale-100 transition-transform duration-200">
                    <Camera className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Thay đổi ảnh cá nhân
                  </span>
                  <span className="text-[11px] text-cyan-300/80">
                    Bấm để tải ảnh mới hoặc chụp camera
                  </span>
                </div>
              </div>

              {/* Float Badge 1: Web & 3D Focus */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-xl backdrop-blur-md flex items-center gap-2.5 transition-transform duration-300 hover:scale-105">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Chuyên môn chính</div>
                  <div className="text-xs font-bold text-white">React 19 & Three.js 3D</div>
                </div>
              </div>

              {/* Float Badge 2: Quick change photo shortcut */}
              <button
                type="button"
                onClick={openUploadModal}
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-slate-700/80 hover:border-cyan-400 text-[11px] font-medium text-slate-300 hover:text-white shadow-lg backdrop-blur-md flex items-center gap-1.5 transition-all duration-200 hover:scale-105 cursor-pointer"
                title="Tải ảnh mới lên"
              >
                <Camera className="w-3.5 h-3.5 text-cyan-400" />
                <span>Đổi ảnh</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Proof Metrics Grid (Adjacency to human claims) */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {CORE_STATS.map((stat, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={idx * 100}
              data-aos-once="true"
              className="flex flex-col"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-slate-400 leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
