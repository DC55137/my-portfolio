import type { Section } from "../data.props";

import { IconUser } from "@tabler/icons-react";

type About = Section & {
  avatar: string;
  name: string;
  position: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    imgSrc: string;
    imgAlt: string;
  };
  content: string;
};

export const about: About = {
  avatar: "/images/about/avatar2.png",
  name: "Daniel Correa",
  position: "Software Engineer",
  description:
    "I'm an engineer with a passion for software development. My foundation in engineering, gained at university, perfectly complements my deep-rooted interest in programming. At an electrical company, I had the opportunity to apply and expand these skills, contributing to diverse programming projects. Beyond formal settings, I'm always tinkering, building applications to streamline tasks and improve efficiency. This blend of academic insight, hands-on experience, and personal initiative defines my approach to software engineering, making me both a learner and an innovator in the tech space.",
  hero: {
    title: "Hello! I'm **Daniel Correa**.",
    subtitle:
      "Crafting **digital solutions**, one line of code at a time, from **Australia**.",
    imgSrc: "/images/hero/hero.png",
    imgAlt: "Daniel coding on a computer",
  },
  id: "about",
  icon: IconUser,
  label: "About",
  title: "About Me",
  subtitle: "Crafting Software Solutions: A Lifelong Pursuit.",
  content: `
My passion for front-end engineering is deeply rooted in my love for **communication**. Through my experiences as an English teacher, I've learned to convey complex ideas with minimal language, a skill that translates seamlessly into creating intuitive user experiences. I believe in the power of **engineering** to solve real-world problems using **logic** and **creativity**. <br /><br />

I thrive on analysing available tools and brainstorming various approaches to achieve the best results. The dynamic nature of front-end development excites me, as there are always multiple ways to accomplish a task, and I enjoy finding the most **efficient** and **elegant** solutions. <br /><br />

I have always loved creating **engaging experiences** that users can intuitively interact with. My diverse background, which includes roles in engineering and teaching, has equipped me with a unique blend of **technical aptitude** and **effective communication**. This combination allows me to craft solutions that are not only technically sound but also **user-friendly** and **impactful**. <br /><br />

With experience in **cloud computing** and **AWS**, I ensure that my applications are **scalable** and **reliable**. In the dynamic field of software engineering, I'm eager to **collaborate, innovate, and make a difference**. Here's to the journey ahead! <br /><br />


  `,
};
