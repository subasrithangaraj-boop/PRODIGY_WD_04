import React, { useEffect, useState } from 'react';
import { Award, BookOpen, GraduationCap, Zap, Sparkles, Binary, CheckCircle2, FileSliders } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, statsData } from '../data/portfolioData';

// Single counter component that counts up to the target value
function Counter({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    // Run every stepTime
    const totalMiliseconds = duration * 1000;
    const stepTime = 16; 
    const totalSteps = totalMiliseconds / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function About() {
  const [activeSegment, setActiveSegment] = useState<'mission' | 'method' | 'focus'>('mission');

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background radial atmosphere */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[8%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[110px] pointer-events-none"></div>

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
              Identity Matrix
            </span>
          </motion.div>
          <motion.h2 
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
              My Profile
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

        {/* Premium Bento Grid Structure - Radically Different Template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Item 1: Massive interactive feature card (Column Span 7) */}
          <motion.div 
            className="lg:col-span-7 rounded-3xl border border-white/5 bg-white/[0.01] p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/20 hover:bg-white/[0.02] transition-all duration-300 relative group overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              {/* Card Title details */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Binary className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">Philosophy & Perspective</h3>
                  <p className="text-[10px] text-gray-500 font-mono tracking-wider uppercase">HOW I BUILD AND DELIVER</p>
                </div>
              </div>

              {/* Segment Toggles */}
              <div className="flex border-b border-white/5 mb-6">
                {([
                  { id: 'mission', label: 'My Goal' },
                  { id: 'method', label: 'My Approach' },
                  { id: 'focus', label: 'Key Focus' }
                ] as const).map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSegment(tab.id)}
                    className={`pb-2 px-3 text-xs font-mono font-bold uppercase transition-colors relative ${
                      activeSegment === tab.id ? 'text-indigo-400' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tab.label}
                    {activeSegment === tab.id && (
                      <motion.div 
                        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-indigo-500"
                        layoutId="activeTabIndicator"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Dynamic toggling details content */}
              <div className="min-h-[130px] text-gray-300 text-sm sm:text-base leading-relaxed space-y-4">
                {activeSegment === 'mission' && (
                  <p>
                    I am <strong className="text-white">{personalInfo.name}</strong>, pursuing Computer Science and Engineering at <strong className="text-white">{personalInfo.college}</strong>. My ultimate goal is to connect premium UI engineering standards with modular algorithms to craft fast, responsive, and secure native web frameworks.
                  </p>
                )}
                {activeSegment === 'method' && (
                  <p>
                    I believe in pristine spacing, intentional typography pairings, and avoiding boilerplates. By breaking down functional logic into modular, type-safe modules, I build web solutions that scale gracefully on both mobile interfaces and heavy desktop workspaces.
                  </p>
                )}
                {activeSegment === 'focus' && (
                  <p>
                    Currently optimizing state updates, learning framework rendering optimizations, and mastering core Data Structures. I maintain high consistency in my coursework, aligning core conceptual learning with hands-on labs.
                  </p>
                )}
              </div>
            </div>

            {/* Bottom interactive signpost */}
            <div className="flex items-center gap-2 mt-6 pt-6 border-t border-white/5 text-xs font-mono text-gray-500 uppercase">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>ACTIVE STATUS: IN SECOND YEAR AT {personalInfo.college.toUpperCase()}</span>
            </div>
          </motion.div>

          {/* Bento Item 2: Quick Metrics Hub (Column Span 5) */}
          <motion.div 
            className="lg:col-span-5 rounded-3xl border border-white/5 bg-gradient-to-b from-[#090724]/40 to-transparent p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/20 transition-all duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#818cf8]">SYSTEM TELEMETRY</span>
                <FileSliders className="w-4 h-4 text-gray-500" />
              </div>

              {/* Attributes items */}
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-xs text-gray-400 font-mono">ENROLLMENT STATUS</span>
                  <span className="text-xs font-bold text-white uppercase">{personalInfo.year}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5 border-dashed">
                  <span className="text-xs text-gray-400 font-mono font-medium">CONCENTRATION</span>
                  <span className="text-xs font-bold text-white text-right">Computer Science & Eng.</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-xs text-gray-400 font-mono">PRIMARY DOMAIN</span>
                  <span className="text-xs font-bold text-indigo-400 font-mono">REACT_WEB_DEVELOPER</span>
                </div>
              </div>
            </div>

            {/* Graphic card with glowing indicator */}
            <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-3.5 items-center">
              <div className="relative flex shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping absolute"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
              </div>
              <div className="text-left">
                <p className="text-[9px] font-mono tracking-wider text-gray-400 uppercase">Interactive Motivation</p>
                <p className="text-xs text-gray-200 mt-0.5 leading-relaxed italic">
                  "Translating modern abstract design constraints into high-level clean react views."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 3: Statistics Dashboard Row (Full Screen Column Span 12) */}
          <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-5 rounded-2xl border border-white/5 bg-gradient-to-tr from-white/[0.01] to-transparent hover:border-indigo-500/10 hover:bg-white/[0.03] transition-all duration-300 relative group overflow-hidden"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex items-baseline gap-0.5">
                  <span className="text-2xl sm:text-3xl font-display font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-400">
                    <Counter target={stat.value} />
                  </span>
                  <span className="text-lg font-bold text-purple-400">{stat.suffix}</span>
                </div>
                <p className="text-[11px] text-gray-400 font-medium font-sans mt-1.5 group-hover:text-white transition-colors uppercase tracking-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
