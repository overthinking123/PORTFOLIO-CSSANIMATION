import React, { useState, useEffect, useRef } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types';
import { Code, Layout, Server, Database, Cpu, Sparkles, LayoutGrid, List, CheckCircle2, TrendingUp, CpuIcon } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  code: Code,
  layout: Layout,
  server: Server,
  database: Database,
  cpu: Cpu,
  sparkles: Sparkles
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [displayMode, setDisplayMode] = useState<'cards' | 'bars'>('cards');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger progress bar animations when section scrolls into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElem = sectionRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  // Flatten all skills for the all-cards view if needed
  const allFilteredSkills: { skill: SkillItem; categoryTitle: string; iconName: string }[] = [];
  filteredCategories.forEach((cat) => {
    cat.skills.forEach((s) => {
      allFilteredSkills.push({
        skill: s,
        categoryTitle: cat.title,
        iconName: cat.iconName
      });
    });
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 relative border-t border-slate-800/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 block">
                Năng lực kỹ thuật
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Kỹ năng Chuyên môn & Tiến độ Năng lực
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Hệ thống kỹ năng thực tiễn với thanh tiến độ trực quan, mô tả chi tiết năng lực và mức độ thành thạo tương ứng với từng công nghệ.
              </p>
            </div>

            {/* Display Mode Switcher (Cards vs Progress Bars) */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl shrink-0 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setDisplayMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  displayMode === 'cards'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Xem theo thẻ kỹ năng chi tiết"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Thẻ Kỹ năng</span>
              </button>

              <button
                type="button"
                onClick={() => setDisplayMode('bars')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                  displayMode === 'bars'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Xem theo bảng tiến độ ngang"
              >
                <List className="w-3.5 h-3.5" />
                <span>Bảng Tiến độ Ngang</span>
              </button>
            </div>
          </div>
        </div>

        {/* Visual Metric Indicators (Section 5 Requirement) */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="100"
          data-aos-once="true"
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm"
        >
          <div className="flex flex-col">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              Khối kiến thức
            </span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-white mt-0.5">
              06 Nhóm
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              Front-End, Back-End, 3D & AI
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              Tổng số công nghệ
            </span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 mt-0.5">
              30+ Kỹ năng
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              Tích lũy thực tế qua dự án
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              Mức độ thành thạo TB
            </span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-purple-400 mt-0.5">
              85%+
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              TypeScript, React & Three.js
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
              Chuẩn hiệu năng
            </span>
            <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mt-0.5">
              60 FPS
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              Tối ưu hóa render & phản hồi
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="150"
          data-aos-once="true"
          className="mt-8 flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full"
        >
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tất cả ({SKILL_CATEGORIES.length} nhóm)
          </button>

          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.title
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* MODE 1: SKILL CARDS GRID VIEW */}
        {displayMode === 'cards' && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allFilteredSkills.map((item, idx) => {
              const Icon = ICON_MAP[item.iconName] || Code;
              const delay = (idx % 6) * 80;

              return (
                <div
                  key={`${item.categoryTitle}-${item.skill.name}`}
                  data-aos="fade-up"
                  data-aos-duration="650"
                  data-aos-delay={delay}
                  data-aos-once="true"
                  className="group relative p-5 rounded-2xl bg-slate-900/70 hover:bg-slate-900/95 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
                >
                  <div>
                    {/* Top row: Name & Icon */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 group-hover:rotate-6 transition-all duration-200">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.skill.name}
                          </h4>
                          <span className="text-[10px] font-mono text-slate-500">
                            {item.categoryTitle}
                          </span>
                        </div>
                      </div>

                      {/* Percentage Tag */}
                      <span className="text-xs font-mono font-bold text-cyan-400 tabular-nums">
                        {item.skill.percentage}%
                      </span>
                    </div>

                    {/* Short Description */}
                    {item.skill.description && (
                      <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {item.skill.description}
                      </p>
                    )}
                  </div>

                  {/* Animated Progress Bar (Starts at 0% until isVisible) */}
                  <div className="mt-5 pt-3 border-t border-slate-800/60">
                    <div className="flex items-center justify-between text-[11px] mb-1.5">
                      <span className="text-slate-500">Mức độ</span>
                      <span className={`font-mono ${item.skill.highlight ? 'text-cyan-400 font-semibold' : 'text-slate-400'}`}>
                        {item.skill.level}
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800/80">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${item.skill.percentage}%` : '0%',
                          transitionDelay: `${(idx % 6) * 70}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* MODE 2: LINEAR PROGRESS BARS GROUPED LIST */}
        {displayMode === 'bars' && (
          <div className="mt-10 space-y-8">
            {filteredCategories.map((cat, catIdx) => {
              const Icon = ICON_MAP[cat.iconName] || Code;
              return (
                <div
                  key={cat.title}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay={catIdx * 100}
                  data-aos-once="true"
                  className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-md shadow-xl"
                >
                  {/* Category Title */}
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-6">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* List of Progress Bars */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={skill.name} className="flex flex-col group">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.2 rounded">
                                Trọng tâm
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] text-slate-500 font-mono">
                              {skill.level}
                            </span>
                            <span className="font-mono font-bold text-cyan-400 text-xs tabular-nums">
                              {skill.percentage}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar Container with 0 -> Target animation */}
                        <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800/80">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.percentage}%` : '0%',
                              transitionDelay: `${sIdx * 80}ms`
                            }}
                          />
                        </div>

                        {skill.description && (
                          <span className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                            {skill.description}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
