import profileImage from '../assets/images/profile_placeholder_1781766142440.jpg'
import { Skill, Project, Certification, EducationItem, StatItem } from '../types';

export const personalInfo = {
  name: 'Subasri T',
  title: 'Web Developer',
  degree: 'B.E Computer Science and Engineering',
  college: 'Nandha College of Technology',
  year: '2nd Year Student',
  avatarUrl: profileImage,
  summary: 'I am a passionate Computer Science and Engineering student with a strong interest in Web Development and Software Development. I enjoy learning new technologies, building innovative projects, and improving my programming skills. I am enthusiastic about creating user-friendly and responsive web applications while continuously expanding my technical knowledge.',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    email: 'mailto:subasri@example.com' // Mock or generic for portfolio
  }
};

export const statsData: StatItem[] = [
  { label: 'Projects Completed', value: 4, suffix: '+' },
  { label: 'Technologies Learned', value: 12, suffix: '+' },
  { label: 'Certifications Earned', value: 6, suffix: '' },
  { label: 'Academic Achievements', value: 3, suffix: '' }
];

export const skillsData: Skill[] = [
  // Programming Languages
  { name: 'C', category: 'programming', percentage: 85 },
  { name: 'Java', category: 'programming', percentage: 80 },
  { name: 'Python', category: 'programming', percentage: 75 },
  { name: 'JavaScript', category: 'programming', percentage: 90 },
  // Web Development
  { name: 'HTML5', category: 'web-dev', percentage: 95 },
  { name: 'CSS3', category: 'web-dev', percentage: 90 },
  { name: 'React.js', category: 'web-dev', percentage: 85 },
  { name: 'Tailwind CSS', category: 'web-dev', percentage: 92 }
];

export const projectsData: Project[] = [
  {
    title: 'Responsive Landing Page',
    description: 'An interactive, fully responsive landing page featuring modern scroll-triggered animations, premium typography, and a glassmorphic floating navigation menu.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web Design'
  },
  {
    title: 'Stopwatch Web Application',
    description: 'A precise, high-performance stopwatch web app packed with features such as lap time recording, smooth pause/play transitions, and persistent storage.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Web App'
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'An immersive digital adaptation of Tic-Tac-Toe featuring real-time local state management, smart win-condition heuristics, clean audio feedback, and score tracking.',
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Game Dev'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A premium, custom-designed portfolio showcasing modern aesthetics, custom canvas/animation background, high-contrast typography, and contact capabilities.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'Portfolio'
  }
];

export const certificationsData: Certification[] = [
  {
    title: 'Full Stack Web Development Masterclass',
    issuer: 'Udemy Academic Platform',
    date: 'Dec 2025',
    badge: 'Online Course Certification'
  },
  {
    title: 'Frontend Developer with React & Redux',
    issuer: 'Coursera (Meta Professional)',
    date: 'Oct 2025',
    badge: 'Web Development Certification'
  },
  {
    title: 'Python Programming Specialist',
    issuer: 'Infosys Springboard Foundation',
    date: 'Aug 2025',
    badge: 'Online Course Certification'
  },
  {
    title: 'UI/UX Design Essentials and Wireframing',
    issuer: 'NPTEL SWAYAM Online Portal',
    date: 'Feb 2025',
    badge: 'Web Development Certification'
  }
];

export const educationData: EducationItem[] = [
  {
    institution: 'Nandha College of Technology',
    degree: 'B.E. Computer Science and Engineering',
    status: '2nd Year Student (Ongoing)',
    period: '2024 - 2028',
    achievements: [
      'Top 5% of class in academic performance',
      'Active Member of the Computer Science Student Association',
      'Won Second Prize in the Inter-Collegiate Web Design Hackathon 2025',
      'Maintained consistent high grades across core theoretical and hands-on laboratory subjects'
    ],
    grade: 'CGPA: 8.95 / 10.0 (Current)'
  }
];
