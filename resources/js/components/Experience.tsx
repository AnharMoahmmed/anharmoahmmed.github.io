import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../utils/constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 overflow-hidden">
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-24 text-center md:text-left"
      >
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          Experience <span className="text-[#00C4CC] drop-shadow-[0_0_20px_rgba(0,196,204,0.4)]">History</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-2 bg-[#00C4CC] rounded-full mt-4 mx-auto md:mx-0"
        ></motion.div>
      </motion.div>

      <div className="relative">
        {/* The Animated Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00C4CC] via-[#252D3A] to-transparent origin-top hidden sm:block"
        />

        <div className="space-y-24">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Pulsing Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 z-20 hidden sm:block">
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-4 h-4 rounded-full bg-[#00C4CC] shadow-[0_0_15px_#00C4CC]"
                />
              </div>

              <div className={`grid md:grid-cols-2 gap-8 md:gap-24 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>

                {/* Side 1: Date & Company */}
                <div className={`${idx % 2 === 0 ? 'md:order-1' : 'md:order-2 md:text-left'} pl-12 md:pl-0`}>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="inline-block px-5 py-1.5 rounded-full bg-[#00C4CC]/10 text-[#00C4CC] text-sm font-mono font-bold mb-3 border border-[#00C4CC]/20"
                  >
                    {exp.period}
                  </motion.span>
                  <h4 className="text-2xl font-bold text-gray-500 tracking-wider uppercase">{exp.company}</h4>
                </div>

                {/* Side 2: The Card */}
                <div className={`${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'} pl-12 md:pl-0`}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    className="relative bg-[#11161D]/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl group-hover:border-[#00C4CC]/40 transition-colors shadow-2xl"
                  >
                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00C4CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                    <h3 className="text-3xl font-black text-white mb-6 group-hover:text-[#00C4CC] transition-colors">
                      {exp.title}
                    </h3>

                    <ul className="space-y-4 relative z-10">
                      {exp.responsibilities.map((resp, ridx) => (
                        <motion.li
                          key={ridx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 + (ridx * 0.1) }}
                          className="flex items-start text-gray-400 leading-relaxed text-lg text-left"
                        >
                          <span className="mr-4 mt-2.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#00C4CC] group-hover:shadow-[0_0_8px_#00C4CC]"></span>
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;