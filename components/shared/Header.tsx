import Link from 'next/link';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Header: React.FC = ({}) => {
  return (
    <section className='w-full border-b'>
      <div className='wrapper !py-1 sm:!py-4 flex items-center justify-between'>
        <Link
          href={'/'}
          className='h-fit m-2 font-extrabold text-primary-500 text-2xl sm:text-4xl'
        >
          Barzu
        </Link>
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </section>
  );
};

export default Header;
