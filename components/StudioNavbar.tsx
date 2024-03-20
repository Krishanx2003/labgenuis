import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";
import Logo from "./Logo";

const StudioNavbar = (props: any) => {
  return (

      <nav className="bg-black text-gray-100 py-5 px-10 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200" aria-label="Go to Website"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
        <Logo
          title="openmind"
          className="text-2xl hidden md:inline-flex"
        />
        <p className="text-sm">Studio for Blog Content</p>
        {props.renderDefault(props)}
      </nav>
     
   
  );
};

export default StudioNavbar;
