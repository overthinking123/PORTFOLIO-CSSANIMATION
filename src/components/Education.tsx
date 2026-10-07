import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle, Calendar, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Quá trình đào tạo
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Học vấn & Nền tảng Chuyên môn
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Quá trình tích lũy tri thức bài bản tại trường đại học kết hợp nghiên cứu công nghệ thực nghiệm.
            </p>
          </div>
        </div>

        {/* Education Timeline / Cards */}
        <div className="mt-12 space-y-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={edu.id}
              data-aos="fade-up"
              data-aos-duration="750"
              data-aos-delay={idx * 150}
              data-aos-once="true"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-cyan-500/30">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                  
                  {/* Left Column: Degree & Institution */}
                  <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 pb-6 lg:pb-0 lg:pr-8">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                        <span className="text-slate-600">·</span>
                        <span className="text-emerald-400">{edu.status}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {edu.degree}
                      </h3>

                      <p className="text-base text-slate-300 font-medium mt-1 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{edu.school}</span>
                      </p>

                      <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    {edu.score && (
                      <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-300">
                        <Award className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="font-semibold text-white">{edu.score}</span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Coursework & Highlights */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    {/* Courses */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                        <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Môn học & Chuyên đề Trọng tâm:</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {edu.courses.map((course, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span className="truncate">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Academic Achievements */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                        <Award className="w-3.5 h-3.5 text-purple-400" />
                        <span>Hoạt động & Dấu ấn Học thuật:</span>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        {edu.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
