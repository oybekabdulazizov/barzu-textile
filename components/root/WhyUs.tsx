import Image from 'next/image';

import { whyus } from '@/public/images/images';

const WhyUs: React.FC = ({}) => {
  return (
    <div className='wrapper flex items-center justify-between flex-col md:flex-row gap-6 md:gap-10 lg:gap-14 py-10'>
      <div>
        <h2 className='font-extrabold text-2xl lg:text-3xl text-primary-500 pb-2'>
          Why choose us?
        </h2>
        <ul className='list-disc pl-6 flex flex-col gap-2 text-primary-500 font-medium lg:text-lg'>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor
            incididunt
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </li>
        </ul>
      </div>
      <Image
        src={whyus}
        alt='model couple'
        className='hidden md:inline w-full md:w-[300px] lg:w-[400px] transition-all'
        priority={true}
      />
    </div>
  );
};

export default WhyUs;
