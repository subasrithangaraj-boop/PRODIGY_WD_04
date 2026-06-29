import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code2, FolderGit2, Info, Laptop, LayoutGrid, ListFilter } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  const handleDemoClick = (title: string) => {
    alert(`Demo Activation:\n\nLaunching standard Live Demo for project "${title}".\nIn production, this opens the project hosted on Netlify, Vercel, or custom domains.`);
  };

  const handleGithubClick = (title: string) => {
    alert(`Repository Activation:\n\nOpening public GitHub code repository for project "${title}".`);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background gradients */}
      <div className="absolute top-[30%] left-[2%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[2%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
              Creative Lab
            </span>
          </motion.div>
          <motion.h2 
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
              Engineering
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

        {/* Categories selector pills */}
        <div className="flex justify-center items-center gap-2.5 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                  : 'bg-white/[0.01] border border-white/5 hover:border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Alternating modern visual rows layout style - different template */}
        <div className="space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.65, delay: index * 0.05 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Left or Right Floating Visual block / Interactive blueprint card */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                    <div className="relative rounded-[24px] overflow-hidden border border-white/5 bg-gradient-to-br from-[#0c0830] to-[#030113] p-6 text-left shadow-2xl h-[240px] flex flex-col justify-between group-hover:border-indigo-500/20 transition-all duration-300">
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-full blur-2xl"></div>
                      
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <Laptop className="w-4 h-4 text-indigo-400" />
                          <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300">BLUEPRINT SOURCE</span>
                        </div>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">ACTIVE ENV</span>
                      </div>

                      {/* Display visual schematic mapping */}
                      <div className="font-mono text-[10px] sm:text-xs text-indigo-400/70 p-3 bg-black/40 rounded-xl space-y-1 border border-white/5 overflow-hidden select-none">
                        <p><span className="text-yellow-400">class</span> {project.title.replace(/\s+/g, '')}Component &#123;</p>
                        <p className="pl-4">static category = <span className="text-purple-300">"{project.category}"</span>;</p>
                        <p className="pl-4">constructor() &#123; super( <span className="text-green-300">render();</span> ) &#125;</p>
                        <p>&#125;</p>
                      </div>

                      <div className="flex justify-between items-center text-xs font-mono text-gray-500 mt-2">
                        <span>EST. YEAR_2026 // BUILD</span>
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Left or Right Text metadata information column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} text-left space-y-5`}>
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase">
                      {project.category}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-gray-400 group-hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons row */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      <button
                        onClick={() => handleGithubClick(project.title)}
                        className="py-2.5 px-5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer group/btn"
                      >
                        <Github className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-white" />
                        Repository Code
                      </button>

                      <button
                        onClick={() => handleDemoClick(project.title)}
                        className="py-2.5 px-5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                        Live Demo
                      </button>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom micro graphic log */}
        <div className="mt-20 flex justify-center items-center gap-2 text-xs text-gray-500 font-mono">
          <Info className="w-3.5 h-3.5 text-indigo-400" />
          <span>Catalog blueprint is simulation-enabled. All code repositories match mock configurations.</span>
        </div>

      </div>
    </section>
  );
}
