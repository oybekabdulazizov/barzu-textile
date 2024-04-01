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

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

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
                      className={`md:mx-4 lg:mx-5 py-3 border-b-2 hover:border-b-2 hover:border-primary-500 hover:text-primary-500 whitespace-nowrap ${
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
                          className={`py-3 border-b-2 hover:text-primary-500 whitespace-nowrap ${
                            isActive
                              ? 'border-primary-500 text-primary-500 font-extrabold'
                              : 'border-transparent font-medium text-gray-500'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        className='bg-white border'
                        style={{ borderRadius: '6px' }}
                      >
                        <div className='text-primary-500 flex flex-col gap-2 p-3 w-56 rounded-md'>
                          {item.routes?.map((route, idx) => (
                            <Link
                              href={route.route}
                              key={`${idx} - ${route.title}`}
                              className='py-2 px-3 w-full hover:bg-gray-100'
                              style={{ borderRadius: '6px' }}
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
