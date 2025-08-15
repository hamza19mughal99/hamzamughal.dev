import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer (React.js)",
    icon: web,
  },
  {
    title: "Backend Developer (Node.js)",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "AJCL Private Limited",
    icon: starbucks, // Placeholder, update with your logo later
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "Responsible for maintaining and developing the front-end development of various management systems projects.",
      "Initiated and independently managed various in-house departmental projects from inception to completion, delivering successful outcomes across multiple initiatives.",
      "Implementing projects' maintenance and features according to departmental requirements for enhanced usability.",
      "Worked on multiple role-based projects, ensuring secure access to respective dashboards validated by backend protocols.",
      "Currently, working individually on the front end of a large-scale government-based parking management system project for the Capital Development Authority (CDA) which recently launched their first version.",
    ],
  },
  {
    title: "Software Engineer - React JS Developer (Part Time)",
    company_name: "Freelance / Contract",
    icon: meta, // Placeholder, update with your logo later
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Jan 2025",
    points: [
      "Worked directly with clients to understand requirements and deliver tailored web applications.",
      "Utilized various technologies to build and maintain client products, ensuring high quality and performance.",
      "Managed end-to-end development, from planning to deployment, for multiple client projects.",
      "Communicated regularly with clients to provide updates and gather feedback for continuous improvement.",
      "Gained 6 months of hands-on experience in a part-time role, focusing on real-world product development.",
    ],
  },
  {
    title: "Software Engineer - React JS Developer",
    company_name: "Design Henge",
    icon: tesla, // Placeholder, update with your logo later
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Oct 2023",
    points: [
      "Collaborated with backend teams, designers, and other teams to deliver optimal solutions for enhanced user experiences.",
      "Participate in technical discussions about the structure and Implementation of new modules.",
      "Developed pixel-perfect designs, UI components, and screens in collaboration with UI/UX designers.",
      "Wrote code with a strong emphasis on reusability and dynamicity, prioritizing scalability, efficiency, and performance.",
      "Developed in-house CRMS Web App using MERN stack that incorporates functionalities such as daily attendance tracking, leave application, ticket generation, and employee payroll management.",
    ],
  },
  {
    title: "Associate Software Engineer - React JS Developer",
    company_name: "Design Henge",
    icon: shopify, // Placeholder, update with your logo later
    iconBg: "#383E56",
    date: "Jul 2021 - Jul 2022",
    points: [
      "Responsible for analyzing the requirements of application, testing, deployment, and production maintenance.",
      "Coordinated and facilitated discussions to ensure a clear understanding and alignment of project objectives.",
      "Worked with and learned various libraries according to project requirements.",
      "Integrate Backend APIS and handle the data with the latest state management Redux.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Larek",
    description:
      "Web-based platform that allows users to search, order from various providers, providing a convenient and efficient solution for online ordering needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Samurai Dogg",
    description:
      "A simple crypto website for tracking prices and trends of popular cryptocurrencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Speed Paint",
    description:
      "A web app that lets users easily create whiteboard-style animated videos, perfect for explainer content and presentations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
