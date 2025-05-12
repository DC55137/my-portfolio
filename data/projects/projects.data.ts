import type { Section } from "../data.props";
import { IconBriefcase } from "@tabler/icons-react";

type Projects = Section & {
  groups: {
    id: string;
    title: string;
    items: {
      id: string;
      url: string;
      source?: string;
      imgSrc?: string;
      imgAlt?: string;
      title: string;
      description: string;
    }[];
  }[];
};

export const projects: Projects = {
  id: "projects",
  icon: IconBriefcase,
  label: "Projects",
  title: "From Ideas to Reality",
  subtitle: "Client success stories, crafted with precision and passion.",
  groups: [
    {
      id: "work",
      title: "Featured Work Projects",
      items: [
        {
          id: "next-digital-development",
          url: "https://nextdigitaldev.com.au",
          imgSrc: "/images/projects/nextdigitaldev.png",
          imgAlt: "Screenshot of the Next Digital Development website",
          title: "Next Digital Development",
          description:
            "The official website for my digital agency, showcasing our commitment to high-performance web development, SEO optimization, branding, and e-commerce solutions. Built with Next.js, TypeScript, and Framer Motion, the site highlights modern design practices, Core Web Vitals optimization, and AI-driven workflows to deliver outstanding results for clients.",
        },
        {
          id: "tn-lashes-beauty",
          url: "https://tnlashesbeauty.com.au",
          imgSrc: "/images/projects/tnlashesbeauty.png",
          imgAlt: "Screenshot of the TN Lashes & Beauty website",
          title: "TN Lashes & Beauty",
          description:
            "End-to-end branding and custom web application for a premium beauty salon in Gold Coast. Features a sleek booking system, Stripe payment integration, and responsive design built with Next.js. This project highlights my ability to blend elegant design with powerful functionality.",
        },
        {
          id: "hilltop-estate",
          url: "https://hilltopestate.com.au",
          imgSrc: "/images/projects/hilltopestate.png",
          imgAlt: "Screenshot of the Hilltop Estate website",
          title: "Hilltop Estate",
          description:
            "Branding and website design for a luxury wedding venue in Mt Tamborine. Built with Next.js and Framer Motion for a premium, immersive experience. Features a custom booking system tailored for high-end wedding inquiries and events.",
        },
        {
          id: "hope-island-beauty-medispa",
          url: "https://hopeislandbeautymedispa.com.au",
          imgSrc: "/images/projects/hopeislandbeautymedispa.png",
          imgAlt: "Screenshot of the Hope Island Beauty & Medispa website",
          title: "Hope Island Beauty & Medispa",
          description:
            "Complete brand identity refresh and website development for a luxury day spa. Designed for maximum SEO performance, online bookings, and an elegant client experience. Built with Next.js and integrated custom marketing assets.",
        },
        {
          id: "yarn-petals-gc",
          url: "https://www.yarnpetalsgc.com",
          imgSrc: "/images/projects/yarnpetalsgc.png",
          imgAlt: "Screenshot of the Yarn Petals GC website",
          title: "Yarn Petals GC",
          description:
            "Custom e-commerce platform for a boutique yarn flower shop. Built with Next.js, Prisma ORM, and Stripe integration. Features dynamic product filtering, inventory management, and a fully responsive shopping experience.",
        },
        {
          id: "dr-racing-kart-australia",
          url: "https://www.drracingkart.com.au",
          imgSrc: "/images/projects/drracingkartaustralia.png",
          imgAlt: "Screenshot of the DR Racing Kart Australia website",
          title: "DR Racing Kart Australia",
          description:
            "Full website redesign and SEO strategy for Australia's premier kart racing equipment provider. Built with Next.js and optimized for high search rankings and fast performance. E-commerce enabled with Stripe integration.",
        },
        {
          id: "chris-board-metal-roofing",
          url: "https://www.cbroofing.com.au",
          imgSrc: "/images/projects/chrisboardmetalroofing.png",
          imgAlt: "Screenshot of the Chris Board Metal Roofing website",
          title: "Chris Board Metal Roofing",
          description:
            "SEO-optimized website and client management system for a local roofing company. Increased organic traffic by 150% and doubled monthly lead generation. Built with Next.js and Framer Motion for a modern, dynamic user experience.",
        },
      ],
    },
  ],
};
