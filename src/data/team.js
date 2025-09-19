import { FiGithub, FiMail } from 'react-icons/fi';

export const teamData = [
  {
    id: 1,
    name: 'Alvee Hossain',
    role: 'Co-Founder & CEO',
    bio: 'I’m a Frontend Web Developer with 2 years of experience, skilled in building responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on clean UI/UX and delivering high-quality projects',
    image: '/alvee1.jpg',
    // --- পরিবর্তন: লিঙ্কডইন ও টুইটার সরানো হয়েছে, ইমেইল আপডেট করা হয়েছে ---
    social: {
      email: 'mailto:mohammadhossain042004@gmail.com',
    },
    portfolio: 'https://alveehossain.netlify.app',
  },
  {
    id: 2,
    name: 'Samiuzzaman Sahil',
    role: 'Co-Founder & CTO',
    bio: 'I’m a Backend Developer with 2 years of experience, specializing in Node.js, Express, MongoDB, PostgreSQL, and Prisma. I focus on building secure, high-performance, and reliable web applications.',
    image: '/sami2.jpg',
    // --- পরিবর্তন: লিঙ্কডইন ও টুইটার সরানো হয়েছে ---
    social: {
      
      email: '#', // আপনি চাইলে এখানে साहिल এর ইমেইল যোগ করতে পারেন
    },
    portfolio: 'https://samisahil.github.io/samiprofile/',
  }
];

export default teamData;