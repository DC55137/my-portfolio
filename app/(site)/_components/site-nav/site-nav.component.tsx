"use client";

import { useEffect, useState } from "react";

import { Logo } from "@/components/logo";
import { Nav } from "@/components/nav";
import { Tooltip } from "@/components/tooltip";
import { about } from "@/data/about";
import { contact } from "@/data/contact";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { stack } from "@/data/stack";
import { cn } from "@/utils/ui";

import { SiteHomeLink } from "../site-home-link";

const NAV_ITEMS = [about, experience, stack, projects, contact].map(
  ({ id, icon, label }) => ({
    href: `#${id}`,
    icon,
    label,
  })
);

export function SiteNav() {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY;
      const negativeMargin = window.innerHeight * 0.8; // Convert 80vh to pixels

      for (const item of NAV_ITEMS) {
        const section = document.querySelector<HTMLDivElement>(item.href);
        if (section) {
          const sectionTop =
            section.offsetTop +
            negativeMargin -
            (parseFloat(getComputedStyle(section).scrollMarginTop) || 0);
          const sectionBottom = sectionTop + section.offsetHeight;

          const isActive = sectionTop <= fromTop && sectionBottom > fromTop;
          if (isActive) {
            setActiveHref(item.href);
            break;
          }
        }
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav
      isCentered
      header={
        <SiteHomeLink href="/#" aria-label="Go to homepage">
          <Logo className="w-8 fill-main-9" />
        </SiteHomeLink>
      }
    >
      {({ setIsExpanded }) =>
        NAV_ITEMS.map((item, i) => (
          <Tooltip key={item.href} delay={0} side="right" content={item.label}>
            <SiteHomeLink
              href={item.href}
              aria-current={
                item.href === activeHref || (!activeHref && i === 0)
                  ? "page"
                  : undefined
              }
              aria-label={item.label}
              className={cn(
                "sm:w-10 sm:h-10 rounded sm:hover:bg-main-4 flex items-center sm:justify-center gap-3 sm:text-dimmed sm:hover:text-main-9 transition-colors",
                "sm:aria-[current=page]:bg-main-5 sm:aria-[current=page]:text-main-9"
              )}
              onClick={() => setIsExpanded(false)}
            >
              <item.icon strokeWidth={1} />
              <span className="sm:hidden">{item.label}</span>
            </SiteHomeLink>
          </Tooltip>
        ))
      }
    </Nav>
  );
}
