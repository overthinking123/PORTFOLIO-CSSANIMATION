export interface UserProfile {
  fullName: string;
  birthYear: string;
  university: string;
  major: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  avatarUrl: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterCategory: '3d' | 'fullstack' | 'ai';
  role: string;
  problemSolved: string;
  description: string;
  keyFeatures: string[];
  tags: string[];
  image: string;
  fallbackGradient: string;
  githubUrl: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface AchievementItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  type: 'award' | 'work' | 'certificate' | 'community';
  highlight?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  status: string;
  score?: string;
  description: string;
  courses: string[];
  achievements: string[];
}

export interface SkillItem {
  name: string;
  level: 'Thành thạo' | 'Tốt' | 'Nâng cao' | 'Cơ bản';
  percentage: number;
  highlight?: boolean;
  description?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface CareerGoal {
  title: string;
  period: string;
  type: 'short-term' | 'long-term';
  description: string;
  targets: string[];
}
