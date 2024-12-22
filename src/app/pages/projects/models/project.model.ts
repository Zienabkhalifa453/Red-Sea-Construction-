export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  location: string;
  year: string;
  features: string[];
  details: {
    client: string;
    duration: string;
    value: string;
    scope: string[];
    challenge: string;
    solution: string;
    result: string;
  };
  gallery: ProjectImage[];
  specifications: {
    area: string;
    floors: string;
    sustainability: string[];
    technology: string[];
  };
}

export interface ProjectImage {
  url: string;
  caption: string;
  category: 'exterior' | 'interior' | 'construction';
}