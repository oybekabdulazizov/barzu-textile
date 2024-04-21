import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { productionBriefItems } from '@/lib/constants';

const ProductionBriefInfo: React.FC = ({}) => {
  return (
    <div className='bg-secondary-500 text-primary-500'>
      <div className='wrapper flex flex-col items-center'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-16'>
          {productionBriefItems.map(({ title, description }, idx) => (
            <div className='flex flex-col gap-2 px-20 md:px-0' key={idx}>
              <h2 className='text-center text-3xl font-extrabold tracking-wide'>
                {title}
              </h2>
              <p className='text-center'>{description}</p>
            </div>
          ))}
        </div>
        <Button className='p-0 mt-12 transition-all'>
          <Link
            href={'/about-us'}
            className='px-6 py-2 border-2 border-primary-500 transition-all text-lg font-bold text-primary-500 hover:bg-primary-500 hover:text-secondary-500'
          >
            More details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductionBriefInfo;
