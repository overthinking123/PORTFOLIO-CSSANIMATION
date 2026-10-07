import React, { useRef, useState } from 'react';
import { ProjectItem } from '../types';
import { Github, ExternalLink, ArrowRight, Layers, Eye } from 'lucide-react';

interface Project3DCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export const Project3DCard: React.FC<Project3DCardProps> = ({ project, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Transform calculations based on mouse coordinates relative to card center
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Small subtle angle (max ±7 degrees) to avoid layout distortion & maintain legibility
    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 h-full"
    >
      <div
        style={{
          transform: isHovered
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.01)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d'
        }}
        className="relative h-full flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 shadow-xl hover:shadow-2xl hover:shadow-cyan-950/40 backdrop-blur-md overflow-hidden group"
      >
        {/* Subtle Ambient Card Top Glare */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.8 : 0.2 }}
        />

        <div>
          {/* Project Media Thumbnail */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

            {/* Category tag unboxed with clean typography */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 backdrop-blur-sm text-[11px] font-mono text-cyan-300">
              {project.category}
            </div>

            {/* Quick View Button overlay on thumbnail */}
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950/80 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 text-xs font-medium border border-slate-700/60 transition-all duration-200 opacity-90 group-hover:opacity-100 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Chi tiết</span>
            </button>
          </div>

          {/* Card Body */}
          <div className="p-6">
            {/* Role Header */}
            <div className="text-[11px] font-mono text-cyan-400 mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>{project.role}</span>
            </div>

            {/* Project Title */}
            <h3
              onClick={() => onOpenModal(project)}
              className="text-lg font-bold text-white hover:text-cyan-300 transition-colors cursor-pointer tracking-tight"
            >
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
              {project.description}
            </p>

            {/* Problem Solved Callout */}
            <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Vấn đề giải quyết: </span>
              <span className="line-clamp-2">{project.problemSolved}</span>
            </div>

            {/* Tech Tags (Zero-pill: subtle rounded-md with soft slate background) */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
          >
            <span>Khám phá tính năng</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-110"
              title="Xem mã nguồn trên GitHub"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all hover:scale-110"
                title="Xem bản demo trực tiếp"
                aria-label="Live Demo Link"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
