import React from 'react';
import { useProfile } from '../context/ProfileContext';
import { User, GraduationCap, MapPin, Code2, Layers, Cpu, Award } from 'lucide-react';

export const About: React.FC = () => {
  const { profile } = useProfile();

  const HIGHLIGHT_POINTS = [
    {
      title: "Nền tảng Học vấn Vững chắc",
      desc: `Sinh viên chuyên ngành ${profile.major} tại ${profile.university}, chủ động tiếp cận các kiến trúc công nghệ tiên tiến.`,
      icon: GraduationCap,
      color: "text-cyan-400"
    },
    {
      title: "Chuyên sâu Front-End & 3D Web",
      desc: "Nắm vững hệ sinh thái React 19, TypeScript, kết hợp Three.js / WebGL tạo không gian trình diễn 3D sống động.",
      icon: Layers,
      color: "text-blue-400"
    },
    {
      title: "Tư duy Kiến trúc Full-Stack",
      desc: "Phát triển các dịch vụ backend Node.js, WebSockets thời gian thực và quản trị dữ liệu tối ưu hóa độ trễ.",
      icon: Cpu,
      color: "text-purple-400"
    },
    {
      title: "Trải nghiệm Hackathon & Cộng đồng",
      desc: "Đạt giải Đội thi Xuất sắc Hackathon 2024, tham gia làm trợ giảng lab máy tính và cống hiến mã nguồn mở UI.",
      icon: Award,
      color: "text-amber-400"
    }
  ];

  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Giới thiệu bản thân
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Hành trình Học tập & Đam mê Công nghệ
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Tôi là một sinh viên IT luôn tìm kiếm sự kết hợp hoàn hảo giữa độ chuẩn xác kỹ thuật và tính thẩm mỹ tương tác thị giác trong từng dòng mã.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Profile Spec Card */}
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="100"
            data-aos-once="true"
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-xl">
              
              {/* Profile Header within About */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-cyan-500/40 bg-slate-800 shrink-0">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.fullName}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-white truncate">
                    {profile.fullName}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5 truncate">
                    {profile.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate">{profile.university}</span>
                  </p>
                </div>
              </div>

              {/* Key Spec Lines (Unboxed with clean text) */}
              <div className="mt-6 space-y-4 text-xs font-mono">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-500">Chuyên ngành đào tạo</span>
                  <span className="text-slate-200 font-medium font-sans">{profile.major}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-500">Năm sinh</span>
                  <span className="text-slate-200 font-medium">{profile.birthYear} (19 tuổi · 2026)</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-500">Đơn vị trường học</span>
                  <span className="text-slate-200 font-medium font-sans">{profile.university}</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-500">Vị trí hướng tới</span>
                  <span className="text-cyan-400 font-medium font-sans">Frontend / Full-Stack Engineer</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-500">Khu vực làm việc</span>
                  <span className="text-slate-200 font-medium font-sans">Việt Nam (Linh hoạt Remote / On-site)</span>
                </div>
              </div>

              {/* Quote / Philosophy Box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 italic leading-relaxed">
                &ldquo;Tập trung vào hiệu năng render mượt mà 60fps, tương tác 3D WebGL trực quan và khả năng trợ năng cao là kim chỉ nam trong mọi sản phẩm tôi phát triển.&rdquo;
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHT_POINTS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-delay={100 + i * 100}
                  data-aos-once="true"
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between h-full"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-4 ${pillar.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
