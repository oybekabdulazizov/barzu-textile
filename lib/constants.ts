import {
  boy01,
  woman01,
  girl01,
  machine01,
  man01,
  shirts01,
  tailor01,
  textileMill,
  threads01,
} from "@/public/assets/images";
import { StaticImageData } from "next/image";

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
        title: "Man",
        route: "/products/man",
      },
      {
        title: "Woman",
        route: "/products/woman",
      },
      {
        title: "Boy",
        route: "/products/boy",
      }, {
        title: "Girl", 
        route: "/products/girl"  
      }
    ],
  },
  {
    title: "Company",
    route: "#header",
    routes: [
      {
        title: "About us",
        route: "/about-us",
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
        title: "Our Clients",
        route: "/about-us#out-clients",
      },
    ],
  },
  {
    title: `Let's Work Together!`,
    route: "#contact-us",
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

export const products: Array<{
  title: string, 
  imageUrl: StaticImageData, 
  route: string
}> = [
  {
    title: "Man", 
    imageUrl: man01, 
    route: "/products/man"
  }, 
  {
    title: "Woman", 
    imageUrl: woman01, 
    route: "/products/woman" 
  }, 
  {
    title: "Boy", 
    imageUrl: boy01, 
    route: "/products/boy"
  }, 
  {
    title: "Girl", 
    imageUrl: girl01, 
    route: "/products/girl"
  }
]