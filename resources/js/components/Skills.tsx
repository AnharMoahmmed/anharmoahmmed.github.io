import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../utils/constants';

const Skills: React.FC = () => {
  // Animation for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Animation for each category card
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-[#0B0F17]/30 backdrop-blur-md text-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C4CC]/5 blur-[140px] rounded-full -z-10"></div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
            Technical <span className="text-[#00C4CC] drop-shadow-[0_0_15px_rgba(0,196,204,0.4)]">Arsenal</span>
          </h2>
          <div className="h-1.5 w-20 bg-[#00C4CC] rounded-full mt-4 mx-auto"></div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SKILLS.map((group, idx) => (
            <motion.div
              key={group.category}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-[#161B22]/50 border border-white/5 p-8 rounded-[2rem] hover:border-[#00C4CC]/30 transition-all shadow-xl group"
            >
              <h3 className="text-[#00C4CC] font-mono text-sm font-bold tracking-[0.2em] uppercase mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-[#00C4CC]/30 mr-3"></span>
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 196, 204, 0.15)" }}
                    className="px-4 py-2 bg-[#1E2430] rounded-xl border border-[#283141] text-[#9EA8B6] text-sm font-bold hover:text-[#00C4CC] hover:border-[#00C4CC]/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;