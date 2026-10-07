import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { ProfileProvider } from './context/ProfileContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Goals } from './components/Goals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { ToastContainer } from './components/Toast';
import { LoadingScreen } from './components/LoadingScreen';

function PortfolioApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS with accessible settings and optimal timings
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      duration: 750,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
      disable: isReducedMotion
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        AOS.refreshHard();
      }, 150);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Initial App Loading Screen */}
      {isLoading && <LoadingScreen onLoaded={() => setIsLoading(false)} />}

      {/* Main Top Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Goals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <PhotoUploadModal />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <ProfileProvider>
      <PortfolioApp />
    </ProfileProvider>
  );
}
