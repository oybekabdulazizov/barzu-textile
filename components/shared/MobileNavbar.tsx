'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MenuIcon, X } from 'lucide-react';

import { navItems } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      // Cast the target to an HTMLElement and check if it's outside the navbar
      const target = event.target as HTMLElement;
      const nav = document.getElementById('nav');

      if (nav && !nav.contains(target) && isOpen) {
        setIsOpen(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsOpen(false); // Close the navbar if the screen width is 768px or wider
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Check immediately on mount as well
    handleResize();

    // Cleanup function to remove the resize event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='cursor-pointer md:hidden' onClick={toggleSidebar}>
        <MenuIcon size={24} className='stroke-primary-500' />
      </div>
      <nav
        id='nav'
        className={`fixed top-0 right-0 w-full sm:w-1/2 z-[2] h-full bg-primary-500 bg-opacity-100 transition-all transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-lg md:hidden`}
      >
        <div className='flex justify-end py-4 px-2 sm:py-8 sm:px-8'>
          <X
            size={24}
            className='stroke-secondary-500 cursor-pointer'
            onClick={toggleSidebar}
          />
        </div>
        <div className='px-4 sm:px-8 text-secondary-500'>
          {navItems.map((navItem, idx) => {
            const isActive = navItem.route === pathname;
            return (
              <Accordion
                type='single'
                collapsible
                className='group'
                key={`${navItem.route} - ${idx}`}
              >
                <AccordionItem
                  value={`${navItem.title} - ${idx}`}
                  className='border-b-transparent py-2'
                >
                  {idx === 0 ? (
                    <>
                      <Link
                        href={navItem.route}
                        className='text-lg py-2 hover:underline hover:italic'
                        onClick={toggleSidebar}
                      >
                        {navItem.title}
                      </Link>
                    </>
                  ) : (
                    <>
                      <AccordionTrigger className='py-0'>
                        <Link
                          href={navItem.route}
                          className='text-lg py-2 hover:underline hover:italic'
                          onClick={toggleSidebar}
                        >
                          {navItem.title}
                        </Link>
                      </AccordionTrigger>
                      {navItem.routes?.map((route, idx) => (
                        <AccordionContent
                          className='text-base py-1 hover:underline hover:italic'
                          key={`${route.route} - ${idx}`}
                        >
                          <Link
                            href={route.route}
                            className='text-lg py-2 hover:underline hover:italic'
                            onClick={toggleSidebar}
                          >
                            {route.title}
                          </Link>
                        </AccordionContent>
                      ))}
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </nav>
    </>
  );
}
