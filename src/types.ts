export interface Project {
  id: number;
  title: string;
  category: 'Architecture' | 'Interior' | 'Landscape' | 'Specialized';
  subCategory: string;
  image: string;
  description: string;
  details: {
    location?: string;
    year?: string;
    area?: string;
    scope?: string;
  };
}

export interface Service {
  title: string;
  description: string;
  category: 'Core Design' | 'Technical Engineering' | 'Consulting & Docs';
  details: string[];
}

export interface SoftwareTool {
  name: string;
  category: 'production' | 'rendering' | 'hardware';
  level: string; // e.g., "Expert", "Proficient"
}
