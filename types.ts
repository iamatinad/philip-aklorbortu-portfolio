export interface PersonalInfo {
  name: string;
  tagline: string;
  about: string;
  address: string;
  phones: string[];
  email: string;
  linkedin: string;
  github: string;
  interests: string[];
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  description: string[];
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  points: string[];
  isVolunteer?: boolean;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}