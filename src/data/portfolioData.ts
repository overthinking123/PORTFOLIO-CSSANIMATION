import { UserProfile, ProjectItem, AchievementItem, EducationItem, SkillCategory, CareerGoal } from '../types';

export const DEFAULT_PROFILE: UserProfile = {
  fullName: "NGUYỄN ĐỖ MINH ANH",
  birthYear: "2007",
  university: "Đại học Lạc Hồng",
  major: "Cử nhân Công nghệ Thông tin",
  title: "SINH VIÊN CNTT • LẬP TRÌNH WEB & ĐỒ HỌA 3D",
  bio: "Sinh viên Công nghệ Thông tin đam mê phát triển trải nghiệm web hiện đại, giao diện frontend hiệu năng cao và đồ họa 3D tương tác.",
  email: "nanh3241@gmail.com",
  github: "https://github.com/nanh3241",
  linkedin: "https://linkedin.com",
  location: "Việt Nam",
  avatarUrl: "/src/assets/images/profile_avatar_1791391802053.jpg"
};

export const CORE_STATS = [
  { value: "15+", label: "Dự án đã thực hiện" },
  { value: "100%", label: "Cam kết chất lượng mã nguồn" },
  { value: "60fps", label: "Tối ưu hóa đồ họa 3D mượt mà" },
  { value: "2026", label: "Năm mục tiêu thực tập & đóng góp kỹ thuật" }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "nexus-3d",
    title: "Nexus 3D — Không gian Trình diễn Cyberpunk WebGL Tương tác",
    category: "Đồ họa 3D & Web Tương tác",
    filterCategory: "3d",
    role: "Trưởng nhóm & Kỹ sư Đồ họa Three.js",
    problemSolved: "Tối ưu hóa hiệu năng render hàng ngàn hạt không gian thời gian thực trên trình duyệt mà vẫn duy trì ổn định tốc độ 60 khung hình/giây.",
    description: "Trải nghiệm web 3D hiệu năng cao được xây dựng với Three.js và custom GLSL vertex/fragment shaders. Tích hợp quỹ đạo camera động, va chạm trường hạt và tốc độ render mượt mà 60fps.",
    keyFeatures: [
      "Hệ thống trường hạt thời gian thực (Particles System)",
      "Shader GLSL tùy biến cho hiệu ứng ánh sáng neon",
      "Điều khiển góc nhìn camera tương tác mượt mà"
    ],
    tags: ["Three.js", "WebGL", "React 19", "GLSL", "Tailwind"],
    image: "/src/assets/images/nexus_3d_project_1791391813634.jpg",
    fallbackGradient: "from-cyan-900 via-blue-900 to-slate-900",
    githubUrl: "https://github.com/nanh3241",
    liveUrl: "https://ho-so-ca-nhan.vercel.app",
    stats: [
      { label: "Tốc độ Render", value: "60 FPS" },
      { label: "Số lượng hạt", value: "25,000+" }
    ]
  },
  {
    id: "devsphere",
    title: "DevSphere — Không gian Lập trình Cộng tác Thời gian Thực",
    category: "Hệ thống Full-Stack",
    filterCategory: "fullstack",
    role: "Lập trình viên Full-Stack chính",
    problemSolved: "Giải quyết độ trễ và xung đột khi nhiều lập trình viên cùng chỉnh sửa mã nguồn trực tiếp trên một tập tin trong thời gian thực qua WebSockets.",
    description: "Trình soạn thảo mã trực tuyến hỗ trợ biến đổi vận hành thời gian thực (OT), kiểm tra cú pháp trực tiếp, terminal tích hợp và hiển thị trạng thái người dùng trong phòng qua WebSockets.",
    keyFeatures: [
      "Đồng bộ văn bản thời gian thực qua WebSockets",
      "Trình soạn thảo Monaco Editor với kiểm tra cú pháp",
      "Phòng cộng tác đa người dùng và phân quyền linh hoạt"
    ],
    tags: ["TypeScript", "Node.js", "WebSockets", "Monaco Editor", "Docker"],
    image: "/src/assets/images/devsphere_project_1791391828166.jpg",
    fallbackGradient: "from-blue-950 via-indigo-950 to-slate-900",
    githubUrl: "https://github.com/nanh3241",
    liveUrl: "https://ho-so-ca-nhan.vercel.app",
    stats: [
      { label: "Độ trễ đồng bộ", value: "<30ms" },
      { label: "Phiên làm việc", value: "Đa người dùng" }
    ]
  },
  {
    id: "aetheria-ai",
    title: "Aetheria — Nền tảng Nghiên cứu & Tổng hợp Tri thức Học thuật AI",
    category: "Trí tuệ Nhân tạo & Tri thức",
    filterCategory: "ai",
    role: "Kỹ sư Frontend & Tích hợp AI API",
    problemSolved: "Tự động hóa quá trình đọc và trích xuất thông tin từ các bài báo khoa học PDF dài, kết nối dữ liệu ngữ nghĩa với mô hình AI Gemini.",
    description: "Môi trường tổng hợp cho sinh viên đại học tiếp nhận tài liệu PDF khoa học, trích xuất đồ thị tri thức ngữ nghĩa và đối chiếu trích dẫn học thuật với trợ lý AI.",
    keyFeatures: [
      "Trích xuất và tóm tắt tài liệu PDF thông minh",
      "Tìm kiếm ngữ nghĩa với Vector Embeddings",
      "Đối chiếu và xác thực trích dẫn nguồn học thuật"
    ],
    tags: ["React", "Gemini API", "Vector Embeddings", "Node.js", "Tailwind"],
    image: "/src/assets/images/aetheria_ai_project_1791391847091.jpg",
    fallbackGradient: "from-purple-950 via-slate-900 to-indigo-950",
    githubUrl: "https://github.com/nanh3241",
    liveUrl: "https://ho-so-ca-nhan.vercel.app",
    stats: [
      { label: "Độ chính xác tóm tắt", value: "98.5%" },
      { label: "Thời gian xử lý PDF", value: "<2.5s" }
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "hackathon-2024",
    year: "2024",
    title: "Đội thi Xuất sắc — Hackathon Trường Đại học",
    organization: "Thử thách Đổi mới Sáng tạo Công nghệ",
    description: "Dẫn dắt nhóm 4 thành viên thiết kế và phát triển hệ thống tối ưu hóa tài nguyên thông minh với mô hình tương tác 3D WebGL và IoT.",
    tags: ["Thành tích", "Hackathon", "Three.js & IoT"],
    type: "award",
    highlight: true
  },
  {
    id: "cert-hackathon-2024",
    year: "2024",
    title: "Chứng nhận Sáng tạo Công nghệ Hackathon",
    organization: "Hội đồng Khoa CNTT & Đại học Lạc Hồng",
    description: "Chứng nhận hoàn thành và đạt giải tại cuộc thi phát triển ứng dụng thông minh cấp trường, ghi nhận năng lực ứng dụng WebGL và phân tích hệ thống dữ liệu.",
    tags: ["Chứng chỉ", "Xác thực", "Công nghệ Web"],
    type: "certificate",
    highlight: true
  },
  {
    id: "ta-lab-2024",
    year: "2024",
    title: "Trợ giảng Sinh viên Lab CNTT Khoa CNTT",
    organization: "Khoa Công nghệ Thông tin — Đại học Lạc Hồng",
    description: "Hỗ trợ giảng viên hướng dẫn thực hành nhập môn lập trình Web, cấu trúc dữ liệu và giải thuật, hỗ trợ kỹ thuật lab máy tính cho sinh viên khóa mới.",
    tags: ["Kinh nghiệm", "Trợ giảng Lab", "Đại học"],
    type: "work"
  },
  {
    id: "oss-contribution-2023",
    year: "2023",
    title: "Đóng góp Mã nguồn Mở UI",
    organization: "Cộng đồng Công nghệ GitHub",
    description: "Đóng góp các thành phần UI đạt chuẩn trợ năng, cải tiến kiểu dữ liệu TypeScript và xây dựng các demo tương tác cho thư viện mã nguồn mở.",
    tags: ["Cộng đồng", "Mã nguồn mở", "TypeScript"],
    type: "community"
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-lhu",
    degree: "Cử nhân Công nghệ Thông tin",
    school: "Đại học Lạc Hồng",
    period: "2024 - 2028 (Dự kiến)",
    status: "Đang theo học",
    score: "Điểm rèn luyện Xuất sắc",
    description: "Chương trình đào tạo chính quy chuyên sâu về Kỹ thuật Phần mềm, Phát triển Web Hiện đại, Cơ sở Dữ liệu & Hệ thống Phân tán.",
    courses: [
      "Lập trình Web Nâng cao (React, Node.js)",
      "Cấu trúc Dữ liệu & Giải thuật",
      "Đồ họa Máy tính & 3D Interactive Web",
      "Cơ sở Dữ liệu Quan hệ & NoSQL",
      "Kiến trúc Hệ thống Phần mềm"
    ],
    achievements: [
      "Thành viên tích cực Câu lạc bộ Lập trình Sáng tạo Sinh viên",
      "Tham gia các đợt nghiên cứu khoa học & đề tài ứng dụng CNTT",
      "Đại diện tham gia các kỳ thi học thuật và Hackathon cấp trường"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Ngôn ngữ Lập trình",
    iconName: "code",
    description: "Nền tảng cú pháp lập trình vững chắc, tối ưu hóa kiểu dữ liệu tĩnh và xử lý tính toán đồ họa.",
    skills: [
      { name: "TypeScript", level: "Thành thạo", percentage: 88, highlight: true, description: "Type safety, generics, interfaces, tối ưu hóa kiến trúc module lớn" },
      { name: "JavaScript (ES6+)", level: "Thành thạo", percentage: 90, highlight: true, description: "Async/await, closures, functional programming, DOM performance" },
      { name: "HTML5 & CSS3", level: "Thành thạo", percentage: 92, highlight: true, description: "Semantic tags, CSS Grid, Flexbox, transitions & keyframes" },
      { name: "Python", level: "Tốt", percentage: 76, description: "Xử lý dữ liệu, scripting, tích hợp AI logic và thuật toán" },
      { name: "SQL", level: "Tốt", percentage: 75, description: "Truy vấn quan hệ, joins, indexing, thiết kế lược đồ bảng" },
      { name: "GLSL / Shaders", level: "Nâng cao", percentage: 80, highlight: true, description: "Vertex & fragment shaders tùy biến trong Three.js & WebGL" }
    ]
  },
  {
    title: "Front-End & Đồ họa Web",
    iconName: "layout",
    description: "Xây dựng giao diện phản hồi nhanh, kiến trúc Component mô-đun và không gian 3D tương tác.",
    skills: [
      { name: "React 19", level: "Thành thạo", percentage: 90, highlight: true, description: "Hooks, Concurrent features, Context, tối ưu re-render" },
      { name: "Three.js / WebGL", level: "Nâng cao", percentage: 84, highlight: true, description: "Particles system, camera controls, custom lighting, 60fps render" },
      { name: "Tailwind CSS", level: "Thành thạo", percentage: 92, highlight: true, description: "Responsive layouts, utility-first design, dark mode, animation" },
      { name: "Motion (Framer)", level: "Thành thạo", percentage: 85, description: "Layout animations, gesture controls, micro-interactions" },
      { name: "Next.js", level: "Tốt", percentage: 78, description: "Server components, routing, SEO optimization, SSR/SSG" },
      { name: "Responsive & Accessibility", level: "Thành thạo", percentage: 88, highlight: true, description: "Mobile-first, WCAG AA contrast, semantic accessibility, keyboard nav" }
    ]
  },
  {
    title: "Back-End & API",
    iconName: "server",
    description: "Thiết kế dịch vụ API bảo mật, xử lý giao tiếp hai chiều thời gian thực và xác thực phân quyền.",
    skills: [
      { name: "Node.js", level: "Thành thạo", percentage: 84, highlight: true, description: "Event loop, streams, REST API backend, microservices" },
      { name: "Express.js", level: "Thành thạo", percentage: 82, description: "Routing, middleware pipeline, error handling, CORS" },
      { name: "WebSockets", level: "Nâng cao", percentage: 82, highlight: true, description: "Giao tiếp hai chiều thời gian thực, đồng bộ dữ liệu đa người dùng" },
      { name: "RESTful API Design", level: "Thành thạo", percentage: 88, description: "Chuẩn thiết kế HTTP methods, status codes, OpenAPI/Swagger" },
      { name: "JWT Auth & Middleware", level: "Tốt", percentage: 78, description: "Xác thực phiên làm việc, phân quyền RBAC và mã hóa mật khẩu" }
    ]
  },
  {
    title: "Cơ sở Dữ liệu & Lưu trữ",
    iconName: "database",
    description: "Mô hình hóa dữ liệu quan hệ, tối ưu truy vấn chỉ mục và quản lý lưu trữ trạng thái máy khách.",
    skills: [
      { name: "PostgreSQL", level: "Tốt", percentage: 78, description: "Cơ sở dữ liệu quan hệ, quan hệ 1-N/N-N, triggers & views" },
      { name: "MongoDB", level: "Tốt", percentage: 75, description: "Mô hình tài liệu NoSQL, aggregation pipelines, Mongoose schemas" },
      { name: "Redis", level: "Cơ bản", percentage: 65, description: "In-memory caching, quản lý key-value tốc độ cao" },
      { name: "IndexedDB / Web Storage", level: "Thành thạo", percentage: 86, description: "Lưu trữ dữ liệu ngoại tuyến bền vững và trạng thái ứng dụng" }
    ]
  },
  {
    title: "AI, Dev Tools & DevOps",
    iconName: "cpu",
    description: "Quy trình kiểm soát phiên bản tiêu chuẩn, tích hợp mô hình ngôn ngữ lớn và công cụ đóng gói hiện đại.",
    skills: [
      { name: "Gemini AI API", level: "Nâng cao", percentage: 85, highlight: true, description: "Tích hợp prompt engineering, function calling, phân tích văn bản" },
      { name: "Git & GitHub Workflow", level: "Thành thạo", percentage: 90, highlight: true, description: "Branching model, pull requests, CI/CD actions, merge conflict resolution" },
      { name: "Docker Containers", level: "Tốt", percentage: 72, description: "Dockerfile, Docker Compose, đóng gói môi trường nhất quán" },
      { name: "Vite & Bundlers", level: "Thành thạo", percentage: 88, description: "Cấu hình build tốc độ cao, HMR, code splitting, rollup optimization" },
      { name: "Linux / Bash CLI", level: "Tốt", percentage: 76, description: "Dòng lệnh shell, quản lý tiến trình, scripting tự động hóa" }
    ]
  },
  {
    title: "Kỹ năng Mềm & Phương pháp",
    iconName: "sparkles",
    description: "Kỹ năng cộng tác hiệu quả trong môi trường kỹ thuật số và định hướng phát triển bản thân.",
    skills: [
      { name: "Quy trình Agile / Scrum", level: "Tốt", percentage: 80, description: "Sprint planning, daily standup, quản lý backlog công việc" },
      { name: "Tư duy Giải quyết Vấn đề", level: "Thành thạo", percentage: 90, highlight: true, description: "Phân tích nguyên nhân cốt lõi, tư duy giải thuật và tối ưu giải pháp" },
      { name: "Thuyết trình & Báo cáo Kỹ thuật", level: "Tốt", percentage: 82, description: "Bảo vệ đồ án, trình bày tài liệu kỹ thuật rõ ràng, trực quan" },
      { name: "Tiếng Anh Chuyên ngành CNTT", level: "Tốt", percentage: 78, description: "Đọc hiểu tài liệu kỹ thuật, API specs và trao đổi chuyên môn" }
    ]
  }
];

export const CAREER_GOALS: CareerGoal[] = [
  {
    title: "Mục tiêu Ngắn hạn (Năm 2026)",
    period: "2026",
    type: "short-term",
    description: "Tập trung hoàn thiện kỹ năng thực chiến, tham gia thực tập doanh nghiệp và đóng góp vào các dự án phần mềm có tác động thực tế.",
    targets: [
      "Ứng tuyển và hoàn thành xuất sắc kỳ thực tập vị trí Frontend / Full-Stack Engineer tại công ty công nghệ chuyên nghiệp.",
      "Xây dựng và phát hành 2 dự án thực tế quy mô lớn kết hợp đồ họa tương tác 3D WebGL và tích hợp trí tuệ nhân tạo AI.",
      "Nâng cao khả năng giao tiếp tiếng Anh kỹ thuật và hoàn thành chứng chỉ ngoại ngữ quốc tế."
    ]
  },
  {
    title: "Mục tiêu Trung & Dài hạn",
    period: "2027 - 2029+",
    type: "long-term",
    description: "Định hướng trở thành Kỹ sư Phần mềm chuyên sâu về Web Graphics & Performance Engineering với năng lực kiến trúc toàn diện.",
    targets: [
      "Tốt nghiệp Cử nhân Công nghệ Thông tin tại Đại học Lạc Hồng với kết quả rèn luyện và học tập xuất sắc.",
      "Đảm nhận vai trò Kỹ sư Phần mềm (Software Engineer) chuyên sâu về Web Performance, 3D Web & Interactive Systems.",
      "Tích cực đóng góp các thư viện mã nguồn mở cho cộng đồng lập trình viên Việt Nam và quốc tế."
    ]
  }
];
