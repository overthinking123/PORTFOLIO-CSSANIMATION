import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import { Mail, Github, Linkedin, Send, Copy, Check, CheckCircle2, AlertCircle, MapPin, GraduationCap } from 'lucide-react';

export const Contact: React.FC = () => {
  const { profile, showToast } = useProfile();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    showToast(`Đã sao chép email: ${profile.email}`, 'success');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Vui lòng điền đầy đủ các thông tin bắt buộc!', 'error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending message with realistic delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      showToast('Tin nhắn của bạn đã được gửi thành công!', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Kết nối & Hợp tác
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Liên hệ với Tôi
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              Tôi luôn chào đón cơ hội thực tập, dự án cộng tác và các trao đổi về công nghệ. Hãy để lại tin nhắn hoặc kết nối trực tiếp qua các kênh bên dưới.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div
            data-aos="fade-right"
            data-aos-duration="750"
            data-aos-delay="100"
            data-aos-once="true"
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl">
              <h3 className="text-sm font-mono uppercase text-slate-400 tracking-wider mb-5">
                Thông tin Trực tiếp
              </h3>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">Địa chỉ Email</span>
                      <span className="text-xs font-mono text-white truncate block">{profile.email}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 rounded-lg transition-colors shrink-0 cursor-pointer"
                    title="Sao chép email"
                    aria-label="Sao chép email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub Box */}
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">Kho lưu trữ GitHub</span>
                      <span className="text-xs font-mono text-white group-hover:text-cyan-300 transition-colors">
                        github.com/nanh3241
                      </span>
                    </div>
                  </div>
                </a>

                {/* LinkedIn Box */}
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-500 block">Mạng lưới Nghề nghiệp</span>
                      <span className="text-xs text-white group-hover:text-cyan-300 transition-colors">
                        Hồ sơ LinkedIn
                      </span>
                    </div>
                  </div>
                </a>

                {/* University Location Box */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/60 text-xs text-slate-400">
                  <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{profile.university} · {profile.major}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-delay="150"
            data-aos-once="true"
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md shadow-xl"
            >
              <h3 className="text-sm font-mono uppercase text-slate-400 tracking-wider mb-6">
                Gửi Tin nhắn Trực tiếp
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Tin nhắn đã được gửi thành công!</p>
                    <p className="mt-0.5 text-emerald-400/90">
                      Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại bạn trong thời gian sớm nhất qua email.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Họ và tên của bạn <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Địa chỉ Email liên hệ <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Tiêu đề công việc / Trao đổi
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Cơ hội thực tập Frontend / Hợp tác dự án Web 3D"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nội dung tin nhắn <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Xin chào Minh Anh, chúng tôi rất ấn tượng với hồ sơ của bạn..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 active:scale-95 text-slate-950 font-semibold text-xs shadow-lg shadow-cyan-500/20 transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Đang gửi thông tin...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Gửi tin nhắn liên hệ</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
