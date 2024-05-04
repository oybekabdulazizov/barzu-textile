import { StaticImageData } from 'next/image';

import { boy01, woman01, girl01, man01 } from '@/public/assets/images';

import {
  boyBlackSweater01,
  boyBlackSweater02,
  boyBlackSweater03,
  boyGrayHoodie01,
  boyGrayHoodie02,
  boyGrayHoodie03,
  boyGrayHoodie04,
  boyGrayTshirt01,
  boyGrayTshirt02,
  boyGreenHoodie01,
  boyGreenHoodie02,
  boyGreenHoodie03,
  boyOrangeHoodie01,
  boyOrangeHoodie02,
  boyOrangeHoodie03,
  boyOrangeTshirt01,
  boyOrangeTshirt02,
  boyWhiteHoodie01,
  boyWhiteHoodie02,
  boyWhiteHoodie03,
  boyWhiteTshirt01,
  boyWhiteTshirt02,
} from '@/public/assets/products/boy';
import {
  girlBlackWhite01,
  girlBlackWhite02,
  girlBlueTshirt01,
  girlBlueTshirt02,
  girlBlueTshirt03,
  girlOrangeShirt01,
  girlOrangeShirt02,
  girlOrangeSweater01,
  girlOrangeSweater02,
  girlOrangeSweater03,
  girlPinkBlouse01,
  girlPinkBlouse02,
  girlRedBlouse01,
  girlRedBlouse02,
  girlRedBlouse03,
} from '@/public/assets/products/girl';
import {
  manBeigeTrousers01,
  manBeigeTrousers02,
  manBeigeTrousers03,
  manBlackHoodie01,
  manBlackHoodie02,
  manBlackHoodie03,
  manBlackHoodie04,
  manBlackTshirt01,
  manBlackTshirt02,
  manBlackTshirt03,
  manBlackUndershirt01,
  manBlackUndershirt02,
  manBlackUndershirt03,
  manBlackUndershirt04,
  manBlueTshirt01,
  manBlueTshirt02,
  manBlueTshirt03,
  manDarkblueHoodie01,
  manDarkblueHoodie02,
  manDarkblueHoodie03,
  manDarkblueTshirt01,
  manDarkblueTshirt02,
  manDarkblueTshirt03,
  manGreenTshirt01,
  manGreenTshirt02,
  manGreenTshirt03,
  manGreenZippedHoodie01,
  manGreenZippedHoodie02,
  manGreenZippedHoodie03,
  manGreenZippedHoodie04,
  manGreyPoloshirt01,
  manGreyPoloshirt02,
  manGreyPoloshirt03,
  manSlateTshirt01,
  manSlateTshirt02,
  manSlateTshirt03,
  manWhiteTshirt01,
  manWhiteTshirt02,
  manWhiteTshirt03,
  manWhiteUndershirt01,
  manWhiteUndershirt02,
  manWhiteUndershirt03,
} from '@/public/assets/products/man';

export type ProductPageType = {
  title: string;
  imageUrl: StaticImageData;
  route: string;
};

export const products: Array<ProductPageType> = [
  {
    title: 'Man',
    imageUrl: man01,
    route: '/products/man',
  },
  {
    title: 'Woman',
    imageUrl: woman01,
    route: '/products/woman',
  },
  {
    title: 'Boy',
    imageUrl: boy01,
    route: '/products/boy',
  },
  {
    title: 'Girl',
    imageUrl: girl01,
    route: '/products/girl',
  },
];

export type ProductType = {
  title: string;
  color?: string;
  material: string;
  images: Array<StaticImageData>;
  canBeCustomized: boolean;
};

export const productsBoy: Array<ProductType> = [
  {
    title: 'Sweater',
    color: 'Black',
    material: 'Cotton',
    images: [boyBlackSweater01, boyBlackSweater02, boyBlackSweater03],
    canBeCustomized: true,
  },
  {
    title: 'Hoodie',
    color: 'Gray',
    material: 'Cotton',
    images: [
      boyGrayHoodie01,
      boyGrayHoodie02,
      boyGrayHoodie03,
      boyGrayHoodie04,
    ],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Gray',
    material: 'Cotton',
    images: [boyGrayTshirt01, boyGrayTshirt02],
    canBeCustomized: true,
  },
  {
    title: 'Hoodie',
    color: 'Green',
    material: 'Cotton',
    images: [boyGreenHoodie01, boyGreenHoodie02, boyGreenHoodie03],
    canBeCustomized: true,
  },
  {
    title: 'Hoodie',
    color: 'Orange',
    material: 'Cotton',
    images: [boyOrangeHoodie01, boyOrangeHoodie02, boyOrangeHoodie03],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Orange',
    material: 'Cotton',
    images: [boyOrangeTshirt01, boyOrangeTshirt02],
    canBeCustomized: true,
  },
  {
    title: 'Hoodie',
    color: 'White',
    material: 'Cotton',
    images: [boyWhiteHoodie01, boyWhiteHoodie02, boyWhiteHoodie03],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'White',
    material: 'Cotton',
    images: [boyWhiteTshirt01, boyWhiteTshirt02],
    canBeCustomized: true,
  },
];

export const productsGirl: Array<ProductType> = [
  {
    title: 'White Sweater with black skirt',
    material: 'Cotton',
    images: [girlBlackWhite01, girlBlackWhite02],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Blue',
    material: 'Cotton',
    images: [girlBlueTshirt01, girlBlueTshirt02, girlBlueTshirt03],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Orange',
    material: 'Cotton',
    images: [girlOrangeShirt01, girlOrangeShirt02],
    canBeCustomized: true,
  },
  {
    title: 'Sweater',
    color: 'Orange',
    material: 'Cotton',
    images: [girlOrangeSweater01, girlOrangeSweater02, girlOrangeSweater03],
    canBeCustomized: true,
  },
  {
    title: 'Blouse',
    color: 'Pink',
    material: 'Cotton',
    images: [girlPinkBlouse01, girlPinkBlouse02],
    canBeCustomized: true,
  },
  {
    title: 'Blouse',
    color: 'Red',
    material: 'Cotton',
    images: [girlRedBlouse01, girlRedBlouse02, girlRedBlouse03],
    canBeCustomized: true,
  },
];

export const productsMan: Array<ProductType> = [
  {
    title: 'Trousers',
    color: 'Beige',
    material: 'Cotton',
    images: [manBeigeTrousers01, manBeigeTrousers02, manBeigeTrousers03],
    canBeCustomized: true,
  },
  {
    title: 'Hoodie',
    color: 'Black',
    material: 'Cotton',
    images: [
      manBlackHoodie01,
      manBlackHoodie02,
      manBlackHoodie03,
      manBlackHoodie04,
    ],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Black',
    material: 'Cotton',
    images: [manBlackTshirt01, manBlackTshirt02, manBlackTshirt03],
    canBeCustomized: true,
  },
  {
    title: 'Undershirt',
    color: 'Black',
    material: 'Cotton',
    images: [
      manBlackUndershirt01,
      manBlackUndershirt02,
      manBlackUndershirt03,
      manBlackUndershirt04,
    ],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Blue',
    material: 'Cotton',
    images: [manBlueTshirt01, manBlueTshirt02, manBlueTshirt03],
    canBeCustomized: true,
  },
  {
    title: 'Hoodie',
    color: 'Dark Blue',
    material: 'Cotton',
    images: [manDarkblueHoodie01, manDarkblueHoodie02, manDarkblueHoodie03],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Dark Blue',
    material: 'Cotton',
    images: [manDarkblueTshirt01, manDarkblueTshirt02, manDarkblueTshirt03],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Green',
    material: 'Cotton',
    images: [manGreenTshirt01, manGreenTshirt02, manGreenTshirt03],
    canBeCustomized: true,
  },
  {
    title: 'Zipped Hoodie',
    color: 'Green',
    material: 'Cotton',
    images: [
      manGreenZippedHoodie01,
      manGreenZippedHoodie02,
      manGreenZippedHoodie03,
      manGreenZippedHoodie04,
    ],
    canBeCustomized: true,
  },
  {
    title: 'Polo shirt',
    color: 'Grey',
    material: 'Cotton',
    images: [manGreyPoloshirt01, manGreyPoloshirt02, manGreyPoloshirt03],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'Slate',
    material: 'Cotton',
    images: [manSlateTshirt01, manSlateTshirt02, manSlateTshirt03],
    canBeCustomized: true,
  },
  {
    title: 'T-shirt',
    color: 'White',
    material: 'Cotton',
    images: [manWhiteTshirt01, manWhiteTshirt02, manWhiteTshirt03],
    canBeCustomized: true,
  },
  {
    title: 'Undershirt',
    color: 'White',
    material: 'Cotton',
    images: [manWhiteUndershirt01, manWhiteUndershirt02, manWhiteUndershirt03],
    canBeCustomized: true,
  },
];
