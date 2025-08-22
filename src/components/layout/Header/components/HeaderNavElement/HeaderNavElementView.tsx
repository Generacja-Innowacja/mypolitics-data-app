"use client";

import Link from "next/link";
import React from "react";
import { twMerge } from "tw-merge";

interface HeaderNavElementProps {
  href: string;
  icon?: React.ReactNode;
  text?: string;
  isHighlighted?: boolean;
  className?: string;
}

export const HeaderNavElement = ({
  href,
  icon,
  text,
  isHighlighted = false,
  className = "",
}: HeaderNavElementProps): JSX.Element => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
        flex items-center rounded-full bg-bluish-gray p-3 leading-none gap-2 text-dark-sea flex-shrink-0 no-underline
        ${isHighlighted ? "bg-dark-sea-storm text-white px-4" : ""}
        ${className}
        `
      )}
    >
      {icon && (
        <span className="flex items-center justify-center">
          {icon}
        </span>
      )}
      {text && (
        <span className="font-bold">{text}</span>
      )}
    </Link>
  );
}; 