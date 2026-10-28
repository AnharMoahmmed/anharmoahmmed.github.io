import React from 'react';
import { PROJECTS } from '../utils/constants';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[]; // تم تعديلها لتطابق اسم الحقل في الـ constants
  image?: string;         // تم تعديله ليطابق الـ image في ملف الـ constants
  link?: string;
  type: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, technologies, image, link, type }) => {
  return (
    <div className="group bg-[#1E2430] rounded-[2.5rem] overflow-hidden border border-[#283141] shadow-xl hover:shadow-[#00C4CC]/5 hover:border-[#00C4CC]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col">
      {/* عرض صورة المشروع إذا كانت متوفرة */}
      {image && (
        <div className="w-full h-52 overflow-hidden relative border-b border-[#283141]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      <div className="p-8 md:p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <span className="px-4 py-1.5 bg-[#00C4CC]/10 text-[#00C4CC] border border-[#00C4CC]/20 rounded-full text-xs font-extrabold uppercase tracking-widest">
            {type}
          </span>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9EA8B6] hover:text-[#00C4CC] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          )}
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-[#00C4CC] transition-colors">{title}</h3>
        <p className="text-[#9EA8B6] leading-relaxed mb-8 text-lg flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-[#171C24] text-[#9EA8B6] rounded-lg text-xs font-bold border border-[#252D3A]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">My <span className="text-[#00C4CC]">Projects</span></h2>
        <div className="h-1.5 w-24 bg-[#00C4CC] rounded-full mt-4"></div>
        <p className="text-[#9EA8B6] mt-6 max-w-2xl text-lg">Blending technical complexity with intuitive design.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
            type={project.type}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;