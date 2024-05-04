import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselChevronNext,
  CarouselChevronPrevious,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import { ProductPageType } from '@/lib/products';
import { ProductType } from '@/lib/products';

type ProductPageProp = {
  productsData: Array<ProductPageType>;
};

function ProductPage({ productsData }: ProductPageProp) {
  return (
    <div className='w-full'>
      <div className='bg-primary-500 w-full h-full flex items-center'>
        <div className='wrapper flex flex-col gap-2 uppercase'>
          <h1 className='text-slate-200 text-lg sm:text-2xl md:text-2xl 2xl:text-3xl font-bold'>
            Our products
          </h1>
          <p className='text-slate-200 text-sm md:text-md 2xl:text-lg font-medium tracking-wide'>
            We have products for men, women, and kids. Check them out!
          </p>
        </div>
      </div>
      <div className='wrapper'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6'>
          {productsData.map((product) => (
            <Link
              href={product.route}
              key={`${product.title}-${product.route}`}
              className='group mx-auto w-60 sm:w-full'
            >
              <Image
                src={product.imageUrl}
                alt={`${product.title} - image`}
                className='group-hover:bg-white group-hover:opacity-70'
                priority
              />
              <h1 className='text-xs sm:text-sm uppercase py-2 px-1 text-primary-500'>
                {product.title}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

type ProductContainerProps = {
  title: string;
  description: string;
  productsData: Array<ProductType>;
  model: 'man' | 'woman' | 'boy' | 'girl';
};

function ProductContainer({
  title,
  description,
  productsData,
  model,
}: ProductContainerProps) {
  const pageBodyBg =
    model === 'man' || model === 'boy' ? 'bg-man-boy' : 'bg-woman-girl';
  return (
    <>
      <div className='bg-primary-500 w-full h-full flex items-center'>
        <div className='wrapper flex flex-col gap-2 uppercase'>
          <h1 className='text-slate-200 text-lg sm:text-2xl md:text-2xl 2xl:text-3xl font-bold'>
            {title}
          </h1>
          <p className='text-slate-200 text-sm md:text-md 2xl:text-lg font-medium tracking-wide'>
            {description}
          </p>
        </div>
      </div>
      <div className={pageBodyBg}>
        <div className='wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6'>
          {productsData.map((product) => {
            const { title, color, material, images } = product;
            return (
              <div
                className='mx-auto w-60 sm:w-full'
                key={`${title} - ${color}`}
              >
                <div className='w-full relative'>
                  <Carousel className='w-full'>
                    <CarouselChevronPrevious
                      className='left-1 z-[1]'
                      variant='secondary'
                    />
                    <CarouselContent className='w-fit left-0 right-0'>
                      {images.map((imageSrc, index) => (
                        <CarouselItem className='' key={`${title} - 0${index}`}>
                          <Card className='!rounded-none'>
                            <CardContent className='p-0'>
                              <Image
                                src={imageSrc}
                                alt={`${color} ${title} - image - 0${index}`}
                                priority
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselChevronNext
                      className='right-1 z-[1]'
                      variant='secondary'
                    />
                  </Carousel>
                  <h1 className='text-xs sm:text-sm uppercase py-2 px-1 text-primary-500'>
                    {color} {title} made of {material}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { ProductPage, ProductContainer };
