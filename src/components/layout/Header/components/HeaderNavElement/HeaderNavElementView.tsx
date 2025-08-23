"use client";

import Button from "@/components/shared/Button";
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
        flex-shrink-0 no-underline
        ${className}
        `
      )}
      passHref
    >
      <Button
        tag="anchor"
        styleType={isHighlighted ? "primary" : "ghost"}
        className={isHighlighted ? "bg-dark-sea-storm hover:bg-dark-sea-storm-hover" : ""}
        sizeType="small"
      >
        {icon && (
          <span className="flex items-center justify-center">
            {icon}
          </span>
        )}
        {text && (
          <span className="font-bold">{text}</span>
        )}
      </Button>
    </Link>
  );
}; 