import React from 'react';
import { EXPERIENCES } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Experience <span className="text-[#00C4CC]">History</span></h2>
        <div className="h-px flex-1 bg-[#252D3A]"></div>
      </div>

      <div className="space-y-20">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="grid md:grid-cols-[1fr_2.5fr] gap-8">
              <div className="md:text-right">
                <span className="inline-block px-4 py-1.5 bg-[#00C4CC]/10 text-[#00C4CC] border border-[#00C4CC]/20 rounded-full text-sm font-bold mb-4">
                  {exp.period}
                </span>
                <p className="text-[#9EA8B6] font-bold tracking-wide uppercase text-xs">{exp.company}</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-white mb-6 group-hover:text-[#00C4CC] transition-colors">{exp.title}</h3>
                <ul className="space-y-5">
                  {exp.responsibilities.map((resp, ridx) => (
                    <li key={ridx} className="flex items-start text-[#9EA8B6] leading-relaxed text-lg">
                      <span className="mr-4 mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-[#00C4CC]"></span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
