import type { Section } from "../data.props";

import { IconBuilding } from "@tabler/icons-react";

type Experience = Section & {
  items: {
    id: string;
    url: string;
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    address: string;
  }[];
};

export const experience: Experience = {
  id: "experience",
  icon: IconBuilding,
  label: "Experience",
  title: "Adventures in Tech",
  subtitle: "The landmarks of my coding career, one role at a time.",
  items: [
    {
      id: "step-by-step-english",
      url: "https://www.stepbystepenglish.com",
      position: "Full Stack Engineer",
      company: "Step by Step English",
      startDate: "Mar 2024",
      endDate: "Jun 2024",
      address: "Gold Coast, QLD",
      description:
        "At Step by Step English, I played a pivotal role as a Full Stack Engineer. I was responsible for designing the website using Figma and developing the application with Next.js and TailwindCSS. I implemented a Neon.js Postgres database for the backend, leveraging Prisma as the ORM to streamline database operations. Zustand was utilised for efficient state management. This online English learning platform provides interactive and engaging lessons, enabling students to complete courses online and schedule sessions with certified teachers.",
    },
    {
      id: "yarn-petals",
      url: "https://www.yarnpetals.com",
      position: "Front End Engineer",
      company: "Yarn Petals",
      startDate: "Jan 2024",
      endDate: "Mar 2024",
      address: "Gold Coast, QLD",
      description:
        "As a Front End Engineer at Yarn Petals, I developed an interactive e-commerce website that allows users to customise bouquets by mixing and matching various animals and flowers. The platform was built with Next.js for the framework, Prisma for the ORM, and Neon Postgres for the database. Zustand was used for state management. The application focuses on providing a seamless and enjoyable user experience, ensuring customers can create personalised and unique gifts. My work emphasised front-end technologies, user interface design, and interactive web development.",
    },
    {
      id: "chris-board-metal-roofing",
      url: "https://cbroofing.com.au",
      position: "Engineer and Operations Coordinator",
      company: "Chris Board Metal Roofing",
      startDate: "Oct 2020",
      endDate: "Jan 2024",
      address: "Gold Coast, QLD",
      description:
        "At Chris Board Metal Roofing, I led a significant transformation in client management processes. I designed and built a comprehensive React application for client management, initially using the MERN Stack and later transitioning to a Next.js framework for improved performance and scalability. I also constructed the company's website with a strong focus on SEO optimisation to enhance online visibility. My role included managing media advertisements to ensure a robust and effective digital presence.",
    },
    {
      id: "imagine-education",
      url: "https://imagineeducation.com.au",
      position: "English as a Second Language Teacher",
      company: "Imagine Education",
      startDate: "Jul 2015",
      endDate: "Jun 2020",
      address: "Southport, QLD & Hiroshima, Japan",
      description:
        "While teaching English in Australia and Japan, I sought innovative ways to enhance the learning experience for my students. I created a dedicated website using a Node.js application to provide students with comprehensive access to class materials, allowing them to study and reinforce their learning at home. My efforts in integrating technology into education not only fostered enhanced learning but also showcased my commitment to using technology as a tool to enrich educational experiences.",
    },
    {
      id: "tew-solutions",
      url: "https://tewsolutions.com.au",
      position: "Engineer",
      company: "TEW Solutions",
      startDate: "Jul 2013",
      endDate: "Jul 2015",
      address: "Gold Coast, QLD",
      description:
        "At TEW Solutions, I was at the forefront of integrating software solutions into our engineering projects. I actively contributed to programming the electrical systems, focusing on developing PID controls. My software-oriented approach extended to data protection, where I established backup protocols for critical company data on private servers. Additionally, my experience with AutoCAD solidified my capability to design and implement tech-driven solutions, reinforcing my proficiency in both software development and systems design.",
    },
  ],
};
