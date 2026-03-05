export interface Period {
  start: string;
  end: string | 'current';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: Period;
  description: string[];
  link?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  period: Period;
  advisor?: string;
}

export type MaterialType = 'pdf' | 'poster' | 'video' | 'slides' | 'demo';

export interface Material {
  type: MaterialType;
  url: string;
  visible: boolean;
}

export interface Research {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  thumbnail?: string;
  materials: Material[];
}
