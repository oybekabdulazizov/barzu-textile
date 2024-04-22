import React from 'react';
import Image from 'next/image';

import {
  Carousel,
  CarouselChevronNext,
  CarouselChevronPrevious,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import { ProductType } from '@/lib/constants';

type Props = {
  title: string;
  description: string;
  productsData: Array<ProductType>;
};

export default function ProductContainer({
  title,
  description,
  productsData,
}: Props) {
  return (
    <>
      <div className='bg-primary-500 w-full h-full flex items-center'>
        <div className='wrapper flex flex-col gap-2'>
          <h1 className='text-slate-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold'>
            {title.toUpperCase()}
          </h1>
          <p className='text-slate-200 text-md md:text-xl 2xl:text-2xl font-medium tracking-wide'>
            {description.toUpperCase()}
          </p>
        </div>
      </div>
      <div className='bg-man-boy'>
        <div className=' wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6'>
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
                  <h1 className='text-xs uppercase py-2 px-1'>
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
