import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';
import { modelGuyInHoodie } from '@/public/assets/images';

const WhyUs: React.FC = () => {
  return (
    <div className='wrapper flex items-center justify-between flex-col md:flex-row gap-6 md:gap-10 lg:gap-14'>
      <Image
        src={modelGuyInHoodie}
        alt='model guy in hoodie'
        className='hidden md:inline p-0 w-full md:w-[300px] lg:w-[400px] transition-all'
        priority={true}
      />
      <div className='flex flex-col'>
        <h2 className='font-extrabold text-2xl lg:text-3xl text-primary-500 pb-2'>
          Here's why we stand out:
        </h2>
        <ul className='list-disc pl-6 flex flex-col gap-2 text-primary-500 font-medium lg:text-lg'>
          <li>
            Our knitwear reflects careful workmanship, ensuring top-notch
            quality.
          </li>
          <li>
            We use only the best fabrics for our knitwear, creating garments
            that are both luxurious and long-lasting.
          </li>
          <li>We stay up-to-date with our stylish and elegant designs.</li>
          <li>
            We're committed to sustainability, we make environmentally friendly
            knitwear.
          </li>
          <li>
            We closely monitor product quality throughout production. If any
            issues arise, we swiftly address them to ensure our clients receive
            flawless products.
          </li>
        </ul>
        <Button className='mt-6 md:mt-8'>
          <Link href={'/about-us'}>More details</Link>
        </Button>
      </div>
    </div>
  );
};

export default WhyUs;
