import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Trophy, Star, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background glowing bubbles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase bg-purple-400/10 px-3.5 py-1.5 rounded-full border border-purple-400/20">
              Academic Background
            </span>
          </motion.div>
          <motion.h2 
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
              Education
            </span>
          </motion.h2>
          <motion.div 
            className="h-1.5 w-16 bg-gradient-to-r from-violet-500 to-purple-400 mx-auto rounded-full mt-5"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 timeline-line rounded-full transform md:-translate-x-1/2 opacity-75"></div>

          {/* Timeline Items */}
          {educationData.map((item, index) => (
            <div key={item.institution} className="relative flex flex-col md:flex-row items-stretch justify-between mb-12 last:mb-0">
              
              {/* Left hand space on desktop */}
              <div className="w-full md:w-[45%] md:pr-12 md:text-right hidden md:flex flex-col justify-center items-end">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className="space-y-1"
                >
                  <span className="text-lg font-display font-bold text-violet-400">{item.period}</span>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-mono">Academic Term</p>
                </motion.div>
              </div>

              {/* Central Glowing Icon Node */}
              <div className="absolute md:relative left-[5px] md:left-auto md:mx-auto w-8 h-8 rounded-full bg-[#030018] border-2 border-purple-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(192,132,252,0.6)]">
                <GraduationCap className="w-4 h-4 text-purple-400" />
              </div>

              {/* Right column detailed card */}
              <div className="w-full md:w-[45%] pl-10 md:pl-0 md:flex">
                <motion.div
                  className="w-full p-6 sm:p-8 rounded-3xl glassmorphism border border-white/5 bg-gradient-to-tr from-white/[0.01] to-[#0d0a27]/30 hover:border-purple-400/20 shadow-xl transition-all duration-300 relative group"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Mobiles display of period */}
                  <div className="flex md:hidden items-center gap-2 mb-3.5 text-violet-400 font-mono text-sm font-semibold">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>

                  {/* Header Title details */}
                  <div className="flex items-start gap-4 justify-between border-b border-white/5 pb-4 mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-violet-300 transition-colors">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-semibold text-purple-400 font-display mt-1">
                        {item.degree}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 italic">
                        {item.status}
                      </p>
                    </div>
                  </div>

                  {/* Academic Grades if present */}
                  {item.grade && (
                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-green-500/5 border border-green-500/15 text-green-400 text-xs font-mono font-bold mb-5 shadow-sm">
                      <Star className="w-4 h-4 fill-green-500 text-green-500 animate-pulse" />
                      {item.grade}
                    </div>
                  )}

                  {/* Key achievements */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                      Achievements & Highlights
                    </h4>
                    <ul className="space-y-2.5">
                      {item.achievements.map((ach) => (
                        <li key={ach} className="text-gray-300 text-xs sm:text-sm font-sans flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4.5 h-4.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
