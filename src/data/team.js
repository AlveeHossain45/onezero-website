import { FiGithub, FiMail } from 'react-icons/fi';

export const teamData = [
  {
    id: 1,
    name: 'Alvee Hossain',
    role: 'Co-Founder & CEO',
    bio: 'Full-stack developer with 8+ years of experience in building scalable web applications and cloud infrastructure.',
    image: '/alvee1.jpg',
    // --- পরিবর্তন: লিঙ্কডইন ও টুইটার সরানো হয়েছে, ইমেইল আপডেট করা হয়েছে ---
    social: {
      github: 'https://github.com/AlveeHossain45',
      email: 'mailto:mohammadhossain042004@gmail.com',
    },
    portfolio: 'https://alveehossain.netlify.app',
  },
  {
    id: 2,
    name: 'Samiuzzaman Sahil',
    role: 'Co-Founder & CTO',
    bio: 'Product strategist and UX expert with a passion for creating digital experiences that users love.',
    image: '/sami2.jpg',
    // --- পরিবর্তন: লিঙ্কডইন ও টুইটার সরানো হয়েছে ---
    social: {
      github: 'https://github.com/SamiSahil',
      email: '#', // আপনি চাইলে এখানে साहिल এর ইমেইল যোগ করতে পারেন
    },
    portfolio: 'https://samisahil.github.io/samiprofile/',
  }
];

export default teamData;