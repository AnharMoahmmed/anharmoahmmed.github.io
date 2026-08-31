import React from 'react';
import { SKILLS } from '../utils/constants';



const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#12161E]/70 backdrop-blur-md text-white overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C4CC]/5 blur-[120px] rounded-full -z-10"></div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">Technical <span className="text-[#00C4CC]">Arsenal</span></h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group px-8 py-4 bg-[#1E2430] rounded-2xl border border-[#283141] text-[#9EA8B6] font-bold hover:border-[#00C4CC] hover:text-[#00C4CC] transition-all duration-300 cursor-default hover:scale-105 shadow-lg"
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Skills;
