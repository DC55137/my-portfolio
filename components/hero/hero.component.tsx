import type { HTMLAttributes } from "react";

import Image from "next/image";

import { cn } from "@/utils/ui";

import { MDX } from "../mdx";

export type HeroProps = HTMLAttributes<HTMLElement> & {
  isBig?: boolean;
  title: string;
  subtitle: string;
  imgSrc?: string;
  imgAlt?: string;
};

export function Hero({
  isBig,
  title,
  subtitle,
  imgSrc,
  imgAlt,
  ...props
}: HeroProps) {
  return (
    <header className="flex flex-col md:flex-row-reverse" {...props}>
      {imgSrc && imgAlt ? (
        <Image
          priority
          src={imgSrc}
          alt={imgAlt}
          width={350}
          height={350}
          className="flex-shrink-0"
        />
      ) : null}
      <div className="flex flex-col flex-auto gap-3">
        <h1
          className={cn(isBig ? "typography-9" : "typography-8", "font-bold")}
        >
          <MDX
            source={title}
            components={{
              p: ({ children }) => children,
              strong: ({ children }) => (
                <strong className="[font-weight:inherit] text-accent">
                  {children}
                </strong>
              ),
            }}
          />
        </h1>
        <MDX
          className="typography-4"
          source={subtitle}
          components={{
            p: ({ children }) => children,
            strong: ({ children }) => (
              <strong className="[font-weight:inherit] text-accent">
                {children}
              </strong>
            ),
          }}
        />
      </div>
    </header>
  );
}
