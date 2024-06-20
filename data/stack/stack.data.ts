import type { Section } from "../data.props";

import { IconStack2 } from "@tabler/icons-react";

type Stack = Section & {
  groups: {
    id: string;
    title: string;
    items: {
      id: string;
      title: string;
      url: string;
    }[];
  }[];
};

// prettier-ignore
export const stack: Stack = {
  id: "stack",
  icon: IconStack2,
  label: "Stack",
  title: "Bits & Tools",
  subtitle: "From hardware to code: The complete toolkit that powers my work.",
  groups: [
    {
      id: "programming-languages",
      title: "Programming Languages",
      items: [
        { id: "javascript", title: "JavaScript", url: "https://www.javascript.com" },
        { id: "typescript", title: "TypeScript", url: "https://www.typescriptlang.org" },
        { id: "html5", title: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { id: "css3", title: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Archive/CSS3" },
        { id: "sass", title: "SASS", url: "https://sass-lang.com" },
        { id: "python", title: "Python", url: "https://www.python.org" },
        { id: "ruby", title: "Ruby", url: "https://www.ruby-lang.org/en" },
        { id: "node", title: "Node Js", url: "https://nodejs.org/en" },
      ],
    },
    {
      id: "frameworks-and-libraries",
      title: "Frameworks & Libraries",
      items: [
        { id: "react-js", title: "React.js", url: "https://reactjs.org" },
        { id: "vue-js", title: "Vue.js", url: "https://vuejs.org/" },
        { id: "angular-js", title: "Angular.js", url: "https://angularjs.org/" },
        { id: "react-native", title: "React Native", url: "https://reactnative.dev" },
        { id: "next-js", title: "Next.js", url: "https://nextjs.org" },
        { id: "remix", title: "Remix", url: "https://remix.run" },
        { id: "gatsby", title: "Gatsby", url: "https://www.gatsbyjs.com" },
        { id: "apollo-client", title: "Apollo Client", url: "https://www.apollographql.com/docs/react" },
        { id: "tailwind-css", title: "Tailwind CSS", url: "https://tailwindcss.com" },
        { id: "styled-components", title: "styled-components", url: "https://styled-components.com" },
        { id: "emotion", title: "emotion", url: "https://emotion.sh/docs/introduction" },
        { id: "material-ui", title: "Material UI", url: "https://mui.com" },
        { id: "mantine", title: "Mantine", url: "https://mantine.dev" },
        { id: "trpc", title: "tRPC", url: "https://trpc.io/" },
        { id: "framer-motion", title: "Framer Motion", url: "https://www.framer.com/api/motion" },
        { id: "graphql", title: "GraphQL", url: "https://graphql.org" },
        { id: "apollo-server", title: "Apollo Server", url: "https://www.apollographql.com/docs/apollo-server" },
        { id: "pothos-graphql", title: "Pothos GraphQL", url: "https://pothos-graphql.dev" },
        { id: "prisma", title: "Prisma", url: "https://www.prisma.io" },
        { id: "jest", title: "Jest", url: "https://jestjs.io" },
        { id: "eslint", title: "ESlint", url: "https://eslint.org" },
        { id: "prettier", title: "Prettier", url: "https://prettier.io" },
      ],
    },
    {
      id: "software",
      title: "Software & Applications",
      items: [
        { id: "git", title: "Git", url: "https://git-scm.com" },
        { id: "docker", title: "Docker", url: "https://www.docker.com" },
        { id: "node-js", title: "Node.js", url: "https://nodejs.org/en" },
        { id: "mysql", title: "MySQL", url: "https://www.mysql.com" },
        { id: "postgresql", title: "PostgreSQL", url: "https://www.postgresql.org" },
        { id: "mongodb", title: "MongoDB", url: "https://www.mongodb.com" },
        { id: "vscode", title: "Visual Studio Code", url: "https://code.visualstudio.com" },
        { id: "figma", title: "Figma", url: "https://www.figma.com" },
        { id: "adobePhotoshop", title: "Adobe Photoshop", url: "https://www.adobe.com/au/" },
        { id: "adobeIllustrator", title: "Adobe Illustrator", url: "https://www.adobe.com/au/" },
        { id: "adobeAcrobat", title: "Adobe Acrobat", url: "https://www.adobe.com/au/" },
        { id: "slack", title: "Slack", url: "https://slack.com" },
        { id: "discord", title: "Discord", url: "https://discord.com" },
        { id: "google-chrome", title: "Google Chrome", url: "https://www.google.com/chrome" },
      ],
    },
    {
      id: "services",
      title: "Third Party Services",
      items: [
        { id: "aws", title: "Amazon Web Services", url: "https://aws.amazon.com" },
        { id: "github", title: "GitHub", url: "https://github.com" },
        { id: "gitlab", title: "GitLab", url: "https://about.gitlab.com" },
        { id: "netlify", title: "Netlify", url: "https://www.netlify.com" },
        { id: "vercel", title: "Vercel", url: "https://vercel.com" },
        { id: "railway", title: "Railway", url: "https://railway.app" },
        { id: "wordpress", title: "Wordpress", url: "https://wordpress.com" },
      ],
    },
    {
      id: "hardware",
      title: "Hardware",
      items: [
        { id: "airpods-max", title: "AirPods Max", url: "https://www.apple.com/airpods-max" },
        {
          id: "display",
          title: 'Kogan 34" Curved Ultrawide WQHD ',
          url: "https://www.kogan.com/au/buy/kogan-34-wqhd-curved-219-ultrawide-100hz-freesync-hdr-gaming-monitor-hdmi21/",
        },
        { id: "macbook", title: 'MacBook Pro 16" 2021 M1', url: "https://www.apple.com/macbook-pro-14-and-16" },
        {
          id: "magic-keyboard",
          title: "Magic Keyboard",
          url: "https://www.apple.com/shop/product/MLA22LL/A/magic-keyboard-us-english",
        },
        {
          id: "magic-trackpad",
          title: "Magic Trackpad",
          url: "https://www.apple.com/shop/product/MJ2R2LL/A/magic-trackpad-2-silver",
        },
        {
          id: "MXMASTER3SFORMAC",
          title: "MX MASTER 3S FOR MAC",
          url: "https://www.logitech.com/en-au/products/mice/mx-master-3s-mac-bluetooth-mouse.910-006574.html",
        },
      ],
    },
  ],
}
