export interface Technology {
  id: string;
  name: string;
  url: string;
  icon?: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  summary: string;
  icon?: string;
  paragraphs?: string[];
  items?: string[];
  image?: string;
  imageAlt?: string;
  code?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  status: string;

  sections: ProjectSection[];

  repository?: string;
  video?: string;
}