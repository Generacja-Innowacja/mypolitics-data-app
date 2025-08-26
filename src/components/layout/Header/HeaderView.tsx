"use client";

import { ChartIcon } from "@/assets/icons/ChartIcon";
import { QuizIcon } from "@/assets/icons/QuizIcon";
import { PATHS } from "@/constants/paths";
import Image from "next/image";
import Link from "next/link";
import { HeaderNavElement } from "./components/HeaderNavElement/HeaderNavElementView";

export const Header = (): JSX.Element => {
  return (
    <header className="flex w-full py-6 border-b border-bluish-gray justify-center">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-6">
        <Link href={PATHS.HOME}>
          <Image
            src="/assets/common/mypolitics-logo.svg"
            alt="myPolitics Logo"
            height={24}
            width={131.75}
          />
        </Link>
        <nav className="flex items-center gap-3">
          <HeaderNavElement
            href={PATHS.POLLS}
            icon={<ChartIcon />}
            text="Sondaże"
            className="hidden md:flex"
          />
          <HeaderNavElement
            href={PATHS.QUIZZES}
            icon={<QuizIcon />}
            text="Quizy"
            className="hidden md:flex"
          />
          <HeaderNavElement
            href={PATHS.MLODZI_WYBORCY}
            icon={
              <Image
                src="/assets/mlodzi-wyborcy/mlodzi-wyborcy-logo-dark.svg"
                alt="Młodzi Wyborcy 2025 Logo"
                height={16}
                width={50}
              />
            }
            isHighlighted
          />
        </nav>
      </div>
    </header>
  );
};
