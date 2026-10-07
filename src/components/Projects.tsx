import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { Project3DCard } from './Project3DCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Layers, Terminal, Bot } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | '3d' | 'fullstack' | 'ai'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.filterCategory === filter);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 block">
                Sản phẩm thực tế
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Dự án Tiêu biểu & Ứng dụng Thực chiến
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Các sản phẩm hoàn thiện minh chứng cho năng lực lập trình, tối ưu hiệu năng 60fps và tư duy giải quyết bài toán thực tế. Rê chuột trên mỗi thẻ để tương tác hiệu ứng 3D trực quan.
              </p>
            </div>

            {/* Filter Tabs (Interactive buttons, zero-pill discipline) */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Tất cả ({PROJECTS_DATA.length})
              </button>

              <button
                type="button"
                onClick={() => setFilter('3d')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  filter === '3d'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Đồ họa 3D WebGL</span>
              </button>

              <button
                type="button"
                onClick={() => setFilter('fullstack')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  filter === 'fullstack'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>Full-Stack</span>
              </button>

              <button
                type="button"
                onClick={() => setFilter('ai')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  filter === 'ai'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                <span>Trí tuệ Nhân tạo AI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay={idx * 150}
              data-aos-once="true"
              className="h-full"
            >
              <Project3DCard
                project={project}
                onOpenModal={(p) => setActiveProjectModal(p)}
              />
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
