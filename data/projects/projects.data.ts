import type { Section } from "../data.props"

import { IconBriefcase } from "@tabler/icons-react"

type Projects = Section & {
  groups: {
    id: string
    title: string
    items: {
      id: string
      url: string
      source?: string
      imgSrc?: string
      imgAlt?: string
      title: string
      description: string
    }[]
  }[]
}

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
          id: "YarnPetalsGC",
          url: "https://www.yarnpetalsgc.com/",
          imgSrc: "/images/projects/yarnpetalsgc.png",
          imgAlt: "Screenshot of the Yarn Petals website",
          title: "Yarn Petals GC",
          description:
            "Yarn Petals GC is an innovative e-commerce platform designed to offer users customization options when creating their yarn bouquets. This unique feature required a sophisticated database design to manage the variety of customizations effectively. The website is self-sufficient in updating stock upon purchases and provides a user-friendly interface to inform customers about stock levels. With its elegant and artistic styling, Yarn Petals GC stands out as my most visually creative project. Our mission at Yarn Petals is to craft timeless blooms that create lasting memories. We produce high-quality, eco-friendly, and allergy-friendly yarn bouquets, celebrating life's special moments through sustainable practices and meticulous craftsmanship. The platform stands as a testament to my ability to blend technical expertise with creative solutions to meet user needs.",
        },
        {
          id: "step-by-stepEnglish",
          url: "https://www.stepbystepenglishschool.com/",
          imgSrc: "/images/projects/step.png",
          imgAlt: "Screenshot of the step-by-step english website",
          title: "Step-By-Step English",
          description:
            "'Step by Step English' represents my most ambitious project to date. It's a cutting-edge digital platform that merges traditional English teaching methodologies with advanced engineering techniques. Designed for learners across various proficiency levels, the application offers a plethora of interactive learning exercises and in-depth materials. Crafted using the Next.js framework, and bolstered with security features from clerk.dev and efficient data management via PlanetScale with Prisma ORM, , while the incorporation of TypeScript provides an additional layer of reliability through type safety. It stands as a testament to my dedication to redefining and enhancing the online English learning landscape.",
        },
        {
          id: "DrRacingKartAustralia",
          url: "https://www.drracingkart.com.au/",
          imgSrc: "/images/projects/drracingkartaustralia.png",
          imgAlt: "Screenshot of the DR Racing Kart Australia website",
          title: "DR Racing Kart Australia",
          description:
            "For DR Racing Kart Australia, I crafted an online e-commerce website, showcasing a blend of aesthetic appeal and cutting-edge functionality. Built on the robust foundation of the Next.js framework, the site is designed for optimal user experience and seamless navigation. With Redux integrated for state management, it ensures efficient data handling and responsive site behavior, catering to the dynamic needs of an e-commerce platform. The use of Prisma as the ORM guarantees efficient and organized data interactions, while the incorporation of TypeScript provides an additional layer of reliability through type safety. This project not only stands as a testament to my technical prowess but also to my understanding of the nuances of creating a user-centric online shopping experience.",
        },
        {
          id: "CMS",
          url: "https://www.cbroofing.com.au/",
          imgSrc: "/images/projects/cms.png",
          imgAlt: "Screenshot of the CMS website",
          title: "Client Management System",
          description:
            "At Chris Board Metal Roofing, I spearheaded the development of a dynamic Client Management System (CMS) tailored to streamline the company's operational flow. The heart of this CMS is a robust MongoDB database designed to meticulously track ongoing jobs, ensuring real-time updates and a centralized source of job-related information. ReactJS, complemented with Redux, was employed to craft the front-end of this application, enabling seamless data flow and interactive UI elements. The CMS also incorporated a sophisticated module to facilitate the generation of quotes and preparation of essential company documents with ease. This custom-built solution not only enhanced efficiency but also optimized workflows, reflecting my commitment to harnessing technology to address real-world challenges.",
        },
        {
          id: "chrisBoardMetalRoofingWebsite",
          url: "https://www.cbroofing.com.au/",
          imgSrc: "/images/projects/ChrisBoardMetalRoofing.png",
          imgAlt: "Screenshot of the Chris Board Metal Roofing 2022 website",
          title: "Chris Board Metal Roofing",
          description:
            "For Chris Board Metal Roofing, I designed and developed a company website that perfectly encapsulated the brand's ethos while ensuring maximum online visibility. Built with a keen focus on SEO, the site was optimized to rank prominently in search results, drawing increased organic traffic and potential clientele. Utilizing Framer Motion, I infused the site with vibrant, attention-grabbing animations and effects, striking a balance between professional appeal and dynamic interactivity. The end product was not just a website, but a digital embodiment of the company's commitment to quality, distinction, and service, highlighting my aptitude for creating web experiences that resonate and engage.",
        },
      ],
    },
  ],
}
