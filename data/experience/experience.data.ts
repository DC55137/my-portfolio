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
      id: "next-digital-development",
      url: "https://nextdigitaldev.com.au",
      position: "Founder & Lead Developer",
      company: "Next Digital Development",
      startDate: "Jan 2024",
      endDate: "Present",
      address: "Gold Coast, QLD",
      description:
        "As the founder of Next Digital Development, I provide end-to-end digital solutions for businesses across various industries. I specialize in building high-performance websites with Next.js, focusing on web development, e-commerce platforms, SEO optimization, branding, and digital marketing. Notable projects include TN Lashes & Beauty, Hilltop Estate, Hope Island Beauty & Medispa, Yarn Petals GC, and DR Racing Kart Australia. My work emphasizes responsive design, seamless user experiences, and strategic SEO to drive measurable results for clients.",
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
