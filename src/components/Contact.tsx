import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background cyber meshes */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[8%] w-[350px] h-[350px] bg-purple-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2 
            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-400">
              Information
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

        {/* Info & Intro */}
        <motion.div 
          className="max-w-3xl mx-auto mb-12 text-center row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Let's Build Something Awesome Together
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Whether you have an internship option, a full-time opportunity, or want to build a cool website, feel free to get in touch. I am open to discussing new engineering projects and collaborations!
          </p>
        </motion.div>

        {/* Dynamic centered cards for Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left max-w-5xl mx-auto">
          {/* Direct Email Card */}
          <motion.div
            className="p-6 rounded-2xl glassmorphism border border-white/5 bg-white/[0.01] hover:border-blue-500/20 hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400">Direct Email</p>
              <a href="mailto:subasri@example.com" className="text-sm sm:text-base font-semibold text-white hover:text-violet-300 transition-colors font-display break-all">
                subasri@example.com
              </a>
            </div>
          </motion.div>

          {/* Call/Phone Card */}
          <motion.div
            className="p-6 rounded-2xl glassmorphism border border-white/5 bg-white/[0.01] hover:border-purple-400/20 hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400">Call/Phone</p>
              <p className="text-sm sm:text-base font-semibold text-white font-display">
                +91 93452 xxxxx
              </p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            className="p-6 rounded-2xl glassmorphism border border-white/5 bg-white/[0.01] hover:border-purple-400/20 hover:bg-white/[0.03] transition-all duration-300 flex items-center gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-wider uppercase text-gray-400">Location</p>
              <p className="text-sm sm:text-base font-semibold text-white font-display">
                Erode, Tamil Nadu, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Premium Social Links Row */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400">Connect Socially</span>
          <div className="flex items-center justify-center gap-4">
            
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-purple-500 border border-white/10 hover:border-transparent text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group relative"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 border border-white/10 text-[9px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
            </a>

            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-violet-500 hover:to-purple-400 border border-white/10 hover:border-transparent text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group relative"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 border border-white/10 text-[9px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>

            <a 
              href={personalInfo.socials.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-600 border border-white/10 hover:border-transparent text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group relative"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 border border-white/10 text-[9px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
            </a>

            <a 
              href={personalInfo.socials.twitter} 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-violet-500 hover:to-purple-400 border border-white/10 hover:border-transparent text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group relative"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-5 h-5" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 border border-white/10 text-[9px] font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
