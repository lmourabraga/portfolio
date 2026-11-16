import type { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "Luã Braga",
  title: "Software Engineer",
  email: "contato@lmourabraga.com",
  location: "Porto - Portugal",
  website: "https://lmourabraga.com",
  summary: "Versatile Software Engineer with 15 years of end-to-end development experience, including 11 years in Brazil and currently 4 years in Europe. Specialised in front-end engineering, with a strong passion for complex problem-solving, modern web architectures, and building intuitive, scalable user interfaces.",
  experiences: [
    {
      id: "growin",
      role: "Software Engineer Full-Stack",
      company: "Growin (Hitachi Vantara)",
      period: "05/2023 – Present",
      location: "Lisbon - Portugal",
      description: "Consultant at Hitachi Vantara focused on enterprise full-stack applications. Collaborating on AI-assisted code generation strategies to replatform legacy PHP systems into modern React.js and .NET architecture.",
      skills: ["React.js", ".NET", "PHP", "AI-assisted Development", "Full-Stack"]
    },
    {
      id: "multivision",
      role: "Software Engineer Front-end",
      company: "Multivision (HelloPrint)",
      period: "06/2022 – 04/2023",
      location: "Lisbon - Portugal",
      description: "Worked as a remote consultant for HelloPrint (Netherlands), developing e-commerce marketplace features on PrestaShop, optimizing performance and the entire user buying journey from product selection to checkout.",
      skills: ["Front-end", "PrestaShop", "E-commerce", "Performance Optimization"]
    },
    {
      id: "americanas",
      role: "Software Engineer Front-end",
      company: "Americanas S.A.",
      period: "10/2020 – 06/2022",
      location: "São Paulo - Brazil",
      description: "Engineered key front-end features for the high-volume Fulfillment logistics platform and optimized the 'Click & Collect' application. Built scalable components using React.js and modern web standards.",
      skills: ["React.js", "Logistics", "High-Volume", "TypeScript", "Web Standards"]
    },
    {
      id: "grupo-lider",
      role: "Group Leader of Web Development",
      company: "Grupo Líder",
      period: "06/2018 – 10/2020",
      location: "Belém - Brazil",
      description: "Led a team of developers building full-stack applications with PHP, Node.js, and React.js for E-Commerce, Logistics, and Financial operations.",
      skills: ["Leadership", "Node.js", "PHP", "React.js", "Full-Stack"]
    },
    {
      id: "uepa",
      role: "Data Processing Coordinator",
      company: "State University of Pará - UEPA",
      period: "04/2017 – 05/2018",
      location: "Belém - Brazil",
      description: "Sole developer for institutional web platforms, building custom full-stack solutions using PHP, WordPress, and Bootstrap.",
      skills: ["PHP", "WordPress", "Bootstrap", "Full-Stack"]
    },
    {
      id: "ovelha-negra",
      role: "Web Developer",
      company: "Ovelha Negra",
      period: "03/2013 – 09/2015",
      location: "Belém - Brazil",
      description: "Sole developer building custom WordPress sites, web solutions, and marketing applications for social media.",
      skills: ["WordPress", "Web Development", "PHP", "JavaScript"]
    },
    {
      id: "jungle-interativa",
      role: "Web Developer",
      company: "Jungle Interativa",
      period: "04/2011 – 02/2013",
      location: "Belém - Brazil",
      description: "Developed tailored e-commerce, web application, and social media integration solutions for corporate clients.",
      skills: ["E-commerce", "Web Applications", "JavaScript", "PHP"]
    }
  ],
  education: [
    {
      id: "estacio",
      degree: "Post graduate (Technology) — Software Engineering",
      institution: "Faculdade Estácio de Belém",
      period: "2016 – 2018",
      location: "Belém - Brazil"
    },
    {
      id: "iesa",
      degree: "Bachelor (Communication) — Multimedia",
      institution: "Instituto de Estudos Superiores da Amazônia",
      period: "2009 – 2013",
      location: "Belém - Brazil"
    }
  ],
  certifications: [
    {
      id: "rocketseat",
      name: "GoStack 13 Bootcamp",
      issuer: "Rocketseat",
      date: "11/2020",
      credentialUrl: "https://app.rocketseat.com.br/certificates/7a5e4285-2925-4499-809d-d6765147199d"
    }
  ],
  skills: [
    {
      category: "Front-end (Professional)",
      items: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "CSS3", "Redux/Saga", "Storybook", "Jest", "HTML5", "Tailwind CSS"]
    },
    {
      category: "Back-end & Architecture",
      items: ["Node.js", "Express.js", "Python", "FastAPI", "PHP", "WordPress", "REST APIs", "SQL", "Magento", "Docker"]
    }
  ],
  projects: [
    {
      id: "fulfillment-platform",
      title: "Fulfillment & Click & Collect Platform",
      subtitle: "Americanas S.A.",
      description: "High-volume logistics and inventory management interfaces processing millions of daily transactions, built with React and TypeScript.",
      tags: ["React", "TypeScript", "Logistics", "High-Performance"]
    },
    {
      id: "enterprise-replatforming",
      title: "Legacy to Modern Replatforming",
      subtitle: "Growin / Hitachi Vantara",
      description: "Replatforming legacy PHP enterprise systems into modern React and .NET microservices, leveraging AI-assisted code generation workflows.",
      tags: ["React", ".NET", "PHP", "AI Integration", "Architecture"]
    },
    {
      id: "ecommerce-marketplace",
      title: "E-Commerce Checkout & Marketplace Optimization",
      subtitle: "Multivision / HelloPrint",
      description: "Optimized the entire user buying journey from product selection to checkout on high-traffic European e-commerce platforms.",
      tags: ["PrestaShop", "E-commerce", "Performance", "UX"]
    }
  ]
};
