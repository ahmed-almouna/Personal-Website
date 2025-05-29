import { navItemProps } from "@/common/types";
// import { NavLinks } from "@/utils/constants";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center pt-10 w-full text-lg md:text-xl lg:text-2xl">
      <Link href="/" className=" font-bold text-black">
        AHMED ALMOUNA
      </Link>
      <Link
        href={"Resume.pdf"}
        target="_blank"
        className="py-4 px-6 bg-secondary rounded-xl text-white font-bold shadow-md transition duration-100 ease-linear hover:scale-110"
      >
        Resume
      </Link>
    </div>
  );
}
