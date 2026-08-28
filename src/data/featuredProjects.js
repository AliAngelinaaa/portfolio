import polyglotpalace from '../images/polyglotpalace.png';
import gitpulse1 from '../images/gitpulse1.png';
import clubfinder from '../images/clubfinder.png';

const featuredProjects = [
  {
    id: 'rosy-post',
    title: 'Rosy Post',
    date: 'July – August 2024',
    tagline: 'Internal tooling built during NYT Maker Week',
    role: 'Backend Developer',
    tech: ['Go', 'APIs', 'Agile'],
    problem:
      'During Maker Week at The New York Times, our team needed to build a useful internal product under a tight hackathon timeline while learning Go on the job.',
    solution:
      'Contributed to backend development in Go, collaborating with engineers on a tool designed for potential use within the WITU community ecosystem.',
    outcome:
      'Delivered a working prototype within the internship sprint and gained hands-on experience shipping production-adjacent code at a major media company.',
    link: null,
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
  {
    id: 'gitpulse',
    title: 'GitPulse',
    date: 'August 2023',
    tagline: 'GitHub productivity dashboard with 15 metrics',
    role: 'Accessibility Engineer',
    tech: ['React', 'GitHub API', 'UI/UX'],
    image: gitpulse1,
    problem:
      'Development teams lack a single view to track GitHub productivity trends, open issues, and team health over time.',
    solution:
      'Partnered with the UI/UX lead to design an inclusive dashboard surfacing 15 key metrics, focusing on keyboard navigation, contrast, and clear data hierarchy.',
    outcome:
      'Built an accessible dashboard used to monitor productivity trends and open issues, improving visibility for project management.',
    link: 'https://github.com/rahimaaa/SEMetrics.frontend',
  },
  {
    id: 'club-finder',
    title: 'Club Finder',
    date: 'Spring 2023',
    tagline: 'CUNY club discovery platform',
    role: 'Project Manager & Lead Developer',
    tech: ['HTML', 'CSS', 'JavaScript', 'UX Research'],
    image: clubfinder,
    problem:
      'CUNY students struggled to discover clubs and organizations across campuses — information was scattered and hard to navigate.',
    solution:
      'Led a team of four through user research, project planning, and development of a searchable club directory tailored to the CUNY ecosystem.',
    outcome:
      'Delivered a polished team project for Human-Computer Interaction, practicing real project management and user-centered design.',
    link: 'https://aliangelinaaa.github.io/ClubFinder/',
  },
];

export default featuredProjects;
