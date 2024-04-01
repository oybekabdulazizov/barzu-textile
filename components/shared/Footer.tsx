import { navItems } from "@/lib/constants";
import Link from "next/link";

const Footer: React.FC = ({}) => {
  return (
    <footer className="w-full border-t mt-auto bg-primary-500 py-4">
      <div className="wrapper py-[25px] sm:py-5 flex justify-between">
        <Link
          href={"/"}
          className="hidden sm:block h-fit m-2 font-extrabold text-slate-200 text-4xl"
        >
          Barzu
        </Link>
        <div className="flex justify-around sm:justify-end flex-row flex-wrap sm:flex-nowrap gap-8 md:gap-20 text-slate-200 w-full">
          {navItems.slice(1).map((item, idx) => {
            return (
              <div key={`${idx} - ${item.title}`} className="flex flex-col gap-1 w-fit">
                <h1 className="font-medium text-lg hover:underline my-1" key={item.title}>
                  {item.title}
                </h1>
                {item.routes?.map((route, idx) => (
                  <Link
                    href={route.route}
                    key={`${idx} - ${item.route}`} 
                    className="hover:underline hover:italic w-fit"
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
