import type { Section } from "../data.props"

import { IconMail } from "@tabler/icons-react"

type Contact = Section & {
  social: {
    github: string
    x: string
    xId: string
    linkedIn: string
    cal: string
    email: string
    website: string
  }
}

export const contact: Contact = {
  id: "contact",
  icon: IconMail,
  label: "Contact",
  title: "Ready to Touch Base?",
  subtitle: "Let's make some magic together.",
  social: {
    github: "DC55137",
    x: "",
    xId: "",
    linkedIn: "daniel-correa55137",
    cal: "",
    email: "daniel.correa55137@gmail.com",
    website: "https://danielcorrea.website",
  },
}
