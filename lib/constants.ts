import {
  machine01,
  shirts01,
  tailor01,
  textileMill,
  threads01,
} from '@/public/assets/images';

export const navItems: Array<{
  title: string;
  route: string;
  routes?: Array<{
    title: string;
    route: string;
  }>;
}> = [
  { title: 'Home', route: '/' },
  {
    title: 'Products',
    route: '/products',
    routes: [
      {
        title: 'Man',
        route: '/products/man',
      },
      {
        title: 'Woman',
        route: '/products/woman',
      },
      {
        title: 'Boy',
        route: '/products/boy',
      },
      {
        title: 'Girl',
        route: '/products/girl',
      },
    ],
  },
  {
    title: 'Company',
    route: '#header',
    routes: [
      {
        title: 'About us',
        route: '/about-us',
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
        title: 'Our Clients',
        route: '/about-us#out-clients',
      },
    ],
  },
  {
    title: `Connect With Us`,
    route: '#contact-us',
    routes: [
      {
        title: 'Director',
        route: 'tel:+998917775555',
      },
      {
        title: 'Sales Manager',
        route: 'tel:+998888255550',
      },
      {
        title: 'WhatsApp / Telegram',
        route: 'tel:+998888255550',
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

export const productionBriefItems = [
  {
    title: 'Production',
    description: `Our production process is driven by efficiency and quality. 
                  Equipped with the latest models of looms, we are able to produce 
                  high volumes of textile products with precision and speed. 
                  Our skilled workforce ensures that each product meets our rigorous standards, 
                  delivering exceptional quality to our customers.`,
  },
  {
    title: 'Monitoring',
    description: `We prioritize quality control at every stage of production. 
                  Our meticulous verification process ensures that defective products 
                  are identified and addressed promptly. By monitoring each step closely, 
                  we guarantee the delivery of flawless wholesale textile products to our customers.`,
  },
  {
    title: 'Packaging',
    description: `We understand the importance of presentation and ensure that 
                  each product is marked and packaged with utmost care, 
                  tailored to meet our customer's specific requirements. 
                  Our meticulous approach to packaging guarantees that our wholesale 
                  textile products arrive at their destination in perfect condition, ready to impress."`,
  },
];
