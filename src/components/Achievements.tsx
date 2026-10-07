import React, { useState } from 'react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { Trophy, Award, Briefcase, GitPullRequest, Calendar, CheckCircle2 } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredItems = filterType === 'all'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter((item) => item.type === filterType);

  return (
    <section id="achievements" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 block">
                Cột mốc & Dấu ấn
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Thành tích, Chứng chỉ & Hoạt động
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Những dấu mốc ghi nhận nỗ lực rèn luyện, giải thưởng học thuật và đóng góp thiết thực cho cộng đồng công nghệ.
              </p>
            </div>

            {/* Filter Tabs (Functional segmented controls) */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
              {[
                { id: 'all', label: 'Tất cả' },
                { id: 'award', label: 'Thành tích' },
                { id: 'certificate', label: 'Chứng chỉ' },
                { id: 'work', label: 'Hoạt động & Lab' },
                { id: 'community', label: 'Mã nguồn mở' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilterType(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    filterType === tab.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Timeline Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item, idx) => {
            let Icon = Trophy;
            let iconColor = 'text-amber-400';
            let categoryLabel = 'Thành tích';

            if (item.type === 'certificate') {
              Icon = Award;
              iconColor = 'text-purple-400';
              categoryLabel = 'Chứng nhận';
            } else if (item.type === 'work') {
              Icon = Briefcase;
              iconColor = 'text-cyan-400';
              categoryLabel = 'Kinh nghiệm';
            } else if (item.type === 'community') {
              Icon = GitPullRequest;
              iconColor = 'text-emerald-400';
              categoryLabel = 'Cộng đồng';
            }

            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay={idx * 120}
                data-aos-once="true"
              >
                <div className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:scale-[1.01] shadow-lg flex flex-col justify-between h-full group">
                  <div>
                    {/* Header: Year & Category Type */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="font-bold">{item.year}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-slate-400">{categoryLabel}</span>
                      </div>

                      <div className={`w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center ${iconColor} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 text-slate-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
