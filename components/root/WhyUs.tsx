import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { couple01 } from '@/public/images/images';

const WhyUs: React.FC = ({}) => {
  return (
    <div className='wrapper flex items-center justify-between flex-col md:flex-row gap-6 md:gap-10 lg:gap-14 py-10'>
      <Image
        src={couple01}
        alt='model couple'
        className='p-0 w-full md:w-[300px] lg:w-[400px] transition-all'
        priority={true}
      />
      <div>
        <h2 className='font-extrabold text-[24px] lg:text-[30px] text-gray-600 pb-2'>
          Here's why we stand out:
        </h2>
        <ul className='list-disc px-6 flex flex-col gap-2 text-gray-700 font-medium lg:text-[17px]'>
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
        <Button className='p-0 mt-12 transition-all'>
          <Link
            href={'/about-us'}
            className='px-6 py-2 border-[3px] border-green-950 transition-all text-[18px] font-bold text-green-950 hover:bg-green-950 hover:text-slate-200'
          >
            More details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default WhyUs;
