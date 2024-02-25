import { wardrobe01 } from '@/public/images/images';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';

const OurMission: React.FC = ({}) => {
  return (
    <div className='relative'>
      <div className='absolute z-10 bg-black bg-opacity-70 w-full min-h-[500px] md:max-h-[500px] flex items-center'>
        <div className='wrapper tracking-wide'>
          <h2 className='text-slate-200 font-bold text-[32px] lg:text-[40px]'>
            Our Mission
          </h2>
          <p className='text-slate-200 font-medium text-[18px] lg:text-[22px]'>
            is to provide exceptional textile solutions, driven by quality
            craftsmanship and innovation. We are committed to delivering
            superior fabrics that meet the diverse needs of our clients while
            upholding the highest standards of sustainability and ethical
            business practices in every aspect of our operations.
          </p>
          <Button className='p-0 mt-12 transition-all'>
            <Link
              href={'/products'}
              className='px-6 py-2 border-[3px] border-slate-200 transition-all text-[18px] font-bold text-slate-200 hover:bg-slate-200 hover:text-green-950'
            >
              See our products
            </Link>
          </Button>
        </div>
      </div>
      <div className='min-h-[500px] md:max-h-[500px]'>
        <Image
          src={wardrobe01}
          alt='wardrobe'
          className='h-[500px] object-cover object-center'
          priority
        />
      </div>
    </div>
  );
};

export default OurMission;
