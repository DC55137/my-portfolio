import type { PackageManager } from "@/components/mdx/package-manager-command";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import type { ComponentProps, HTMLAttributes, ReactElement } from "react";

import { IconExternalLink } from "@tabler/icons-react";
import { Code } from "bright";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { cn } from "@/utils/ui";

import theme from "./mdx.theme.json";
import { PackageManagerCommand } from "./package-manager-command";

export type MDXProps = MDXRemoteProps & {
  className?: string;
};

export function MDX({ className, components, ...props }: MDXProps) {
  return (
    <div className={cn("text-dimmed [&>:first-child]:mt-0", className)}>
      <MDXRemote
        {...props}
        components={{
          h1: ({ children, ...props }) => (
            <h1
              className="mt-16 text-default font-semibold typography-8"
              {...props}
            >
              {children}
            </h1>
          ),
          h2: ({ children, ...props }) => (
            <h2
              className="text-main-300 font-semibold mt-14 typography-7"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: ({ children, ...props }) => (
            <h3
              className="mt-12 text-default font-semibold typography-6"
              {...props}
            >
              {children}
            </h3>
          ),
          h4: ({ children, ...props }) => (
            <h4
              className="mt-10 text-default font-semibold typography-5"
              {...props}
            >
              {children}
            </h4>
          ),
          h5: ({ children, ...props }) => (
            <h5
              className="mt-10 text-default font-semibold typography-4"
              {...props}
            >
              {children}
            </h5>
          ),
          h6: ({ children, ...props }) => (
            <h6
              className="mt-10 text-default font-semibold typography-3"
              {...props}
            >
              {children}
            </h6>
          ),
          p: ({ children, ...props }) => (
            <p className="typography-4 text-dimmed" {...props}>
              {children}
            </p>
          ),
          strong: ({ children, ...props }) => (
            <strong className="text-default font-medium" {...props}>
              {children}
            </strong>
          ),
          a: ({ ref, href, children, ...props }) => {
            if (!href) return null;
            const isExternal =
              href.startsWith("http://") || href.startsWith("https://");
            const Wrapper = isExternal ? "a" : Link;

            if (isExternal) {
              Object.assign(props, {
                target: "_blank",
                rel: "noopener noreferrer",
              });
            }

            return (
              <Wrapper
                href={href}
                className="inline-flex items-center gap-1 text-default font-medium transition-colors hover:underline"
                {...props}
              >
                {children}
                {isExternal ? (
                  <IconExternalLink className="w-[1em] h-[1em]" />
                ) : null}
              </Wrapper>
            );
          },
          ul: ({ children, ...props }) => (
            <ul
              className="mt-10 flex flex-col gap-1 pl-[1em] list-disc"
              {...props}
            >
              {children}
            </ul>
          ),
          li: ({ children, ...props }) => <li {...props}>{children}</li>,
          pre: (props) => {
            const { className, children } = (
              props.children as ReactElement<HTMLAttributes<HTMLElement>>
            ).props;

            return (
              <Code
                theme={theme as ComponentProps<typeof Code>["theme"]}
                className="!m-0 !mt-10 border border-base-6"
                codeClassName="max-h-[420px] typography-2"
              >
                <code className={className}>{children}</code>
              </Code>
            );
          },
          code: (props) => (
            <code
              className="rounded bg-base-3 p-[0.25em_0.5em] text-[0.8em] text-default"
              {...props}
            />
          ),
          PackageManagerCommand: (props: Record<PackageManager, "string">) => (
            <PackageManagerCommand
              content={Object.entries(props).reduce(
                (content, [packageManager, command]) => ({
                  ...content,
                  [packageManager]: (
                    <MDX source={["```sh", command, "```"].join("\n")} />
                  ),
                }),
                {}
              )}
            />
          ),
          ...components,
        }}
      />
    </div>
  );
}
