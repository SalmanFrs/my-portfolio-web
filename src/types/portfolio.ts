export type AccentColor = 'primary' | 'secondary' | 'neutral';

export interface TechTag {
  name: string;
  highlight?: boolean;
  colorVariant?: AccentColor;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: TechTag[];
  colSpan?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagLabel: string;
  pipelineFile: string;
  pipelineTag: string;
  visualType: 'wave' | 'terminal' | 'bbox';
  description: string;
  techStack: TechTag[];
  liveDemoUrl?: string;
  githubUrl?: string;
  image?: string;
  images?: string[];
  isPrivate?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  bullets: string[];
  accentColor: AccentColor;
}

export interface CertificationItem {
  id: string;
  issuer: string;
  name: string;
  issuedYear: string;
  accentColor: 'primary' | 'secondary';
}

export interface StrengthItem {
  title: string;
  desc: string;
  icon: string;
  accentColor: 'primary' | 'secondary';
}

export interface AboutSpec {
  label: string;
  value: string;
}

export interface PortfolioData {
  profile: {
    initials: string;
    fullName: string;
    degree: string;
    headline: string;
    titleTag: string;
    university: string;
    graduationYear: string;
    location: string;
    openToRoles: boolean;
    bio: string;
    gpa?: string;
    ipk?: string;
    workPreference: string;
    avatarUrl: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    cvUrl: string;
  };
  skills: SkillCategory[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  certifications: CertificationItem[];
  about: {
    heading: string;
    paragraphs: string[];
    specs: AboutSpec[];
    strengths: StrengthItem[];
  };
}
