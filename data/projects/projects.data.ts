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
  subtitle: "A spectrum of projects: Some solo, some shared, all special.",
  groups: [
    {
      id: "work",
      title: "Featured Work Projects",
      items: [
        {
          id: "step-by-stepEnglish",
          url: "https://www.sbsenglish.com/",
          imgSrc: "/images/projects/step.png",
          imgAlt: "Screenshot of the Step-by-Step English website",
          title: "Step-By-Step English",
          description:
            "'Step by Step English' is my most ambitious project so far. It’s a cutting-edge digital platform combining traditional English teaching methods with modern tech. Suitable for learners of all levels, it offers interactive exercises and detailed learning materials. Built using Next.js, it features robust security from clerk.dev and efficient data management with PlanetScale and Prisma ORM. The use of TypeScript ensures reliability through type safety. This project showcases my dedication to enhancing the online English learning experience.",
        },
        {
          id: "YarnPetalsGC",
          url: "https://www.yarnpetalsgc.com/",
          imgSrc: "/images/projects/yarnpetalsgc.png",
          imgAlt: "Screenshot of the Yarn Petals website",
          title: "Yarn Petals GC",
          description:
            "Yarn Petals GC is an innovative e-commerce platform where you can customise your own yarn bouquets. I designed a sophisticated database to handle all the customisation options and ensure the website updates stock levels automatically. The user-friendly interface keeps customers informed about what's available. This project is my most visually creative work, blending technical skills with artistic flair. At Yarn Petals, we’re all about crafting beautiful, eco-friendly, and allergy-friendly yarn bouquets to celebrate life’s special moments.",
        },
        {
          id: "DrRacingKartAustralia",
          url: "https://www.drracingkart.com.au/",
          imgSrc: "/images/projects/drracingkartaustralia.png",
          imgAlt: "Screenshot of the DR Racing Kart Australia website",
          title: "DR Racing Kart Australia",
          description:
            "For DR Racing Kart Australia, I developed an e-commerce website that’s both visually appealing and highly functional. Built on the solid foundation of Next.js, the site offers an optimal user experience with seamless navigation. Using Redux for state management, it handles data efficiently and keeps the site responsive. Prisma ORM ensures organised data interactions, and TypeScript adds reliability. This project reflects my technical skills and my ability to create a user-centric online shopping experience.",
        },
        {
          id: "CMS",
          url: "https://www.cbroofing.com.au/",
          imgSrc: "/images/projects/cms.png",
          imgAlt: "Screenshot of the CMS website",
          title: "Client Management System",
          description:
            "At Chris Board Metal Roofing, I led the development of a dynamic Client Management System (CMS) to streamline operations. The CMS features a robust MongoDB database that tracks ongoing jobs in real-time, providing a centralised source of job-related information. Using ReactJS and Redux, I crafted an interactive front-end for seamless data flow. The CMS also includes a module for generating quotes and preparing essential documents easily. This custom-built solution enhanced efficiency and optimised workflows, demonstrating my commitment to leveraging technology for real-world challenges.",
        },
        {
          id: "chrisBoardMetalRoofingWebsite",
          url: "https://www.cbroofing.com.au/",
          imgSrc: "/images/projects/ChrisBoardMetalRoofing.png",
          imgAlt: "Screenshot of the Chris Board Metal Roofing 2022 website",
          title: "Chris Board Metal Roofing",
          description:
            "I designed and developed the Chris Board Metal Roofing website to perfectly capture the brand’s ethos and ensure maximum online visibility. With a focus on SEO, the site ranks prominently in search results, attracting more organic traffic. Using Framer Motion, I added vibrant animations and effects to balance professional appeal with dynamic interactivity. This project is a digital embodiment of the company’s commitment to quality and service, showcasing my ability to create engaging web experiences.",
        },
      ],
    },
  ],
};
