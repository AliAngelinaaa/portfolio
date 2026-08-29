import polyglotpalace from '../images/polyglotpalace.png';
import elegantBoutique from '../images/elegant-boutique.png';
import studySyncHifi from '../images/studysync-hifi.png';
import homyfyHome from '../images/homyfy-home.png';

const CASE_STUDY_URL = `${import.meta.env.BASE_URL}Final%20Presenation.pptx`;

const featuredProjects = [
  {
    id: 'studysync',
    title: 'StudySync',
    date: 'July 2025',
    tagline: 'UI/UX case study & Figma prototype for a study planning app',
    role: 'UX Designer & Researcher',
    tech: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
    image: studySyncHifi,
    problem:
      'High school and college students struggle to manage tasks, schedule study time, and stay motivated without a tool that combines planning, focus, and progress tracking in one place.',
    solution:
      'Ran user research and MoSCoW prioritization, then designed low- and high-fidelity flows for onboarding, a task dashboard, an AI schedule generator, a focus timer, and profile settings — with a cohesive sky-blue visual system.',
    outcome:
      'Delivered a clickable Figma prototype and full case study presentation covering the end-to-end design process for CSYE 7280.',
    link: 'https://www.figma.com/proto/jPDDqiX9n0ZDuwndPnKV1Q/StudySync?node-id=0-1&t=6zHTeVTraAvAwnAR-1',
    linkLabel: 'View Prototype',
    secondaryLink: CASE_STUDY_URL,
    secondaryLinkLabel: 'Case Study (PPT)',
  },
  {
    id: 'homyfy',
    title: 'Homyfy',
    date: 'Spring 2025',
    tagline: 'Mobile home-decor app prototype built in an agile team sprint',
    role: 'Team Member & UI Designer',
    tech: ['Figma', 'Agile', 'Mobile UX', 'Prototyping'],
    image: homyfyHome,
    problem:
      'Shoppers looking for curated home furniture often bounce between scattered catalogs and generic e-commerce apps without a cohesive, design-forward browsing experience.',
    solution:
      'Collaborated with Team 7 on INFO 7245 to design Homyfy — a mobile prototype with sign-up, search, favorites, and category browsing flows, using a warm luxury aesthetic tailored to home decor.',
    outcome:
      'Delivered a clickable high-fidelity Figma prototype covering core user journeys, practicing agile iteration from requirements through final presentation.',
    link: 'https://www.figma.com/proto/XA1tBrmf8EmtiYPJoJsNhe/INFO-7245---Team-7?node-id=1-2428',
    linkLabel: 'View Prototype',
  },
  {
    id: 'elegant-boutique',
    title: 'Elegant Boutique',
    date: 'December 2025',
    tagline: 'Responsive fashion storefront for a dress boutique',
    role: 'Full-Stack Developer',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    image: elegantBoutique,
    problem:
      'A boutique needed a polished online presence where customers could browse dresses, filter by style, and explore the brand — without sacrificing elegance on mobile or desktop.',
    solution:
      'Built a multi-page storefront with a hero landing, shop catalog with filter and sort controls, and about/contact pages. Added dark mode and a green-and-white aesthetic with serif headings throughout.',
    outcome:
      'Shipped a fully responsive live demo on GitHub Pages as the final project for INFO 6150: Web Application Development.',
    link: 'https://aliangelinaaa.github.io/elegant-boutique/',
  },
  {
    id: 'polyglot-palace',
    title: 'Polyglot Palace',
    date: 'July 2023',
    tagline: 'Full-stack language-learning platform',
    role: 'Lead Designer & Redux Developer',
    tech: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
    image: polyglotpalace,
    problem:
      'Our TTP team needed to demonstrate full-stack skills in three weeks — designing, building, and deploying a scalable web app with real user flows.',
    solution:
      'Created wireframes and UML diagrams, led Redux state management across complex data flows, and helped architect the front-end around a cohesive learning experience.',
    outcome:
      'Shipped a deployed full-stack app on Netlify with structured documentation and a polished user experience.',
    link: 'https://polyglotpalace.netlify.app/',
  },
];

export default featuredProjects;
