import React from 'react';
import { PERSONAL_INFO } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <header id="home" className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00C4CC]/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

        {/* Available Badge */}
        <div className="inline-block px-5 py-2 mb-8 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#00C4CC] uppercase bg-[#171C24]/90 border border-[#00C4CC]/30 rounded-full shadow-lg backdrop-blur-md">
          Available for Opportunities
        </div>

        {/* Main Name Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight mb-4 leading-[1.05]">
          {PERSONAL_INFO.name.split(' ')[0]}{' '}
          <span className="text-[#00C4CC]">{PERSONAL_INFO.name.split(' ')[1]}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-[#9EA8B6] max-w-2xl mx-auto font-medium tracking-wide mb-12">
          {PERSONAL_INFO.title}
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {/* Hire Me Button */}
          <a
            href="#contact"
            className="px-8 py-3.5 bg-[#00C4CC] text-[#171C24] font-black text-base rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,196,204,0.4)] hover:bg-[#1AD1D9] hover:shadow-[0_15px_30px_-5px_rgba(0,196,204,0.6)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Hire Me
          </a>

          {/* Download CV Button */}
          <a
            href={PERSONAL_INFO.cvUrl}
            className="px-7 py-3.5 bg-[#1E2430] text-white border border-[#283141] font-bold text-base rounded-2xl hover:bg-[#252D3A] hover:border-[#00C4CC]/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2.5 shadow-md"
            download
          >
            <div className="p-1 rounded-md border border-[#9EA8B6]/40 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-3-3m3 3l3-3M4 17v1a2 2 0 002 2h12a2 2 0 002-2v-1" />
              </svg>
            </div>
            <span>Download CV</span>
          </a>

          {/* View Projects Button */}
          <a
            href="#projects"
            className="px-8 py-3.5 bg-transparent text-[#00C4CC] border border-[#00C4CC]/40 font-bold text-base rounded-2xl hover:bg-[#00C4CC]/10 hover:border-[#00C4CC] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
