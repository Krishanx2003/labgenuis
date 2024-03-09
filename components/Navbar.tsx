import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constant";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className='flexBetween navbar'>
      <nav className="border-b border-gray-700">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href='/'>
                  <Image
                    src='/logo.svg'
                    width={136}
                    height={53}
                    alt='logo'
                  />
                </Link>
              </div>
              <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link) => (
                  <li key={link.text}>
                    <Link href={link.href}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ml-auto flex items-center md:ml-6">
              <Button className="text-white bg-[#1d231e] hover:bg-[#0c160e]">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
