import React, { useState } from 'react';
import { ArrowRight, Code, Terminal, Sparkles, Cpu, Layout, FileText, Send, ArrowDown, Laptop, MonitorSmartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [consoleTab, setConsoleTab] = useState<'bio' | 'stack' | 'interests'>('bio');

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    alert(`Resume download simulation initiated for ${personalInfo.name}.\nPortfolio Resume details:\n\nDegree: B.E. Computer Science and Engineering\nCollege: Nandha College of Technology`);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-0 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      {/* Background cyber lattices */}
      <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
      <div className="absolute top-10 right-20 w-[450px] h-[450px] bg-gradient-to-br from-violet-500/10 to-purple-400/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-violet-500/10 to-purple-400/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Decorative cyber grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      {/* Modern Asymmetric Bento Hub Grid Layout */}
      <div className="relative max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Bold High-Impact Editorial & Typing Panel */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-8 text-left">
          
          <div className="space-y-4">


            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-title font-extrabold tracking-tight text-white leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Engineering the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
                Next-Gen Web
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hi, I'm <strong className="text-white font-semibold font-display">{personalInfo.name}</strong>. A passionate browser creator crafting modular user experiences, high-fidelity responsive apps, and elegant code structures.
            </motion.p>
          </div>

          {/* Interactive Shell Terminal Panel */}
          <motion.div 
            className="w-full rounded-2xl border border-white/5 bg-[#05031b]/80 shadow-[0_0_25px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-xs sm:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Terminal Window Header */}
            <div className="bg-[#0c0830] px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                <span className="text-gray-400 text-[10px] sm:text-xs ml-2">guest-terminal@subasri-t</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                <Laptop className="w-3.5 h-3.5" /> Live Console
              </div>
            </div>

            {/* Terminal Tab Switchers */}
            <div className="flex border-b border-white/5 bg-[#080524]/60">
              {(['bio', 'stack', 'interests'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setConsoleTab(tab)}
                  className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors border-r border-white/5 ${
                    consoleTab === tab 
                      ? 'text-blue-400 bg-[#05031b] border-t border-t-blue-500' 
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab}.sh
                </button>
              ))}
            </div>

            {/* Terminal Content Panel */}
            <div className="p-4 sm:p-5 min-h-[140px] text-gray-300 leading-relaxed font-mono">
              <AnimatePresence mode="wait">
                {consoleTab === 'bio' && (
                  <motion.div
                    key="bio"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 text-left"
                  >
                    <p className="text-blue-400"># About Me</p>
                    <p><span className="text-yellow-400">const</span> student = <span className="text-purple-400">"Subasri T"</span>;</p>
                    <p><span className="text-yellow-400">const</span> college = <span className="text-purple-400">"Nandha College of Technology"</span>;</p>
                    <p><span className="text-yellow-400">const</span> currentFocus = <span className="text-green-400">"Clean UI Engineering & Algorithmic Problem Solving"</span>;</p>
                  </motion.div>
                )}

                {consoleTab === 'stack' && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 text-left"
                  >
                    <p className="text-indigo-400"># Technologies Stack</p>
                    <p><span className="text-purple-400">Languages:</span> C, Java, Python, JavaScript</p>
                    <p><span className="text-purple-400">Web Dev:</span> React.js, Tailwind CSS, HTML5, CSS3</p>
                    <p><span className="text-purple-400">Core Concepts:</span> Data Structures, Responsive UI, OOPs</p>
                  </motion.div>
                )}

                {consoleTab === 'interests' && (
                  <motion.div
                    key="interests"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 text-left"
                  >
                    <p className="text-purple-400"># Technical Hobbies</p>
                    <p>⚡ Building fast modern visual frameworks</p>
                    <p>🧩 Participating in hacking, coding arrays challenges</p>
                    <p>🎨 Developing micro interactions with high visual design fidelity</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Call to Actions bar */}
          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 rounded-lg font-semibold text-xs bg-indigo-600 hover:bg-indigo-500 text-white flex items-center gap-2 cursor-pointer transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              Initiate Contact <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-6 py-3 rounded-lg font-semibold text-xs border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white flex items-center gap-2 cursor-pointer transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" /> Download Resume
            </button>

            <button
              onClick={() => handleScrollTo('projects')}
              className="px-5 py-3 text-xs hover:text-blue-300 text-gray-400 font-semibold cursor-pointer transition-all"
            >
              Browse Selected Works
            </button>
          </motion.div>
        </div>

        {/* Right Column: Premium High-Tech Layered Asymmetric Showcase */}
        <div className="lg:col-span-6 flex items-center justify-center relative">
          <motion.div
            className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-[32px] overflow-hidden p-1.5 bg-gradient-to-br from-violet-500/20 via-indigo-500/10 to-purple-400/20 border border-white/5 shadow-2xl group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Corner brackets simulating futuristic alignment HUD */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-indigo-500/40 rounded-tl-md"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-indigo-500/40 rounded-tr-md"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-indigo-500/40 rounded-bl-md"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-indigo-500/40 rounded-br-md"></div>

            {/* Inner background grid card context */}
            <div className="w-full h-full rounded-[26px] bg-[#030113]/90 p-5 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
              
              {/* Header simulation bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <MonitorSmartphone className="w-4 h-4 text-indigo-400" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300">Identity Box // Frame</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-mono text-green-400 animate-pulse">
                  AVAILABLE // INTERNSHIPS
                </div>
              </div>

              {/* Centered Premium Portrait Frame styled differently (elegant, rounded-2xl high-tech block) */}
              <div className="my-5 relative flex justify-center items-center">
                <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-violet-500 to-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <img 
                    src={personalInfo.avatarUrl} 
                    alt={personalInfo.name} 
                    referrerPolicy="no-referrer"
                    className="w-56 h-56 sm:w-64 sm:h-64 rounded-xl object-cover hover:scale-[1.02] transition-transform duration-500 relative z-10"
                  />
                </div>
              </div>

              {/* Bottom detail statistics telemetry widget */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">CURRENT ENROLLMENT</p>
                  <p className="text-xs font-semibold text-white mt-0.5">{personalInfo.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">LOCATION</p>
                  <p className="text-xs font-semibold text-indigo-300 mt-0.5">Erode, TN, IN</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Down arrow link pointer */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => handleScrollTo('about')}
      >
        <span className="text-[10px] font-mono font-semibold tracking-wider text-gray-400">PROCEED_ABOUT</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-indigo-400" />
        </motion.div>
      </div>
    </section>
  );
}
