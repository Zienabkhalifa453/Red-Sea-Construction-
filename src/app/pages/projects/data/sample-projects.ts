import { Project } from '../models/project.model';

export const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Office Complex',
    description: 'State-of-the-art office building with sustainable features',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    location: 'Dubai',
    year: '2023',
    features: [
      'LEED Certified',
      'Smart Building Technology',
      'Renewable Energy Systems',
      'Green Spaces'
    ],
    details: {
      client: 'Dubai Business Group',
      duration: '24 months',
      value: '$120 million',
      scope: [
        'Design and Construction',
        'Interior Fit-out',
        'Landscape Development',
        'Smart Systems Integration'
      ],
      challenge: 'Integrating sustainable technologies while maintaining aesthetic appeal',
      solution: 'Innovative design combining solar panels with architectural elements',
      result: 'LEED Platinum certification and 40% energy cost reduction'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
        caption: 'Building Exterior - Main View',
        category: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
        caption: 'Main Lobby',
        category: 'interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        caption: 'Office Space',
        category: 'interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
        caption: 'Construction Phase',
        category: 'construction'
      },
      {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd',
        caption: 'Rooftop Garden',
        category: 'exterior'
      }
    ],
    specifications: {
      area: '50,000 sqm',
      floors: '30',
      sustainability: [
        'Solar Panels',
        'Rainwater Harvesting',
        'Green Building Materials'
      ],
      technology: [
        'Smart Building Management',
        'IoT Sensors',
        'Automated Climate Control'
      ]
    }
  },
  {
    id: '2',
    title: 'Luxury Residential Tower',
    description: 'Premium residential complex with world-class amenities',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    location: 'Jeddah',
    year: '2023',
    features: [
      'Smart Home Integration',
      'Private Beach Access',
      'Infinity Pool',
      'Concierge Service'
    ],
    details: {
      client: 'Royal Living Developments',
      duration: '36 months',
      value: '$200 million',
      scope: [
        'Architecture and Design',
        'Construction Management',
        'Interior Design',
        'Amenities Development'
      ],
      challenge: 'Creating luxury living spaces while maximizing ocean views',
      solution: 'Innovative floor plans and floor-to-ceiling windows',
      result: 'Sold out within 6 months of launch'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
        caption: 'Tower Exterior',
        category: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd',
        caption: 'Luxury Apartment Interior',
        category: 'interior'
      },
      {
        url: 'https://images.unsplash.com/photo-1515263487990-61b07816b324',
        caption: 'Infinity Pool',
        category: 'exterior'
      },
      {
        url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7',
        caption: 'Construction Progress',
        category: 'construction'
      }
    ],
    specifications: {
      area: '75,000 sqm',
      floors: '45',
      sustainability: [
        'Energy-Efficient Design',
        'Smart Water Management',
        'Sustainable Materials'
      ],
      technology: [
        'Smart Home Automation',
        'Biometric Access',
        'High-Speed Elevators'
      ]
    }
  }
  // Add more sample projects as needed
];