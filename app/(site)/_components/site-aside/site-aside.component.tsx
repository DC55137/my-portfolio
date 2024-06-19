import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconDownload,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Paper } from "@/components/paper";
import { Tooltip } from "@/components/tooltip";
import { about } from "@/data/about";
import { contact } from "@/data/contact";

import { SiteHomeLink } from "../site-home-link";

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

export function SiteAside() {
  return (
    <Paper
      asChild
      shape="rounded"
      className="[grid-area:aside]  border-x-0 border-b-0 lg:border-t-0 flex flex-col items-center gap-7 px-5 py-7 text-center"
    >
      <aside className=" flex flex-col items-center gap-3">
        <Image
          src={about.avatar}
          width={150}
          height={150}
          alt={`Picture of ${about.name}`}
        />
        <div className="flex flex-col">
          <div className="font-semibold typography-4">{about.name}</div>
          <div className="typography-3 text-dimmed">{about.position}</div>
        </div>
        <div className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <Tooltip
              key={link.href}
              delay={0}
              side="bottom"
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

        <p className="typography-2 text-dimmed max-w-lg">{about.description}</p>
        <div className="flex-auto" />
        <div className="flex self-stretch gap-4  mx-auto">
          <Button asChild variant="secondary">
            <a download="Daniel-Correa-resume.pdf" href="/resume.pdf">
              <IconDownload strokeWidth={1.5} className="h-[16px]" />
              Download Résumé
            </a>
          </Button>
          <Button asChild>
            <SiteHomeLink href="/#contact">
              <IconMail strokeWidth={1.5} className="h-[16px]" />
              Get In Touch
            </SiteHomeLink>
          </Button>
        </div>
      </aside>
    </Paper>
  );
}
