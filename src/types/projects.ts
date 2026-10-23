export interface Technology {
  id: string;
  name: string;
  url: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  architecture: string[];
  security: string[];
  repository?: string;
  video?: string;
  status: string;
}
