import { FiGithub, FiMail } from 'react-icons/fi';

export const teamData = [
  {
    id: 1,
    name: 'Alvee Hossain',
    role: 'Co-Founder & CEO',
    bio: 'Frontend Developer with 2 years of experience in HTML, CSS, JavaScript, React, and Tailwind CSS. Expert in building responsive, user-friendly websites with clean UI/UX.',
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
    bio: 'Backend Developer with 2 years of experience, skilled in Node.js, Express, MongoDB, PostgreSQL, and Prisma. Focused on building secure, scalable, and high-performance web applications.',
    image: '/sami2.jpg',
    // --- পরিবর্তন: লিঙ্কডইন ও টুইটার সরানো হয়েছে ---
    social: {
      
      email: 'mailto:samiujjaman643@gmail.com', // আপনি চাইলে এখানে साहिल এর ইমেইল যোগ করতে পারেন
    },
    portfolio: 'https://samisahil.github.io/samiprofile/',
  }
];

export default teamData;