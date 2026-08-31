
export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
  }

  export interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
  }

//   export interface Skill {
//     name: string;
//     category: 'Mobile' | 'Web' | 'Design' | 'Other';
//   }

  export interface SkillCategory {
    category: string;
    items: string[];
  }

  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    type: 'Mobile App' | 'Web App' | 'UI/UX Design' | 'System Analysis';
  }
