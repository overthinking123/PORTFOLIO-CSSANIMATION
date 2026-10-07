import React, { useState, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import { Download, Camera, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Trang chủ', href: '#hero', id: 'hero' },
  { name: 'Giới thiệu', href: '#about', id: 'about' },
  { name: 'Học vấn', href: '#education', id: 'education' },
  { name: 'Kỹ năng', href: '#skills', id: 'skills' },
  { name: 'Dự án', href: '#projects', id: 'projects' },
  { name: 'Thành tích', href: '#achievements', id: 'achievements' },
  { name: 'Mục tiêu', href: '#goals', id: 'goals' },
  { name: 'Liên hệ', href: '#contact', id: 'contact' }
];

export const Navbar: React.FC = () => {
  const { profile, openUploadModal, downloadCV } = useProfile();
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand title (Single element) */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
          aria-label="Về đầu trang"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/40 shadow-sm shrink-0">
            <img
              src={profile.avatarUrl}
              alt={profile.fullName}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-sm font-bold tracking-tight text-white uppercase font-mono truncate">
            {profile.fullName}
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean text with subtle active underline) */}
        <nav
          className="hidden lg:flex items-center gap-7 text-xs font-medium text-slate-300"
          aria-label="Điều hướng chính"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 transition-colors duration-200 hover:text-cyan-300 ${
                  isActive ? 'text-cyan-400 font-semibold' : 'text-slate-400'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate__animated animate__fadeIn animate__faster" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Change Avatar Button */}
          <button
            type="button"
            onClick={openUploadModal}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            title="Tải ảnh lên hoặc đổi ảnh đại diện cá nhân"
          >
            <Camera className="w-3.5 h-3.5 text-cyan-400" />
            <span>Đổi ảnh</span>
          </button>

          {/* Download CV CTA */}
          <button
            type="button"
            onClick={downloadCV}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 rounded-xl shadow-md shadow-cyan-500/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải CV</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={openUploadModal}
            className="sm:hidden p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700"
            aria-label="Thay đổi ảnh đại diện"
          >
            <Camera className="w-4 h-4 text-cyan-400" />
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
            aria-label={isMobileMenuOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0c121e]/98 border-b border-slate-800 px-5 pt-3 pb-6 animate__animated animate__fadeInDown animate__faster shadow-2xl">
          <nav className="flex flex-col space-y-3 mb-5" aria-label="Điều hướng di động">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between py-2 text-sm font-medium border-b border-slate-800/50 transition-colors ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-300'
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openUploadModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
            >
              <Camera className="w-4 h-4 text-cyan-400" />
              <span>Thay đổi ảnh cá nhân</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                downloadCV();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 rounded-xl shadow-md shadow-cyan-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Tải hồ sơ cá nhân (CV)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
