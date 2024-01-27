import Image from 'next/image';
import Link from 'next/link';
import DesktopNavbar from './DesktopNavbar';

const Header: React.FC = ({}) => {
  return (
    <section className='w-full border-b'>
      <div className='wrapper py-[25px] md:py-5 flex items-center justify-between'>
        <Link href={'/'}>
          <Image
            src='vercelGreen.svg'
            alt='Vercel logo'
            width={130}
            height={30}
            className='w-32'
            priority={true}
          />
        </Link>
        <DesktopNavbar />
      </div>
    </section>
  );
};

export default Header;
