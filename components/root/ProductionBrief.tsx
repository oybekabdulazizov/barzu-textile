import Link from 'next/link';
import { Button } from '../ui/button';
import { productionBriefItems } from '@/lib/constants';

const ProductionBrief: React.FC = ({}) => {
  return (
    <div className='py-10 bg-[#d1e7a7] text-green-950 flex flex-col'>
      <div className='wrapper grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-16'>
        {productionBriefItems.map(({ title, description }, idx) => (
          <div className='flex flex-col gap-2 px-20 md:px-0' key={idx}>
            <h2 className='text-center text-[30px] font-[800] tracking-wide'>
              {title}
            </h2>
            <p className='text-center'>{description}</p>
          </div>
        ))}
      </div>
      <Button className='p-0 mt-12 transition-all'>
        <Link
          href={'/about-us'}
          className='px-6 py-2 border-[3px] border-green-950 transition-all text-[18px] font-bold text-green-950 hover:bg-green-950 hover:text-[#d1e7a7]'
        >
          More details
        </Link>
      </Button>
    </div>
  );
};

export default ProductionBrief;
