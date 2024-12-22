import { Award, Certification } from '../types';

export const COMPANY_AWARDS: Award[] = [
  {
    year: 2023,
    title: 'Excellence in Sustainable Construction',
    description: 'Recognized for implementing innovative sustainable practices in construction projects',
    awardedBy: 'Middle East Construction Awards'
  },
  {
    year: 2022,
    title: 'Best Commercial Project',
    description: 'Award for the outstanding design and execution of the Red Sea Business Center',
    awardedBy: 'Saudi Construction Excellence Awards'
  },
  {
    year: 2021,
    title: 'Safety Achievement Award',
    description: 'Recognition for maintaining exceptional safety standards across all projects',
    awardedBy: 'Construction Safety Council'
  }
];

export const COMPANY_CERTIFICATIONS: Certification[] = [
  {
    name: 'ISO 9001:2015',
    validUntil: '2025'
  },
  {
    name: 'ISO 14001:2015',
    validUntil: '2024'
  },
  {
    name: 'OHSAS 18001',
    validUntil: '2024'
  },
  {
    name: 'LEED Certification',
    validUntil: '2025'
  }
];