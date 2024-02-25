import machine01 from '../public/images/machine01.jpg';
import shirts01 from '../public/images/shirts01.jpg';
import tailor01 from '../public/images/tailor01.jpg';
import textileMill from '../public/images/textile-mill.jpg';
import threads01 from '../public/images/threads01.jpg';
import couple01 from '../public/images/couple01.jpg';

export { couple01 };

export const navItems: Array<{
  title: string;
  route: string;
  subItems?: Array<{
    title: string;
    route: string;
  }>;
}> = [
  {
    title: 'Home',
    route: '/',
  },
  {
    title: 'Our Products',
    route: '/products',
    subItems: [
      {
        title: 'Male',
        route: '/products/male',
      },
      {
        title: 'Female',
        route: '/products/female',
      },
      {
        title: 'Kids',
        route: '/products/kids',
      },
    ],
  },
  {
    title: 'About Us',
    route: '/about-us',
    subItems: [
      {
        title: 'Company',
        route: '/about-us#company',
      },
      {
        title: 'Our Story',
        route: '/about-us#our-story',
      },
      {
        title: 'Our Mission',
        route: '/about-us#our-mission',
      },
      {
        title: 'Clients',
        route: '/clients',
      },
      {
        title: 'Jobs',
        route: '/obs',
      },
    ],
  },
  {
    title: `Let's Work Together!`,
    route: '/lets-work-together',
    subItems: [
      {
        title: 'Contact Us',
        route: '/contact-us',
      },
    ],
  },
];

export const heroCarouselImages = [
  {
    src: machine01,
    alt: 'machine',
  },
  {
    src: shirts01,
    alt: 'shirts',
  },
  {
    src: tailor01,
    alt: 'tailor',
  },
  {
    src: textileMill,
    alt: 'textile mill',
  },
  {
    src: threads01,
    alt: 'threads',
  },
];
