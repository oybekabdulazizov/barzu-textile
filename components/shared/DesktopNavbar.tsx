'use client';

import { navItems } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNavbar: React.FC = ({}) => {
  const pathname = usePathname();

  return (
    <div className='hidden sm:py-0 sm:flex justify-end'>
      <ul className='flex flex-row justify-between items-center py-2'>
        {navItems?.map((item) => {
          const isActive = pathname === item.route;
          return (
            <li key={item.route}>
              <Link
                href={item.route}
                className={`sm:mx-3 md:mx-5 py-3 border-b-2 hover:border-b-2 hover:border-green-900 whitespace-nowrap ${
                  isActive
                    ? 'border-b-2 border-green-900 text-green-900 font-bold'
                    : 'border-transparent font-medium text-gray-600'
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
