import React from 'react';
import { CAREER_GOALS } from '../data/portfolioData';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const Goals: React.FC = () => {
  return (
    <section id="goals" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Định hướng tương lai
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Mục tiêu Nghề nghiệp & Tầm nhìn
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Lộ trình phát triển năng lực rõ ràng, gắn liền giữa rèn luyện học thuật và cọ xát thực tế tại doanh nghiệp.
            </p>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAREER_GOALS.map((goal, idx) => {
            const isShortTerm = goal.type === 'short-term';
            const Icon = isShortTerm ? Target : Compass;
            const accentColor = isShortTerm ? 'text-cyan-400 border-cyan-500/30' : 'text-purple-400 border-purple-500/30';

            return (
              <div
                key={goal.period}
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay={idx * 150}
                data-aos-once="true"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between h-full">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-9 h-9 rounded-xl bg-slate-800/80 border flex items-center justify-center ${accentColor}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                            Giai đoạn {goal.period}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {goal.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                      {goal.description}
                    </p>

                    {/* Targets */}
                    <div className="space-y-3">
                      {goal.targets.map((target, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isShortTerm ? 'text-cyan-400' : 'text-purple-400'}`} />
                          <span className="leading-relaxed">{target}</span>
                        </div>
                      ))}
                    </div>
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
