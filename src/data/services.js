import { 
  FiCode, 
  FiSmartphone, 
  FiLayout, 
  FiShield, 
  FiCloud, 
  FiCpu, 
  FiDatabase, 
  FiBriefcase 
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
    icon: FiSmartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.',
    features: [
      'iOS & Android Development',
      'React Native & Flutter',
      'App Store Deployment',
      'Push Notifications'
    ],
    price: 'Starting at $8,000'
  },
  {
    id: 3,
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
    id: 4,
    icon: FiShield,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security assessments and implementations to protect your digital assets from threats.',
    features: [
      'Security Audits',
      'Vulnerability Testing',
      'Encryption Implementation',
      'Security Monitoring'
    ],
    price: 'Starting at $4,000'
  },
  {
    id: 5,
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, migration, and DevOps practices to ensure scalability and reliability.',
    features: [
      'AWS/Azure/GCP Setup',
      'CI/CD Pipelines',
      'Containerization',
      'Infrastructure as Code'
    ],
    price: 'Starting at $6,000'
  },
  {
    id: 6,
    icon: FiCpu,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions leveraging artificial intelligence and machine learning to solve complex problems.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics'
    ],
    price: 'Starting at $10,000'
  },
  {
    id: 7,
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
  },
  {
    id: 8,
    icon: FiBriefcase,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to help businesses make informed decisions about their digital transformation.',
    features: [
      'Technology Strategy',
      'System Architecture',
      'Digital Transformation',
      'Technical Due Diligence'
    ],
    price: '$150/hour'
  }
];

export default servicesData;