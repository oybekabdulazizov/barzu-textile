import Link from 'next/link';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Header: React.FC = ({}) => {
  return (
    <section className='w-full border-b'>
      <div className='wrapper !py-1 sm:!py-4 flex items-center justify-between'>
        <Link
          href={'/'}
          className='font-extrabold text-primary-500 flex flex-col items-center gap-0'
        >
          <h1 className='text-2xl sm:text-4xl !leading-none'>Barzu</h1>
          <p className='text-xs sm:text-lg !leading-none'>Textile</p>
        </Link>
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </section>
  );
};

export default Header;
