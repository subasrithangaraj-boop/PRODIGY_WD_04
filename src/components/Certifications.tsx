import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Bookmark, ExternalLink, Library, Calendar, CheckSquare } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

// Select premium icon representation for academic certificates
const iconByCertificate: Record<string, React.ReactNode> = {
  'Full Stack Web Development Masterclass': <Award className="w-5 h-5 text-indigo-400" />,
  'Frontend Developer with React & Redux': <ShieldCheck className="w-5 h-5 text-indigo-400" />,
  'Python Programming Specialist': <Bookmark className="w-5 h-5 text-indigo-400" />,
  'UI/UX Design Essentials and Wireframing': <Library className="w-5 h-5 text-indigo-400" />
};

export default function Certifications() {
  const handleVerify = (title: string) => {
    alert(`Verification Access:\n\nConnecting to secure credentials authority platform to verify: "${title}".`);
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background cyber glows */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
              Verified Achievements
            </span>
          </motion.div>
          <motion.h2 
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Credentials{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
              & Awards
            </span>
          </motion.h2>
          <motion.div 
            className="h-1 w-12 bg-violet-500 mx-auto rounded-full mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Elegant Timeline List Layout Template */}
        <div className="space-y-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group p-5 rounded-2xl border border-white/5 bg-[#05031a]/80 hover:bg-[#070524] hover:border-indigo-500/20 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {/* Left visual information */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all duration-300">
                  {iconByCertificate[cert.title] || <Award className="w-5 h-5 text-indigo-400" />}
                </div>

                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-indigo-400 uppercase tracking-wider font-bold">
                    <CheckSquare className="w-3.5 h-3.5 text-indigo-400" />
                    {cert.badge}
                  </span>
                  
                  <h3 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 flex-wrap text-xs text-gray-400 font-sans">
                    <span className="font-medium text-gray-300">{cert.issuer}</span>
                    <span className="text-gray-600 font-mono">•</span>
                    <span className="font-mono text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-indigo-500/60" /> {cert.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right verification action button */}
              <div className="shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/5 flex justify-end">
                <button
                  onClick={() => handleVerify(cert.title)}
                  className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-indigo-600 hover:text-white text-xs font-bold text-gray-300 transition-all cursor-pointer flex items-center gap-2 border border-white/5 hover:border-indigo-500"
                >
                  Verify Credential
                  <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
