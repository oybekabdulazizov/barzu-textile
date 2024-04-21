import Image from 'next/image';
import Link from 'next/link';

import { products } from '@/lib/constants';

export default function Products() {
  return (
    <div className='w-full'>
      <div className='bg-primary-500 w-full h-full flex items-center py-20'>
        <div className='wrapper flex flex-col gap-2'>
          <h1 className='text-slate-200 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold'>
            Our Products
          </h1>
          <p className='text-slate-200 text-md md:text-2xl 2xl:text-3xl font-medium tracking-wide'>
            We have products for men, women, and kids. Check them out!
          </p>
        </div>
      </div>
      <div className='py-20'>
        <div className='wrapper flex gap-6 md:gap-10 flex-wrap md:flex-nowrap justify-around md:justify-between'>
          {products.map((product) => (
            <Link
              href={product.route}
              key={`${product.title}-${product.route}`}
              className='group hover:-translate-y-1 transition-all border border-1 border-primary-500 rounded-md'
            >
              <Image
                src={product.imageUrl}
                alt={`${product.title}-image`}
                className='rounded-md w-56 sm:w-64 lg:w-52 xl:w-64 border-b-[1px] border-primary-500'
                priority
              />
              <h1 className='p-2 lg:p-4 lg:text-lg'>{product.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
