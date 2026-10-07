import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoaded: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(15);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(55), 200);
    const timer2 = setTimeout(() => setProgress(88), 450);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          onLoaded();
        }, 400);
      }, 200);
    }, 700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090D16] text-white transition-opacity duration-400 ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow backdrop */}
        <div className="absolute -inset-10 bg-cyan-500/10 blur-3xl rounded-full" />

        {/* Monogram Box */}
        <div className="relative w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center shadow-xl shadow-cyan-950/50 mb-6">
          <span className="text-xl font-extrabold tracking-wider bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent font-mono">
            MA
          </span>
          {/* Subtle spinning ring */}
          <div className="absolute -inset-1 rounded-2xl border border-cyan-500/30 border-t-cyan-400 animate-spin" />
        </div>

        {/* Name and Portfolio Title */}
        <h1 className="text-sm font-semibold tracking-wider text-slate-200 uppercase font-mono mb-1">
          NGUYỄN ĐỖ MINH ANH
        </h1>
        <p className="text-xs text-slate-400 mb-6">
          E-Portfolio Kỹ sư Lập trình Web & 3D · 2026
        </p>

        {/* Progress Bar */}
        <div className="w-52 h-1 bg-slate-800 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[11px] font-mono text-cyan-400/80 mt-2.5">
          {progress}%
        </span>
      </div>
    </div>
  );
};
