import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { DEFAULT_PROFILE } from '../data/portfolioData';

interface ToastInfo {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ProfileContextType {
  profile: UserProfile;
  updateProfile: (updated: Partial<UserProfile>) => void;
  updateAvatar: (avatarDataUrl: string) => void;
  resetAvatarToDefault: () => void;
  isUploadModalOpen: boolean;
  openUploadModal: () => void;
  closeUploadModal: () => void;
  toasts: ToastInfo[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
  downloadCV: () => void;
}

const STORAGE_KEY_PROFILE = 'student_portfolio_profile_2026';
const STORAGE_KEY_AVATAR = 'student_portfolio_avatar_2026';

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const savedProfile = localStorage.getItem(STORAGE_KEY_PROFILE);
      const savedAvatar = localStorage.getItem(STORAGE_KEY_AVATAR);
      let base = { ...DEFAULT_PROFILE };
      if (savedProfile) {
        base = { ...base, ...JSON.parse(savedProfile) };
      }
      if (savedAvatar) {
        base.avatarUrl = savedAvatar;
      }
      return base;
    } catch {
      return DEFAULT_PROFILE;
    }
  });

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  // Show Toast
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const updateProfile = (updated: Partial<UserProfile>) => {
    setProfile((prev) => {
      const next = { ...prev, ...updated };
      try {
        localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(next));
      } catch (err) {
        console.warn('Cannot persist profile to localStorage:', err);
      }
      return next;
    });
    showToast('Thông tin hồ sơ đã được cập nhật thành công!', 'success');
  };

  const updateAvatar = (avatarDataUrl: string) => {
    setProfile((prev) => {
      const next = { ...prev, avatarUrl: avatarDataUrl };
      try {
        localStorage.setItem(STORAGE_KEY_AVATAR, avatarDataUrl);
      } catch (err) {
        console.warn('Cannot persist avatar to localStorage:', err);
      }
      return next;
    });
    showToast('Ảnh đại diện đã được cập nhật thành công trên toàn bộ trang web!', 'success');
  };

  const resetAvatarToDefault = () => {
    setProfile((prev) => {
      const next = { ...prev, avatarUrl: DEFAULT_PROFILE.avatarUrl };
      try {
        localStorage.removeItem(STORAGE_KEY_AVATAR);
      } catch (err) {
        console.warn('Cannot clear avatar from localStorage:', err);
      }
      return next;
    });
    showToast('Đã khôi phục ảnh đại diện mặc định.', 'info');
  };

  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);

  // Generate & Download CV in markdown / text format
  const downloadCV = () => {
    const cvText = `============================================================
HỒ SƠ CÁ NHÂN / CV — ${profile.fullName.toUpperCase()} (NĂM 2026)
============================================================

THÔNG TIN CHUNG:
- Họ và tên: ${profile.fullName}
- Năm sinh: ${profile.birthYear}
- Trường đào tạo: ${profile.university}
- Chuyên ngành: ${profile.major}
- Định hướng: ${profile.title}
- Email: ${profile.email}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}
- Nơi cư trú: ${profile.location}

GIỚI THIỆU BẢN THÂN:
${profile.bio}

HỌC VẤN:
- Cử nhân Công nghệ Thông tin — Đại học Lạc Hồng (2024 - 2028)
- Chuyên sâu: Kỹ thuật Phần mềm, Lập trình Web Nâng cao, Đồ họa 3D WebGL
- Điểm rèn luyện: Xuất sắc

KỸ NĂNG CHUYÊN MÔN:
- Ngôn ngữ: TypeScript, JavaScript (ES6+), HTML5, CSS3, Python, SQL, GLSL Shaders
- Front-End: React 19, Tailwind CSS, Three.js, WebGL, Motion, Next.js
- Back-End: Node.js, Express, WebSockets, RESTful API, JWT
- Cơ sở dữ liệu: PostgreSQL, MongoDB, Redis, Web Storage
- Công cụ: Git, GitHub, Docker, Vite, Linux CLI, Google Gemini AI API

DỰ ÁN TIÊU BIỂU:
1. Nexus 3D — Không gian Trình diễn Cyberpunk WebGL Tương tác
   - Vai trò: Trưởng nhóm & Kỹ sư Đồ họa Three.js
   - Công nghệ: Three.js, WebGL, React 19, GLSL, Tailwind
   - Tối ưu hóa 25,000+ hạt không gian, ổn định 60 FPS.

2. DevSphere — Không gian Lập trình Cộng tác Thời gian Thực
   - Vai trò: Lập trình viên Full-Stack chính
   - Công nghệ: TypeScript, Node.js, WebSockets, Monaco Editor, Docker
   - Đồng bộ thời gian thực đa người dùng, độ trễ <30ms.

3. Aetheria — Nền tảng Nghiên cứu & Tổng hợp Tri thức Học thuật AI
   - Vai trò: Kỹ sư Frontend & Tích hợp AI API
   - Công nghệ: React, Gemini API, Vector Embeddings, Node.js
   - Trích xuất tài liệu PDF khoa học, đồ thị tri thức ngữ nghĩa.

THÀNH TÍCH & HOẠT ĐỘNG:
- 2024: Đội thi Xuất sắc — Hackathon Trường Đại học
- 2024: Chứng nhận Sáng tạo Công nghệ Hackathon — Đại học Lạc Hồng
- 2024: Trợ giảng Sinh viên Lab CNTT Khoa CNTT — Đại học Lạc Hồng
- 2023: Đóng góp Mã nguồn Mở UI — GitHub Open Source Community

MỤC TIÊU NGHỀ NGHIỆP:
- 2026: Ứng tuyển thực tập vị trí Frontend / Full-Stack Engineer; hoàn thành xuất sắc các dự án công nghệ lớn.
- Dài hạn: Trở thành Kỹ sư Phần mềm chuyên sâu về Web Graphics & Performance Engineering.

============================================================
© 2026 ${profile.fullName} | Hồ sơ E-Portfolio Chính thức
============================================================`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV_${profile.fullName.replace(/\s+/g, '_')}_2026.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Đã tải xuống hồ sơ CV thành công!', 'success');
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        updateProfile,
        updateAvatar,
        resetAvatarToDefault,
        isUploadModalOpen,
        openUploadModal,
        closeUploadModal,
        toasts,
        showToast,
        removeToast,
        downloadCV
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
