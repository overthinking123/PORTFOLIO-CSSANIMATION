import React from 'react';
import { ProjectItem } from '../types';
import { X, Github, ExternalLink, CheckCircle, Layers, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate__animated animate__fadeIn animate__faster"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-cyan-950/50 text-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800 gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{project.category} · {project.role}</span>
            </div>
            <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors shrink-0"
            aria-label="Đóng chi tiết dự án"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview */}
        <div className="mt-5 aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Body */}
        <div className="mt-6 space-y-6">
          
          {/* Key Metrics if available */}
          {project.stats && (
            <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
              {project.stats.map((s, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[11px] font-mono text-slate-500 uppercase">{s.label}</span>
                  <span className="text-base font-bold text-cyan-400 font-mono">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Tổng quan Kiến trúc
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Solved */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <h3 className="text-xs font-semibold text-cyan-300 mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Thách thức kỹ thuật & Vấn đề giải quyết</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Tính năng Nổi bật
            </h3>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Công nghệ & Thư viện Áp dụng
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-all hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span>Xem GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Trải nghiệm Trực tiếp</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
