export interface InformationProps {
  name: string;
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  markdown?: string;
  imgSrc?: string;
}

export interface WorkExperienceProps {
  id: number;
  name: string;
  description?: string;
  position: string;
  period: string[];
  markdown?: string;
  imgSrc?: string;
}

export interface TeachingExperienceProps {
  id: number;
  name: string;
  lecture: string;
  position: string;
  period: string[];
  markdown?: string;
  imgSrc?: string;
}

export interface ProfessionalSocietiesProps {
  id: number;
  review: string[];
  membership: string[];
}

export interface PublicationsProps {
  id: number;
  name: string;
  abstract: string;
  repoUrl: string;
  webUrl?: string;
  author: string;
  conference: string;
  stack: string[];
  markdown?: string;
  imgSrc?: string;
}

export interface MusicProps {
  id: number;
  name: string;
  date: string;
  organizer: string;
  description: string;
  stack: string[];
}

export interface DataProps {
  resumeTitle: {
    title: string;
  };
  information: InformationProps;
  publications: PublicationsProps[];
  workExperience: WorkExperienceProps[];
  teachingExperience: TeachingExperienceProps[];
  professionalSocieties: ProfessionalSocietiesProps;
  activity: {
    id: number;
    name: string;
    description: string;
    period: string[];
  }[];
  education: {
    id: number;
    name: string;
    description?: string;
    period: string[];
    thesis?: string;
    researchArea?: string;
  }[];
  certificate: {
    id: number;
    name: string;
    date: string;
    organizer: string;
  }[];
  music: MusicProps[];
}
