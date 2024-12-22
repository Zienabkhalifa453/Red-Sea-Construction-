import { NavLink } from '../types';

export const MAIN_NAVIGATION: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export const ABOUT_NAVIGATION: NavLink[] = [
  { path: '/about', label: 'Overview' },
  { path: '/about/history', label: 'History' },
  { path: '/about/awards', label: 'Awards' },
  { path: '/about/vision', label: 'Vision' }
];