import {
    FiBox, FiStar, FiSettings, FiPackage, FiZap,
    FiShield, FiLifeBuoy, FiServer, FiCloud, FiCode
  } from 'react-icons/fi';
  
  export const pricingData = [
    {
      tier: 'Basic',
      icon: FiBox,
      price: '$1,500',
      description: 'Ideal for startups and small businesses seeking a professional and effective online presence.',
      features: [
        { icon: FiPackage, text: 'Up to 5 Pages' },
        { icon: FiCode, text: 'Responsive & Mobile-Friendly Design' },
        { icon: FiZap, text: 'Basic SEO Setup' },
        { icon: FiLifeBuoy, text: 'Standard Email Support' },
      ],
      buttonText: 'Get Started',
      featured: false,
      link: '#contact'
    },
    {
      tier: 'Premium',
      icon: FiStar,
      price: '$4,500',
      description: 'Perfect for growing businesses that require more features, scalability, and performance.',
      features: [
        { icon: FiPackage, text: 'Up to 15 Pages' },
        { icon: FiZap, text: 'Advanced Performance Optimization' },
        { icon: FiServer, text: 'CMS Integration (e.g., WordPress)' },
        { icon: FiShield, text: 'Advanced Security Features' },
        { icon: FiLifeBuoy, text: 'Priority Support (Phone & Email)' },
      ],
      buttonText: 'Choose Premium',
      featured: true,
      link: '#contact'
    },
    {
      tier: 'Custom',
      icon: FiSettings,
      price: "Let's Talk",
      description: 'Tailored solutions for enterprises with specific and complex project requirements.',
      features: [
        { icon: FiPackage, text: 'Unlimited Pages & Features' },
        { icon: FiCloud, text: 'Cloud & Custom API Integration' },
        { icon: FiCode, text: 'Custom Application Development' },
        { icon: FiShield, text: 'Enterprise-Grade Security' },
        { icon: FiLifeBuoy, text: 'Dedicated Project Manager' },
      ],
      buttonText: 'Contact Us',
      featured: false,
      link: '#contact'
    },
  ];