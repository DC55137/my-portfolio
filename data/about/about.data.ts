import type { Section } from "../data.props"

import { IconUser } from "@tabler/icons-react"

type About = Section & {
  avatar: string
  name: string
  position: string
  description: string
  hero: {
    title: string
    subtitle: string
    imgSrc: string
    imgAlt: string
  }
  content: string
}

export const about: About = {
  avatar: "/images/about/avatar2.png",
  name: "Daniel Correa",
  position: "Software Engineer",
  description:
    "I'm an engineer with a passion for software development. My foundation in engineering, gained at university, perfectly complements my deep-rooted interest in programming. At an electrical company, I had the opportunity to apply and expand these skills, contributing to diverse programming projects. Beyond formal settings, I'm always tinkering, building applications to streamline tasks and improve efficiency. This blend of academic insight, hands-on experience, and personal initiative defines my approach to software engineering, making me both a learner and an innovator in the tech space.",
  hero: {
    title: "Hello! I'm **Daniel Correa**.",
    subtitle: "Crafting **digital solutions**, one line of code at a time, from **Australia**.",
    imgSrc: "/images/hero/hero.png",
    imgAlt: "Daniel coding on a computer",
  },
  id: "about",
  icon: IconUser,
  label: "About",
  title: "My Coding Journey",
  subtitle: "Crafting Software Solutions: A Lifelong Pursuit.",
  content: `
  My introduction to the world of technology began at university, deepening with hands-on experience at an **electrical company**. That practical exposure not only solidified my interest in coding but also highlighted its potential for **real-world problem solving**. 

  When COVID-19 came around, my career took an unexpected turn. As an **English teacher**, I found myself unable to continue my job, which led me to adapt and refocus on my passion for **software development**. Over the past four years, I have worked diligently to enhance my skills, resulting in the diverse technical expertise I possess today. 

  Although I have always been an engineer at heart, my teaching journey provided me with unique experiences and perspectives. It allowed me to blend **technical aptitude** with **effective communication**, a skill set that has proven invaluable in my current projects.

  Beyond pure coding, I view software development as a balance of **logic and creativity**. With this mindset, I've taken on projects that not only challenge me technically but also drive **positive community impact**.

  My diverse background, which includes roles in client management and even teaching English abroad, has instilled in me a unique blend of **technical aptitude and effective communication**. I've learned that while individual expertise is crucial, **collaborative endeavors** often lead to the most meaningful successes.

  Outside of the digital realm, I've embraced various cultures and perspectives through **travel and teaching**, constantly enriching my worldview. Whether I'm diving into a coding challenge, exploring a new place, or just unwinding, I always seek moments of **growth and insight**.

  In the dynamic field of software engineering, I'm eager to **collaborate, innovate, and make a difference**. Here's to the journey ahead!
  `,
}
