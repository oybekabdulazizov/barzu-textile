import { navItems } from '@/lib/constants';
import Link from 'next/link';

const Footer: React.FC = ({}) => {
  return (
    <footer className='w-full border-t mt-auto bg-primary-500 py-4'>
      <div className='wrapper py-[25px] sm:py-5 flex flex-row gap-20'>
        <Link href={'/'} className='hidden sm:block h-fit m-2 font-extrabold text-slate-200 text-4xl'>
          Barzu
        </Link>
        <div className='flex flex-row sm:justify-around gap-8 flex-wrap md:flex-nowrap text-slate-200 w-full'>
          {navItems?.slice(1).map((item) => {
            return (
              <div key={item.route} className='flex flex-col gap-1 w-fit'>
                <Link
                  href={item.route}
                  className='font-medium text-lg hover:underline my-1'
                >
                  {item.title}
                </Link>
                {item.subItems?.map((subitem) => (
                  <Link
                    href={subitem.route}
                    key={subitem.route}
                    className='hover:underline w-fit'
                  >
                    {subitem.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
