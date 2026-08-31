import React from 'react';
import { PERSONAL_INFO } from '../utils/constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-20 relative">
      {/* Hand-drawn style decorative doodle SVGs */}
      <div className="absolute top-12 left-4 text-[#00C4CC]/30 hidden sm:block pointer-events-none">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </div>
      <div className="absolute top-20 right-6 text-[#00C4CC]/30 hidden sm:block pointer-events-none">
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>

      <div className="bg-[#1E2430] rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-[#283141] relative overflow-hidden">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="text-[#00C4CC]">me</span>
          </h2>
          <div className="h-px flex-1 bg-[#283141] rounded-full"></div>
        </div>
        <p className="text-xl text-[#9EA8B6] leading-relaxed mb-10 font-medium italic">
          "{PERSONAL_INFO.objective}"
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="p-6 rounded-2xl bg-[#171C24] border border-[#252D3A]">
            <h3 className="text-xs font-extrabold text-[#00C4CC] uppercase tracking-[0.2em] mb-4">Communication</h3>
            <p className="text-[#E5E7EB] font-medium leading-relaxed opacity-90">{PERSONAL_INFO.communication}</p>
          </div>
          <div className="p-6 rounded-2xl bg-[#171C24] border border-[#252D3A]">
            <h3 className="text-xs font-extrabold text-[#00C4CC] uppercase tracking-[0.2em] mb-4">Leadership</h3>
            <p className="text-[#E5E7EB] font-medium leading-relaxed opacity-90">{PERSONAL_INFO.leadership}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
