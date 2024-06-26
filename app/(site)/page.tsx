import { IconBrandGithub, IconCheck } from "@tabler/icons-react";
import Image from "next/image";

import { Hero } from "./_components/hero";
import { Main } from "@/components/main";
import { MDX } from "@/components/mdx";
import { Paper } from "@/components/paper";
import { Section } from "@/components/section";
import { about } from "@/data/about";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { stack } from "@/data/stack";

import { ContactForm } from "./_components/contact-form";
import { ExperiencePage } from "./_components/experience";
import { Glass } from "../_components/glass";
import { Parallax } from "./_components/Parallax";

export default function SiteHome() {
  return (
    <>
      <Main className="gap-9 sm:gap-10">
        <Hero />
        <Glass />
        <div className="relative z-10 flex flex-col flex-auto -mt-[80vh] p-2">
          <div className="max-w-[800px] mx-auto gap-20 my-20 flex flex-col overflow-visible">
            <Section
              id={about.id}
              title={about.title}
              subtitle={about.subtitle}
            >
              <MDX source={about.content} />
              <Parallax />
            </Section>

            <Section
              id={experience.id}
              title={experience.title}
              subtitle={experience.subtitle}
              contentClassName="gap-0 group/list"
            >
              <ExperiencePage />
            </Section>
            <Section
              id={stack.id}
              title={stack.title}
              subtitle={stack.subtitle}
              contentClassName="gap-8"
            >
              {stack.groups.map((group) => (
                <div key={group.id} className="flex flex-col gap-4">
                  <h3 className="font-medium typography-5">{group.title}</h3>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-colors typography-2 text-dimmed hover:text-main-9 group"
                      >
                        <IconCheck className="size-4 text-main-10 group-hover:text-main-9 group-hover:size-5" />{" "}
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </Section>
            <Section
              id={projects.id}
              title={projects.title}
              subtitle={projects.subtitle}
              className="overflow-hidden"
            >
              {projects.groups.map((group) => (
                <div key={group.id} className="flex flex-col gap-6">
                  <h3 className="font-medium typography-5">{group.title}</h3>
                  <div className="flex flex-col gap-4 lg:gap-6 group/list">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="my-4 relative flex flex-col sm:flex-row items-start gap-3 md:gap-5 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:transition-opacity group"
                      >
                        <Paper className="absolute opacity-0 -z-10 -inset-5 lg:group-hover:opacity-100 lg:transition-opacity" />
                        {item.imgSrc && item.imgAlt ? (
                          <div className="relative flex-shrink-0 overflow-hidden transition-colors border-2 rounded border-base-6 group-hover:border-main-8">
                            <Image
                              src={item.imgSrc}
                              alt={item.imgAlt}
                              width={150}
                              height={90}
                              className="transition-transform group-hover:scale-110 will-change-transform"
                            />
                          </div>
                        ) : null}
                        <div className="flex flex-col gap-3">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium transition-colors typography-3 hover:text-main-9"
                          >
                            <div className="absolute -inset-5 bg-[red]/01" />
                            <h4>{item.title}</h4>
                          </a>
                          <p className="typography-2 text-dimmed">
                            {item.description}
                          </p>
                          {item.source ? (
                            <a
                              href={item.source}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative inline-flex items-center gap-2text-defaulttransition-colors typography-2 hover:text-accent"
                            >
                              <IconBrandGithub className="w-4 h-4" />
                              Source
                            </a>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Section>
            <ContactForm />
            <footer className="flex flex-col gap-2 pt-8 border-t border-base-6/50 sm:pt-9 typography-2 text-dimmed">
              <MDX
                source={[
                  "Built with [Next.js](https://nextjs.org) and [TailwindCSS](https://tailwindcss.com), deployed in [Vercel](https://vercel.com).",
                  "Copyright (c) 2023 Daniel Correa. All rights reserved.",
                ].join("\n\n")}
              />
            </footer>
          </div>
        </div>
      </Main>
    </>
  );
}
