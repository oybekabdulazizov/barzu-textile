'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { heroCarouselImages } from '@/lib/constants';

const HeroCarousel: React.FC = ({}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className='w-full'
      opts={{
        loop: true,
      }}
    >
      <div className='absolute z-10 bg-black bg-opacity-60 w-full h-full flex items-center'>
        <div className='wrapper'>
          <h1 className='text-slate-200 text-[40px] md:text-[60px] lg:text-[80px] 2xl:text-[100px] font-bold'>
            Barzu
          </h1>
          <p className='text-slate-200 text-[20px] md:text-[26px] lg:text-[34px] font-medium tracking-wide'>
            Discover our superior knitwear for unmatched quality and style!
          </p>
          <p className='text-slate-200 text-[14px] md:text-[20px] font-medium pt-2 tracking-wide'>
            From production to doorstep, we've got you covered with seamless
            service, packaging, and delivery solutions!
          </p>
        </div>
      </div>
      <CarouselContent>
        {heroCarouselImages.map(({ src, alt }, index) => (
          <CarouselItem key={index} className='p-0'>
            <Card className='border-none p-0'>
              <CardContent className='relative flex items-center min-h-[600px] md:max-h-[900px] p-0'>
                <Image
                  className='min-h-[600px] object-cover object-center'
                  src={src}
                  alt={alt}
                  priority
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
