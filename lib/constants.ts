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
      {
        title: 'Contacts',
        route: '/contact',
      },
    ],
  },
  {
    title: `Let's Work Together!`,
    route: '/lets-work-together',
  },
];
