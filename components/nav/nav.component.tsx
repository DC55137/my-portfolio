"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { Fragment, useEffect, useRef, useState } from "react";

import { Paper } from "@/components/paper";
import { cn } from "@/utils/ui";
import { contact } from "@/data/contact";
import { Tooltip } from "../tooltip";

const SOCIAL_LINKS = [
  {
    href: `https://github.com/${contact.social.github}`,
    icon: IconBrandGithub,
    label: "GitHub",
  },
  { href: `https://x.com/${contact.social.x}`, icon: IconBrandX, label: "X" },
  {
    href: `https://linkedin.com/in/${contact.social.linkedIn}`,
    icon: IconBrandLinkedin,
    label: "LinkedIn",
  },
];

export type NavProps = {
  isCentered?: boolean;
  className?: string;
  headerClassName?: string;
  header: ReactNode;
  navClassName?: string;
  children: (actions: {
    setIsExpanded: Dispatch<SetStateAction<boolean>>;
  }) => ReactNode;
};

export function Nav({
  isCentered,
  className,
  headerClassName,
  header,
  navClassName,
  children,
}: NavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [collapsedNavHeight, setCollapsedNavHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    window.document.body.style.overflow = isExpanded ? "hidden" : "";

    if (!isExpanded && navRef.current) {
      setCollapsedNavHeight(navRef.current.offsetHeight);
    }
  }, [isExpanded]);

  return (
    <Fragment>
      {isExpanded ? (
        <div className="sm:hidden" style={{ height: collapsedNavHeight }} />
      ) : null}
      <Paper
        ref={navRef}
        shape="rounded"
        className={cn(
          "sticky top-0 sm:h-[100dvh] border-x-0 border-t-0 sm:border-b-0 sm:border-r backdrop-blur-custom flex flex-col sm:items-center p-4",
          isCentered ? "justify-between" : "gap-6",
          isExpanded && "fixed sm:sticky inset-0 h-[100dvh] ",
          className
        )}
      >
        <div
          className={cn(
            "w-full flex items-center justify-between sm:justify-center",
            headerClassName
          )}
        >
          {header}
          <button
            aria-label={isExpanded ? "close menu" : "open menu"}
            className="flex items-center justify-center w-6 h-6 sm:hidden text-extradimmed"
            onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
          >
            <IconMenu2 className={cn(isExpanded && "hidden")} />
            <IconX className={cn("hidden", isExpanded && "block")} />
          </button>
        </div>
        <div className="flex-auto" />
        <nav
          className={cn(
            isExpanded ? "flex" : "hidden",
            "sm:flex flex-col sm:items-center gap-5 sm:gap-3",
            navClassName
          )}
        >
          {children({ setIsExpanded })}
        </nav>
        <div className=" flex-auto" />
        <div
          className={cn(
            isExpanded ? "flex" : "hidden",
            "hidden sm:flex flex-col gap-3"
          )}
        >
          {SOCIAL_LINKS.map((link) => (
            <Tooltip
              key={link.href}
              delay={0}
              side="right"
              content={link.label}
            >
              <a
                href={link.href}
                aria-label={`view ${link.label} profile`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-base-9 hover:text-main-12"
              >
                <link.icon strokeWidth={1} />
              </a>
            </Tooltip>
          ))}
        </div>
      </Paper>
    </Fragment>
  );
}
