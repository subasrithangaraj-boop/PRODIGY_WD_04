import React, { useEffect, useState } from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const footerNavs = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent border-t border-white/5 py-12 overflow-hidden">
      {/* Absolute faint grid or background light */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(192,132,252,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Quick Back-to-Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-gradient-to-br from-violet-500 to-purple-400 rounded-full text-white hover:scale-110 shadow-lg cursor-pointer hover:shadow-purple-400/30 transition-all mb-8 glow-accent-btn group"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>

        {/* Brand logo in footer */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center font-display font-bold text-white text-sm tracking-wider">
            ST
          </div>
          <span className="font-display font-black text-lg bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-400">
            Subasri T
          </span>
        </div>

        {/* Quick Nav Links Row */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8">
          {footerNavs.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(link.href.substring(1));
                if (el) {
                  window.scrollTo({
                    top: el.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Small Social line icons */}
        <div className="flex items-center gap-5 mb-8 text-gray-500">
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright notice disclaimer */}
        <div className="text-gray-500 text-xs sm:text-sm text-center font-mono space-y-1">
          <p>© {currentYear} Subasri T. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
