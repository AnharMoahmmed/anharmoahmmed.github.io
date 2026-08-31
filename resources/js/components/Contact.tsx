import React from 'react';
import { PERSONAL_INFO } from '../utils/constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center scroll-mt-20">
    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 tracking-tight leading-[1.1]">
      Let's build something <br/>
      <span className="text-[#00C4CC] italic">impactful.</span>
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <a href={`mailto:${PERSONAL_INFO.email}`} className="group p-8 bg-[#1E2430] rounded-[2rem] border border-[#283141] hover:border-[#00C4CC] transition-all shadow-2xl hover:-translate-y-2">
        <div className="w-14 h-14 bg-[#00C4CC]/10 text-[#00C4CC] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        </div>
        <p className="text-xs font-extrabold text-[#9EA8B6]/70 uppercase tracking-[0.2em] mb-2">Direct Mail</p>
        <p className="text-lg text-white font-extrabold group-hover:text-[#00C4CC] transition-colors overflow-hidden text-ellipsis">{PERSONAL_INFO.email}</p>
      </a>
      <a href={`tel:${PERSONAL_INFO.phone}`} className="group p-8 bg-[#1E2430] rounded-[2rem] border border-[#283141] hover:border-[#00C4CC] transition-all shadow-2xl hover:-translate-y-2">
        <div className="w-14 h-14 bg-[#00C4CC]/10 text-[#00C4CC] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </div>
        <p className="text-xs font-extrabold text-[#9EA8B6]/70 uppercase tracking-[0.2em] mb-2">Call Me</p>
        <p className="text-lg text-white font-extrabold group-hover:text-[#00C4CC] transition-colors">{PERSONAL_INFO.phone}</p>
      </a>
      <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="group p-8 bg-[#1E2430] rounded-[2rem] border border-[#283141] hover:border-[#00C4CC] transition-all shadow-2xl hover:-translate-y-2">
        <div className="w-14 h-14 bg-[#00C4CC]/10 text-[#00C4CC] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
        </div>
        <p className="text-xs font-extrabold text-[#9EA8B6]/70 uppercase tracking-[0.2em] mb-2">Professional Network</p>
        <p className="text-lg text-white font-extrabold group-hover:text-[#00C4CC] transition-colors">LinkedIn Profile</p>
      </a>
      <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="group p-8 bg-[#1E2430] rounded-[2rem] border border-[#283141] hover:border-[#00C4CC] transition-all shadow-2xl hover:-translate-y-2">
        <div className="w-14 h-14 bg-[#00C4CC]/10 text-[#00C4CC] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </div>
        <p className="text-xs font-extrabold text-[#9EA8B6]/70 uppercase tracking-[0.2em] mb-2">Code Repository</p>
        <p className="text-lg text-white font-extrabold group-hover:text-[#00C4CC] transition-colors">GitHub Profile</p>
      </a>
    </div>
  </section>
  );
};

export default Contact;
