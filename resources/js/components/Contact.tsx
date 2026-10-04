import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';

const Contact: React.FC = () => {
  // Animation for the cards popping in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const contactItems = [
    {
      label: "Direct Mail",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      label: "Call Me",
      value: PERSONAL_INFO.phone,
      href: `tel:${PERSONAL_INFO.phone}`,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      )
    },
    {
      label: "Professional Network",
      value: "LinkedIn Profile",
      href: PERSONAL_INFO.linkedinUrl,
      isExternal: true,
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      )
    },
    {
      label: "Code Repository",
      value: "GitHub Profile",
      href: PERSONAL_INFO.githubUrl,
      isExternal: true,
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center scroll-mt-20 relative overflow-hidden">

      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C4CC]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-8xl font-black text-white mb-16 tracking-tighter leading-none">
          Let's build something <br/>
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-[#00C4CC] italic drop-shadow-[0_0_30px_rgba(0,196,204,0.3)]"
          >
            impactful.
          </motion.span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10"
      >
        {contactItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target={item.isExternal ? "_blank" : undefined}
            rel={item.isExternal ? "noopener noreferrer" : undefined}
            // variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group p-8 bg-[#161B22]/80 backdrop-blur-xl rounded-[2.5rem] border border-white/5 hover:border-[#00C4CC]/50 transition-colors shadow-2xl block"
          >
            <div className="w-16 h-16 bg-[#00C4CC]/10 text-[#00C4CC] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#00C4CC] group-hover:text-[#0B0F17] transition-all duration-300 shadow-[0_0_20px_rgba(0,196,204,0)] group-hover:shadow-[0_0_20px_#00C4CC]">
              {item.icon}
            </div>

            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-3">
              {item.label}
            </p>

            <p className="text-lg text-white font-bold group-hover:text-[#00C4CC] transition-colors break-words line-clamp-1">
              {item.value}
            </p>

            {/* Subtle bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00C4CC]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </motion.div>

      {/* Modern Footer Visual */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '200px' }}
        className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mx-auto mt-20"
      />
    </section>
  );
};

export default Contact;