'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/lib/constants';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

const DesktopNavbar: React.FC = ({}) => {
  const pathname = usePathname();

  return (
    <div className='hidden sm:py-0 md:flex justify-end'>
      <ul className='flex flex-row justify-between items-center py-2'>
        {navItems.map((item) => {
          const isActive = pathname === item.route;
          return (
            <li key={item.route}>
              <NavigationMenu>
                <NavigationMenuList>
                  {item.route === '/' ? (
                    <Link
                      href={item.route}
                      key={item.title}
                      className={`md:mx-4 lg:mx-5 text-base py-3 border-b-2 hover:border-b-2 hover:border-primary-500 hover:text-primary-500 whitespace-nowrap ${
                        isActive
                          ? 'border-primary-500 text-primary-500 font-extrabold'
                          : 'border-transparent font-medium text-gray-500'
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Link
                          href={item.route}
                          key={item.title}
                          className={`py-3 text-base border-b-2 hover:text-primary-500 whitespace-nowrap ${
                            isActive
                              ? 'border-primary-500 text-primary-500 font-extrabold'
                              : 'border-transparent font-medium text-gray-500'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        className='bg-white border rounded-md'
                      >
                        <div className='text-primary-500 flex flex-col gap-2 p-3 w-56 rounded-md'>
                          {item.routes?.map((route, idx) => (
                            <Link
                              href={route.route}
                              key={`${idx} - ${route.title}`}
                              className='py-2 px-3 w-full hover:bg-gray-100 rounded-md'
                            >
                              {route.title}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNavbar;
