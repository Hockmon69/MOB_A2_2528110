export type AvailabilityStatus = 
  | 'Available for Internship' 
  | 'Open to Project Offers' 
  | 'Full-time Student' 
  | 'Busy with Coursework';

export interface ProfileData {
  fullName: string;
  headline: string;
  shortBio: string;
  primarySkill: string;
  availabilityStatus: AvailabilityStatus;
  imageUri: string | null;
  verificationCode: string;
  registrationNumber: string;
  email: string;
  github: string;
  location: string;
  institution: string;
  lastUpdated?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Mobile' | 'Programming' | 'Hardware & IoT' | 'DevOps & Systems';
  level: 'Advanced' | 'Proficient' | 'Intermediate';
  experienceYears: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  credential: string;
  period: string;
  status: string;
  location: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  studentContribution: string;
  technology: string[];
  architectureDetails: string;
  outcomes: string[];
  githubUrl?: string;
  requiresInternet: boolean;
}
