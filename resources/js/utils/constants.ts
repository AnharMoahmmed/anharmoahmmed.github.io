
import { Experience, Education, SkillCategory, Project } from './types';

export const PERSONAL_INFO = {
  name: "Anhar Mohammed",
  title: "Full Stack Developer",
  location: "Sana’a, Yemen",
  phone: "+967 774212285",
  email: "anharmohammed88@gmail.com",
  githubUrl: "https://github.com/AnharMoahmmed",
  linkedinUrl: "http://www.linkedin.com/in/anhar-mohammed-019705304",
  portfolioUrl: "https://anharmohammed.netlify.app/",
  cvUrl: "/Anhar-Mohammed-CV.pdf",
  objective: "Motivated and detail-oriented Full Stack Developer and Information Technology graduate with hands-on experience in Laravel, PHP, Flutter, React, JavaScript, TypeScript, and MySQL. Experienced in developing web and mobile applications, REST APIs, dashboards, database-driven systems, and UI/UX designs. Strong problem-solving and system analysis skills with a focus on writing clean, maintainable, and scalable code. Eager to contribute to a professional development team and build reliable software solutions.",
  communication: "Excellent written and verbal communication skills. Proven ability to present technical concepts to both technical and non-technical audiences. Strong interpersonal skills gained through teaching and collaborative development.",
  leadership: "Led the design and development of a community-driven mobile application. Worked with small teams and managed timelines, user requirements, and iterative updates in agile environments."
};

export const PROJECTS: Project[] = [
  {
    title: "Pet Care App",
    description: "Mobile application for comprehensive pet care management. Features pet profiles, vaccination records, appointment scheduling, veterinary services, automated reminders, and complete pet history tracking.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API"],
    type: "Mobile App",
    link: "https://github.com/AnharMoahmmed/pet_care_app.git"
  },
  {
    title: "Law Office Management System",
    description: "System analysis, workflow design, and ERD data modeling for legal practice management. Covers actors, use cases, role-based access control, lawyer-client tracking, court cases, hearings, contracts, documents, payments, and audit logs.",
    technologies: ["Oracle APEX", "SQL", "PL/SQL", "System Analysis", "ERD"],
    type: "System Analysis"
  },
  {
    title: "Knowledge Share App",
    description: "A community-driven mobile platform for sharing educational resources and expertise among students and professionals. Features include resource categorization, user profiles, and real-time updates.",
    technologies: ["Flutter", "Dart", "Firebase", "Figma"],
    type: "Mobile App",
    link: "https://github.com/AnharMoahmmed"
  },
  {
    title: "Digital Wallet UI Design",
    description: "A high-fidelity prototype of a modern financial wallet application. Focused on intuitive user flows for transactions, balance tracking, and security settings.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    type: "UI/UX Design"
  },
  {
    title: "ERP System Analysis for GOSI",
    description: "Detailed analysis and data modeling for integrated pension management systems. Involved process mapping, requirement gathering, and architectural planning for social insurance modules.",
    technologies: ["System Analysis", "ERP", "Data Modeling", "SQL"],
    type: "System Analysis"
  },
  {
    title: "Laravel Backend & Web Applications",
    description: "Robust administrative web applications & dashboards featuring user authentication, role-based access control, database management, and dynamic RESTful API services.",
    technologies: ["Laravel", "PHP", "MySQL", "React", "TypeScript", "REST API"],
    type: "Web App",
    link: "https://github.com/AnharMoahmmed"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Doing Company",
    location: "Sana’a, Yemen",
    period: "August 2025 – Present",
    responsibilities: [
      "Developed and maintained web applications using Laravel, PHP, MySQL, and modern frontend technologies.",
      "Built and integrated RESTful APIs, authentication systems, dashboards, and backend services.",
      "Worked on multiple software projects, contributing to both frontend and backend development.",
      "Developed and maintained Flutter mobile application modules, implementing UI, business logic, and API integration.",
      "Designed and implemented responsive user interfaces based on Figma designs.",
      "Worked with databases, including database structure, relationships, queries, and data management.",
      "Used Git and GitHub for version control and collaborative development.",
      "Participated in debugging, testing, troubleshooting, and improving application performance."
    ]
  },
  {
    title: "Training – Mobile & Web Development",
    company: "Doing Company",
    location: "Sana’a, Yemen",
    period: "August 2025 – November 2025",
    responsibilities: [
      "Completed hands-on training in Flutter and Laravel development.",
      "Worked on multiple backend projects using Laravel, including authentication, APIs, and dashboard features.",
      "Contributed to several Flutter app modules, focusing on UI implementation and app logic.",
      "Designed a complete wallet application UI in Figma, including layout, components, and user flow."
    ]
  },
  {
    title: "Application Developer – Knowledge Share App",
    company: "Freelance",
    location: "Sana’a, Yemen",
    period: "2024 – Present",
    responsibilities: [
      "Developed and maintained a knowledge-share mobile application using Flutter.",
      "Designed UI/UX mockups and high-fidelity prototypes using Figma, implemented core app functionalities, and collaborated with users for feedback-based improvements."
    ]
  },
  {
    title: "System Analyst - ERP Systems",
    company: "General Organization for Social Insurance and Pensions",
    location: "Sana’a, Yemen",
    period: "2024 – 2025",
    responsibilities: [
      "Analyzed business requirements and helped design integrated ERP solutions.",
      "Participated in data modeling and functional process analysis."
    ]
  },
  {
    title: "English Teacher",
    company: "Private Tutoring",
    location: "Sana’a, Yemen",
    period: "2021 – 2022",
    responsibilities: [
      "Delivered customized English language lessons for school and centers students.",
      "Developed creative learning strategies to improve student outcomes."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. in Information Technology",
    institution: "Sana’a University",
    location: "Sana’a, Yemen",
    period: "Expected 2025"
  },
  {
    degree: "High Diploma in English",
    institution: "CTLT",
    location: "Sana’a, Yemen",
    period: "2020 – 2021"
  },
  {
    degree: "TOEFL Certification",
    institution: "CTLT",
    location: "Sana’a, Yemen",
    period: "2020 – 2021"
  },
  {
    degree: "High School Graduate",
    institution: "Salem Al-Sabah School",
    location: "Sana’a, Yemen",
    period: "2019"
  }
];

// export const SKILLS: Skill[] = [
//   { name: "Laravel", category: "Web" },
//   { name: "PHP", category: "Web" },
//   { name: "Flutter", category: "Mobile" },
//   { name: "React", category: "Web" },
//   { name: "JavaScript", category: "Web" },
//   { name: "TypeScript", category: "Web" },
//   { name: "MySQL", category: "Web" },
//   { name: "REST APIs", category: "Web" },
//   { name: "Figma", category: "Design" },
//   { name: "UI/UX Design", category: "Design" },
//   { name: "System Analysis", category: "Other" },
//   { name: "Data Modeling", category: "Other" },
//   { name: "Git & GitHub", category: "Other" }
// ];


export const SKILLS: SkillCategory[] = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Mobile",
      items: ["Flutter", "Dart", "GetX", "REST API Integration"]
    },
    {
      category: "Backend",
      items: ["Laravel", "PHP", "REST APIs", "Laravel Sanctum"]
    },
    {
      category: "Database",
      items: ["MySQL", "Eloquent ORM", "Data Modeling"]
    },
    {
      category: "Design",
      items: ["Figma", "UI/UX", "Prototyping", "Responsive Design"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code"]
    },
    {
      category: "Engineering",
      items: ["System Analysis", "Software Architecture", "Feature-First Architecture", "Debugging"]
    }
  ];
