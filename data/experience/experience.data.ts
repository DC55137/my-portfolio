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
      id: "freelancer",
      url: "https://www.danielcorrea.website",
      position: "Freelancer",
      company: "Self-Employed",
      startDate: "Mar 2024",
      endDate: "Current",
      address: "Gold Coast, QLD",
      description:
        "Since March 2024, I have been working as a freelancer, creating innovative projects such as Step By Step English and Yarn Petals. As a freelancer, I have utilized advanced technologies like Next.js, Prisma, and PlanetScale to develop robust and scalable applications. My work on Step By Step English involved building a top-notch online teaching platform with interactive exercises and comprehensive learning materials. For Yarn Petals, I designed a unique e-commerce platform offering extensive customization options for yarn bouquets, showcasing my ability to blend technical expertise with artistic creativity.",
    },
    {
      id: "chris-board-metal-roofing",
      url: "https://cbroofing.com.au",
      position: "Engineer and Operations Coordinator",
      company: "Chris Board Metal Roofing",
      startDate: "Oct 2020",
      endDate: "Mar 2024",
      address: "Gold Coast, QLD",
      description:
        "At Chris Board Metal Roofing, I single-handedly initiated and executed a transformation in our client management processes. I designed and built a comprehensive React application for client management, beginning with the MERN Stack and later transitioning to a Next.js framework. In addition to this major project, I personally took charge of constructing the company's website with a keen focus on SEO optimization to boost online visibility. My individual efforts also encompassed media advertisement, ensuring a strong and effective digital presence for the company.",
    },
    {
      id: "imagine-education",
      url: "https://imagineeducation.com.au",
      position: "English as a second Language Teacher",
      company: "Imagine Education",
      startDate: "Jul 2015",
      endDate: "Jun 2020",
      address: "Southport, QLD & Hiroshima, Japan",
      description:
        "While teaching English, both in Australia and Japan, I always sought ways to amplify the learning experience for my students. Recognising the importance of extending education beyond the classroom, I crafted a dedicated website for students. This platform, built using a Node.js application, provided them with comprehensive access to class materials, ensuring they had resources to study and reinforce their learning at home. My efforts in integrating technology into education not only fostered enhanced learning but also showcased my commitment to using technology as a tool to enrich and facilitate educational experiences.",
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
        "In my role at TEW Solutions, I was at the forefront of integrating software solutions into our engineering projects. I actively contributed to programming the electrical systems, emphasizing the development of PID controls. My software-oriented approach extended to data protection, where I championed the establishment of backup protocols for critical company data on private servers. Additionally, my experience with AutoCAD solidified my capability to design and implement tech-driven solutions, reinforcing my proficiency in both software development and systems design.",
    },
  ],
};
