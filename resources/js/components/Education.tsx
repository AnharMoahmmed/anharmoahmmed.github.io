import React from 'react';
import { EDUCATION } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#12161E]/70 backdrop-blur-md px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Academic <span className="text-[#00C4CC]">Background</span></h2>
          <div className="h-1.5 w-24 bg-[#00C4CC] rounded-full mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-[#1E2430] p-10 rounded-[2.5rem] shadow-xl border border-[#283141] hover:border-[#00C4CC]/30 transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#00C4CC] rounded-2xl flex items-center justify-center text-[#171C24] mb-6 shadow-lg shadow-[#00C4CC]/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.848l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.848l-7-3zM14 11.595l-3.394 1.455a3 3 0 01-2.606 0L4.606 11.595 10 14.122l5.394-2.527zM16.455 15.606l-6.455 2.582L3.545 15.606 3 13.606l7 3.5 7-3.5-.545 2z"/></svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2 leading-tight">{edu.degree}</h3>
              <p className="text-[#00C4CC] font-bold text-sm uppercase tracking-widest mb-4">{edu.period}</p>
              <div className="space-y-1">
                 <p className="text-[#9EA8B6] font-bold">{edu.institution}</p>
                 <p className="text-slate-500 text-sm font-medium">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
