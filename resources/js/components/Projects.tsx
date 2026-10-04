import React from 'react';
import { PROJECTS } from '../utils/constants';

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string; // Placeholder for project image
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, techStack, imageUrl, liveUrl, repoUrl }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-slate-700 text-sm px-3 py-1 rounded-full text-white">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 font-semibold transition-colors duration-300"
            >
              GitHub
            </a>
          )}
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
          <div key={idx} className="group bg-[#1E2430] rounded-[2.5rem] p-8 md:p-10 border border-[#283141] shadow-xl hover:shadow-[#00C4CC]/5 hover:border-[#00C4CC]/50 transition-all duration-500 hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <span className="px-4 py-1.5 bg-[#00C4CC]/10 text-[#00C4CC] border border-[#00C4CC]/20 rounded-full text-xs font-extrabold uppercase tracking-widest">
                {project.type}
              </span>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#9EA8B6] hover:text-[#00C4CC] transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              )}
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-[#00C4CC] transition-colors">{project.title}</h3>
            <p className="text-[#9EA8B6] leading-relaxed mb-8 text-lg">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-[#171C24] text-[#9EA8B6] rounded-lg text-xs font-bold border border-[#252D3A]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

  );
};

export default Projects;
