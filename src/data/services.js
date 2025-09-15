import { 
  FiCode, 
  FiLayout, 
  FiDatabase
} from 'react-icons/fi';

export const servicesData = [
  {
    id: 1,
    icon: FiCode,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.',
    features: [
      'React & Next.js Development',
      'Responsive Design',
      'API Integration',
      'Performance Optimization'
    ],
    price: 'Starting at $5,000'
  },
  {
    id: 2,
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that combine aesthetics with functionality to create intuitive digital experiences.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Design Systems'
    ],
    price: 'Starting at $3,000'
  },
  {
    id: 3,
    icon: FiDatabase,
    title: 'Database Management',
    description: 'Database design, optimization, and management for efficient data storage and retrieval.',
    features: [
      'Database Design',
      'Query Optimization',
      'Data Migration',
      'Backup & Recovery'
    ],
    price: 'Starting at $3,500'
  }
];

export default servicesData;