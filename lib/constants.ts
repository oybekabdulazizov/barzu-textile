import {
  machine01,
  shirts01,
  tailor01,
  textileMill,
  threads01,
} from "@/public/assets/images";

export const navItems: Array<{
  title: string;
  route: string;
  routes?: Array<{
    title: string;
    route: string;
  }>;
}> = [
  { title: "Home", route: "/" },
  {
    title: "Products",
    route: "/products",
    routes: [
      {
        title: "Male",
        route: "/products/male",
      },
      {
        title: "Female",
        route: "/products/female",
      },
      {
        title: "Kids",
        route: "/products/kids",
      },
    ],
  },
  {
    title: "About Us",
    route: "/about-us",
    routes: [
      {
        title: "Company",
        route: "/about-us#company",
      },
      {
        title: "Our Story",
        route: "/about-us#our-story",
      },
      {
        title: "Our Mission",
        route: "/about-us#our-mission",
      },
      {
        title: "Clients",
        route: "/clients",
      },
      {
        title: "Jobs",
        route: "/obs",
      },
    ],
  },
  {
    title: `Let's Work Together!`,
    route: "/contact-us",
    routes: [
      {
        title: "Director",
        route: "tel:+998917775555",
      },
      {
        title: "Sales Manager",
        route: "tel:+998888255550",
      },
      {
        title: "WhatsApp / Telegram",
        route: "tel:+998888255550",
      },
    ],
  },
];

export const heroCarouselImages = [
  {
    src: machine01,
    alt: "machine",
  },
  {
    src: shirts01,
    alt: "shirts",
  },
  {
    src: tailor01,
    alt: "tailor",
  },
  {
    src: textileMill,
    alt: "textile mill",
  },
  {
    src: threads01,
    alt: "threads",
  },
];

export const productionBriefItems = [
  {
    title: "Production",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    title: "Monitoring",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
  },
  {
    title: "Packaging",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
];
