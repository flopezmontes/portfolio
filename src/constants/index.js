import {
  mobile,
  backend,
  web,

  php,
  symfony,
  reactjs,
  aws,
  postgresql,
  jenkins,
  kubernetes,
  python,
  javascript,
  html,
  css,
  git,
  docker,
  salesforce,

  aircury,
  strategicThinking,
  uvigo,
  mql5,
  santander,

  jose,
  fernando,

  bhashsaBridge,
  vitalHealth,
  spotifyRecommender,
  openflowSdn
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Integration Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Salesforce",
    icon: salesforce,
  },


  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data integration developer",
    company_name: "Aircury",
    icon: aircury,
    iconBg: "#E6DEDD",
    date: "March 2024 - Now",
    points: [
      "Data analysis and integration development using PHP Symfony and PostgreSQL, integrating platforms like Salesforce and the UK DfE API, focusing on efficiently downloading, processing, and transmitting data while balancing development timelines and system performance.",
      "Database administration by resolving bottlenecks, optimizing queries, and ensuring data normalization for improved efficiency and clean code.",
      "Integrations deployment and monitoring management using AWS services, while maintaining effective communication with customers and utilizing version control with Git and GitHub.",
    ],
  },
  {
    title: "Full-stack web developer",
    company_name: "Aircury",
    icon: aircury,
    iconBg: "#E6DEDD",
    date: "August 2022 - October 2023",
    points: [
      "Development and supervision of Fullstack projects using PHP Symfony and ReactJS, according to the business and technical requirements demanded by the customer.",
      "Relational databases with PostgreSQL + Doctrine.",
      "Creation of SQL data integration flows between Salesforce and various APIs.",
      "Collaboration with the support and testing teams for the resolution of the different tickets arising from the projects.",
      "Communication in English with different customers and teams using Jira, version control and working with different branches using Git and GitHub.",
      "Preparation of the projects technical documentation and participation in regular code reviews using best practices.",
      "Development of projects following agile SCRUM metodology, TDD and BDD practices followed.",
      "Usage of different development and production environments (Docker, Jenkins, Kubernetes) and cloud services (AWS)."
    ],
  },
  {
    title: "Full-stack web developer",
    company_name: "Strategic Thinking",
    icon: strategicThinking,
    iconBg: "#E6DEDD",
    date: "May 2021 - December 2021",
    points: [
      "Full-stack development using Vanilla JS, HTML and CSS, using Google Firebase Firestore Database and Materialize.css",
      "Co-founder of <a href='https://anetva2021.web.app/' target='_blank'>anetva2021.web.app</a> and maintenance of <a href='https://totalhse.web.app/' target='_blank'>totalhse.web.app</a>",
    ],
  },
  {
    title: "Intern",
    company_name: "University of Vigo",
    icon: uvigo,
    iconBg: "#E6DEDD",
    date: "February 2020 - August 2020",
    points: [
      "I carried out maintenance tasks and managed a computer space for study and learning through ICT.",
      "Constantly dealing with students and employees who needed help with both computer and printer problems.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "MQL5.com",
    icon: mql5,
    iconBg: "#E6DEDD",
    date: "December 2019 - December 2020",
    points: [
      "Development of operational scripts in Forex markets, based on technical market indicators.",
      "Direct contact with customers.",
    ],
  },
  {
    title: "Bank clerk",
    company_name: "Banco Santander",
    icon: santander,
    iconBg: "#E6DEDD",
    date: "July 2018 - August 2018",
    points: [
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Mr. López left our company to take on new and exciting challenges, but I wish he hadn't. I would hire him back in a heartbeat",
    name: "Jose Diaz",
    designation: "Managing Director",
    company: "Aircury",
    image: jose,
    source_pdf: "/documents/aircury_reference_letter.pdf"
  },
  {
    testimonial:
      "I wholeheartedly recommend Felipe to any team or organization seeking a dedicated and proficient professional",
    name: "Fernando Gómez",
    designation: "CEO",
    company: "Strategic Thinking",
    image: fernando,
    source_pdf: "/documents/strategic_thinking_reference_letter.pdf"
  },

];

const projects = [
  {
    name: "BhashsaBridge",
    description: "This project involves real-time translation between Bengali and English, focusing on audio translation while maintaining the speaker's gender identity.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
      {
        name: "ReactJS",
        color: "orange-text-gradient",
      },
    ],
    image: bhashsaBridge,
    source_code_link: "https://github.com/flopezmontes/real-time-voice-translation-system",
  },
  {
    name: "Vital Health",
    description:
      "Web application developed as an end-of-degree project. Vanilla JS and Google Firestore Database and Firebase Hosting were used, along with HTML + CSS.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firestore",
        color: "orange-text-gradient",
      },
    ],
    image: vitalHealth,
    source_code_link: "https://github.com/flopezmontes/vital-health",
  },
  {
    name: "Spotify Recommender",
    description:
      "Recommender system using the Spotify Million Dataset and the Spotify Web public API. Took part in the frontend side development using ReactJS.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Spring",
        color: "pink-text-gradient",
      },
    ],
    image: spotifyRecommender,
    source_code_link: "https://github.com/flopezmontes/spotify-recommender",
  },
  {
    name: "OpenFlow SDN",
    description:
      "OpenFlow SDN full mesh tree topology using Mininet and POX controller.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Mininet",
        color: "green-text-gradient",
      },
      {
        name: "POX",
        color: "pink-text-gradient",
      },
    ],
    image: openflowSdn,
    source_code_link: "https://github.com/flopezmontes/OpenFlowSDN",
  },
];

export { services, technologies, experiences, testimonials, projects };
