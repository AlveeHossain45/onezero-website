import { FiGithub, FiMail } from 'react-icons/fi';

export const teamData = [
  {
    id: 1,
    name: 'Alvee Hossain',
    role: 'Co-Founder & CEO',
    bio: 'Frontend-focused Web Developer with 2 years of experience in building responsive websites and programming expertise.',
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
    bio: 'Turning ideas into powerful web applications with 2 years of backend expertise.',
    image: '/sami2.jpg',
    // --- পরিবর্তন: লিঙ্কডইন ও টুইটার সরানো হয়েছে ---
    social: {
      
      email: '#', // আপনি চাইলে এখানে साहिल এর ইমেইল যোগ করতে পারেন
    },
    portfolio: 'https://samisahil.github.io/samiprofile/',
  }
];

export default teamData;