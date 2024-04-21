import Image from 'next/image';

import {
  Carousel,
  CarouselChevronNext,
  CarouselChevronPrevious,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { productsBoy } from '@/lib/constants';

export default function page() {
  return (
    <>
      <div className='bg-primary-500 w-full h-full flex items-center'>
        <div className='wrapper flex flex-col gap-2'>
          <h1 className='text-slate-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold'>
            For Boys
          </h1>
          <p className='text-slate-200 text-md md:text-2xl 2xl:text-3xl font-medium tracking-wide'>
            Explore our boys' clothing collection for stylish, durable
            essentials. From cozy sweaters and hoodies, to vibrant t-shirts, our
            quality garments ensure comfort and style for every adventure.
          </p>
        </div>
      </div>
      <div className='wrapper'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 xl:gap-10 '>
          {productsBoy.map((product, idx) => (
            <div
              className='mx-auto border border-1 border-primary-500 rounded-md w-60 sm:w-full'
              key={`${product.title} - ${product.color}`}
            >
              <div className='w-full relative'>
                <Carousel className='w-full'>
                  <CarouselChevronPrevious
                    className='left-1 z-[1]'
                    variant='secondary'
                  />
                  <CarouselContent className='w-fit left-0 right-0'>
                    {product.images.map((imageSrc, index) => (
                      <CarouselItem
                        className=''
                        key={`${product.title} - image - 0${index}`}
                      >
                        <Card>
                          <CardContent className='p-0'>
                            <Image
                              src={imageSrc}
                              alt={`${product.title}-${product}`}
                              className='rounded-md border-b-[1px] border-primary-500'
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
                <h1 className='p-2 lg:py-4 lg:text-lg'>{product.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
