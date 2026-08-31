import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20 relative overflow-visible">

      {/* Floating Animated Doodles */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-12 text-[#00C4CC]/20 hidden lg:block pointer-events-none"
      >
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 -right-12 text-[#00C4CC]/20 hidden lg:block pointer-events-none"
      >
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </motion.div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#161B22]/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-20 shadow-2xl border border-white/5 relative overflow-hidden group"
      >
        {/* Animated Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00C4CC]/50 to-transparent opacity-30"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
            About <span className="text-[#00C4CC] drop-shadow-[0_0_15px_#00C4CC44]">me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1.5 bg-[#00C4CC] rounded-full hidden md:block"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 leading-relaxed font-medium mb-16 relative"
        >
          <span className="text-5xl font-serif text-[#00C4CC] absolute -top-8 -left-4 opacity-20">"</span>
          {PERSONAL_INFO.objective}
          <span className="text-5xl font-serif text-[#00C4CC] absolute -bottom-12 -right-4 opacity-20">"</span>
        </motion.p>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-[#1E2430]/40 border border-white/5 hover:border-[#00C4CC]/30 transition-all shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
               <div className="w-2 h-2 rounded-full bg-[#00C4CC] shadow-[0_0_8px_#00C4CC]"></div>
               <h3 className="text-xs font-black text-[#00C4CC] uppercase tracking-[0.3em]">Communication</h3>
            </div>
            <p className="text-gray-300 font-medium leading-relaxed">{PERSONAL_INFO.communication}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl bg-[#1E2430]/40 border border-white/5 hover:border-[#00C4CC]/30 transition-all shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
               <div className="w-2 h-2 rounded-full bg-[#00C4CC] shadow-[0_0_8px_#00C4CC]"></div>
               <h3 className="text-xs font-black text-[#00C4CC] uppercase tracking-[0.3em]">Leadership</h3>
            </div>
            <p className="text-gray-300 font-medium leading-relaxed">{PERSONAL_INFO.leadership}</p>
          </motion.div>
        </div>

        {/* Subtle Background Glow Inside Card */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00C4CC]/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#00C4CC]/10 transition-colors" />
      </motion.div>
    </section>
  );
};

export default About;