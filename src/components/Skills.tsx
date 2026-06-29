import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map technology names to official high-quality, recognizable SVG logo images
const skillLogosMap: Record<string, string> = {
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'web-dev'>('all');
  
  const filteredSkills = skillsData.filter(s => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 right-[5%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[8%] w-80 h-80 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-[#818cf8] uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
              Expertise Repository
            </span>
          </motion.div>
          <motion.h2 
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Capabilities{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
              & Stack
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

        {/* Categories Selector Navigation Block */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {(['all', 'programming', 'web-dev'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-lg border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'border-indigo-500 bg-indigo-500/10 text-white shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                  : 'border-white/5 bg-white/[0.01] text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {cat === 'all' ? 'All Skills' : cat === 'programming' ? 'Core Languages' : 'Web Engineering'}
            </button>
          ))}
        </div>

        {/* Command Center Layout Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const imageUrl = skillLogosMap[skill.name];
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 rounded-2xl border border-white/5 bg-[#05031b]/90 hover:border-indigo-500/25 hover:bg-[#070524] transition-all duration-300 flex flex-col items-center justify-center text-center group overflow-hidden shadow-lg cursor-default"
                >
                  {/* Outer glowing slot for technology logo */}
                  <div className="w-20 h-20 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-300 shadow-inner p-4 relative">
                    {/* Glow backdrop behind logo */}
                    <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/5 rounded-2xl blur-md transition-all duration-300 pointer-events-none"></div>
                    
                    {imageUrl ? (
                      <img 
                        src={imageUrl} 
                        alt={`${skill.name} logo`} 
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-350 select-none pointer-events-none"
                      />
                    ) : (
                      <Code className="w-10 h-10 text-indigo-400" />
                    )}
                  </div>

                  {/* Technology Label Metadata */}
                  <h3 className="font-display font-bold text-white text-base sm:text-lg tracking-wide group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h3>
                  
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mt-1.5 group-hover:text-gray-400 transition-colors">
                    {skill.category === 'programming' ? 'Language' : 'Tech Stack'}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
