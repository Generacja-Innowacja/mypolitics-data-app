"use client";

import { PATHS } from "@/constants/paths";
import Image from "next/image";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <header className="flex w-full py-6 border-t border-bluish-gray justify-center">
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center w-full max-w-screen-xl mx-6">
        <div className="flex items-center gap-2">
          <span className="text-dark-sea text-sm">
            &copy; {CURRENT_YEAR}
          </span>
          <div className="h-[12px] w-[1px] bg-bluish-gray" />
          <Link href={PATHS.HOME}>
            <Image src="/assets/common/mypolitics-logo.svg" alt="myPolitics Logo" height={16} width={88} />
          </Link>
        </div>
        <nav className="flex items-center gap-4 text-dark-sea text-sm">
          <Link href={PATHS.RULES}>
            Regulamin serwisu
          </Link>
          <Link href={PATHS.PRIVACY}>
            Regulamin serwisu
          </Link>
          <Link href={PATHS.ABOUT}>
            O nas
          </Link>
        </nav>
      </div>
    </header>
  );
};
