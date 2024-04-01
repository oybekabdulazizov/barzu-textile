'use client';

import { navItems } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNavbar: React.FC = ({}) => {
  const pathname = usePathname();

  return (
    <div className='hidden sm:py-0 md:flex justify-end'>
      <ul className='flex flex-row justify-between items-center py-2'>
        {navItems.map((item) => {
          const isActive = pathname === item.route;
          return (
            <li key={item.route}>
              <Link
                href={item.route}
                key={item.title}
                className={`md:mx-4 lg:mx-5 py-3 border-b-2 hover:border-b-2 hover:border-primary-500 hover:text-primary-500 whitespace-nowrap ${
                  isActive
                    ? 'border-primary-500 text-primary-500 font-extrabold'
                    : 'border-transparent font-medium text-gray-500'
                }`}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
