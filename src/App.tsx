import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-transparent min-h-screen text-gray-100 flex flex-col selection:bg-[#8b5cf6] selection:text-white">
      {/* Premium background gradient layout mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Two prominent blurred floating circles */}
        <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/15 blur-[130px] animate-float-blue"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[650px] h-[650px] rounded-full bg-[#c084fc]/12 blur-[130px] animate-float-pink"></div>
        
        {/* Extra glowing accents to blend them beautifully */}
        <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full bg-[#8b5cf6]/8 blur-[120px] animate-glow-slow-1"></div>
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#c084fc]/8 blur-[120px] animate-glow-slow-2"></div>

        {/* Scattered elegant tiny shining stars/points */}
        <div className="absolute top-[12%] left-[8%] w-1.5 h-1.5 bg-[#8b5cf6] rounded-full animate-pulse shadow-[0_0_10px_#8b5cf6] opacity-60"></div>
        <div className="absolute top-[25%] right-[15%] w-1 h-1 bg-[#c084fc] rounded-full animate-pulse shadow-[0_0_8px_#c084fc] opacity-50" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-[45%] left-[22%] w-1 h-1 bg-[#8b5cf6] rounded-full animate-pulse shadow-[0_0_8px_#8b5cf6] opacity-50" style={{ animationDelay: '2.5s', animationDuration: '4s' }}></div>
        <div className="absolute top-[65%] right-[28%] w-1.5 h-1.5 bg-[#c084fc] rounded-full animate-pulse shadow-[0_0_12px_#c084fc] opacity-70" style={{ animationDelay: '1.2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-[18%] left-[12%] w-1 h-1 bg-[#8b5cf6] rounded-full animate-pulse shadow-[0_0_8px_#8b5cf6] opacity-60" style={{ animationDelay: '0.8s', animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-[30%] right-[8%] w-1.5 h-1.5 bg-[#c084fc] rounded-full animate-pulse shadow-[0_0_10px_#c084fc] opacity-50" style={{ animationDelay: '1.8s', animationDuration: '4.5s' }}></div>
        <div className="absolute bottom-[8%] left-[45%] w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_6px_#ffffff] opacity-40" style={{ animationDelay: '3.2s', animationDuration: '3.8s' }}></div>
      </div>

      {/* Transparent Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow z-10 relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />
    </div>
  );
}
