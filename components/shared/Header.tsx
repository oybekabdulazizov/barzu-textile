import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = ({}) => {
  return (
    <section className='w-full bg-red-100 border-b'>
      <div className='wrapper bg-red-300 py-5 flex items-center justify-between'>
        <Link href={'/'}>
          <Image src='vercel.svg' alt='Vercel logo' width={130} height={30} />
        </Link>
      </div>
    </section>
  );
};

export default Header;
