import Image from "next/image";
import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";

const Header: React.FC = ({}) => {
  return (
    <section className="w-full border-b">
      <div className="wrapper py-[25px] md:py-5 flex items-center justify-between">
        <Link
          href={"/"}
          className="hidden sm:block h-fit m-2 font-extrabold text-primary-500 text-4xl"
        >
          Barzu
        </Link>
        <DesktopNavbar />
      </div>
    </section>
  );
};

export default Header;
