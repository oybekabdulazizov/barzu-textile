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
        <div className='wrapper flex flex-col gap-2'>
          <h1 className='text-slate-200 text-4xl md:text-6xl lgt:ext-7xl 2xl:text-8xl font-bold'>
            Barzu
          </h1>
          <p className='text-slate-200 text-xl md:text-2xl lg:text-4xl font-medium tracking-wide'>
            Discover our superior knitwear for unmatched quality and style!
          </p>
          <p className='text-slate-200 text-sm md:text-xl font-medium pt-2 tracking-wide'>
            From production to doorstep, we've got you covered with seamless
            service, packaging, and delivery solutions!
          </p>
        </div>
      </div>
      <CarouselContent>
        {heroCarouselImages.map(({ src, alt }, index) => (
          <CarouselItem key={index} className='p-0'>
            <Card className='border-none p-0'>
              <CardContent className='relative flex items-center min-h-[600px] min-[3350px]:min-h-[1200px] min-[3350px]:justify-center md:max-h-[800px] p-0'>
                <Image
                  className='min-h-[600px] min-[3350px]:min-h-[1200px] object-cover object-center'
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
