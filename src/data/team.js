// src/data/team.js

import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export const teamData = [
  {
    id: 1,
    name: 'Alvee Hossain',
    role: 'Co-Founder & CEO', // আপনার রোল CEO তে পরিবর্তন করা হয়েছে
    bio: 'Full-stack developer with 8+ years of experience in building scalable web applications and cloud infrastructure.',
    image: '/alvee1.jpg',
    social: {
      github: 'https://github.com/AlveeHossain45',
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
    // --- নতুন লাইন যোগ করা হয়েছে ---
    portfolio: 'https://alveehossain.netlify.app',
  },
  {
    id: 2,
    name: 'Samiuzzaman Sahil',
    role: 'Co-Founder & CTO', // আপনার বন্ধুর রোল CTO তে পরিবর্তন করা হয়েছে
    bio: 'Product strategist and UX expert with a passion for creating digital experiences that users love.',
    image: '/sami2.jpg',
    social: {
      github: 'https://github.com/SamiSahil',
      linkedin: '#',
      twitter: '#',
      email: '#',
    },
    // --- নতুন লাইন যোগ করা হয়েছে ---
    portfolio: 'https://samisahil.github.io/samiprofile/',
  }
];

export default teamData;