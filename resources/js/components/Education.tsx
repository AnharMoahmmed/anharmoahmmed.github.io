import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '../utils/constants';

const Education: React.FC = () => {
  // Animation variants for the container (staggering children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card appearing
      },
    },
  };

  // Animation variants for individual cards
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="education" className="py-24 bg-[#0B0F17]/50 backdrop-blur-md px-4 sm:px-6 lg:px-8 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Academic <span className="text-[#00C4CC] drop-shadow-[0_0_15px_rgba(0,196,204,0.3)]">Background</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-2 bg-[#00C4CC] rounded-full mt-4"
          />
        </motion.div>

        {/* Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
            //   variants={itemVariants}
              whileHover={{
                y: -15,
                rotateZ: idx % 2 === 0 ? 1 : -1, // Slight organic tilt
                transition: { duration: 0.2 }
              }}
              className="group relative bg-[#161B22]/60 p-8 rounded-[2rem] border border-white/5 hover:border-[#00C4CC]/50 transition-colors shadow-2xl overflow-hidden"
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00C4CC]/10 rounded-full blur-3xl group-hover:bg-[#00C4CC]/20 transition-all" />

              {/* Icon Animation */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
                className="w-14 h-14 bg-[#00C4CC] rounded-2xl flex items-center justify-center text-[#0B0F17] mb-8 shadow-[0_0_20px_rgba(0,196,204,0.3)] group-hover:shadow-[#00C4CC]/50 transition-all"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.848l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.848l-7-3zM14 11.595l-3.394 1.455a3 3 0 01-2.606 0L4.606 11.595 10 14.122l5.394-2.527zM16.455 15.606l-6.455 2.582L3.545 15.606 3 13.606l7 3.5 7-3.5-.545 2z"/>
                </svg>
              </motion.div>

              <h3 className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-[#00C4CC] transition-colors">
                {edu.degree}
              </h3>

              <div className="inline-block px-3 py-1 rounded-md bg-white/5 text-[#00C4CC] font-mono text-xs font-bold mb-6 border border-white/5">
                {edu.period}
              </div>

              <div className="space-y-2 relative z-10">
                 <p className="text-gray-300 font-bold text-lg">{edu.institution}</p>
                 <div className="flex items-center text-gray-500 text-sm font-medium">
                    <span className="w-1 h-1 bg-gray-600 rounded-full mr-2"></span>
                    {edu.location}
                 </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent to-[#00C4CC]/10 group-hover:to-[#00C4CC]/20 rounded-tl-3xl transition-all" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;