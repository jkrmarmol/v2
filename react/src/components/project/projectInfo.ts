import BMISCover from '../../assets/images/bims.png';
import CatGPTCover from '../../assets/images/catgpt.png';
import SESCover from '../../assets/images/enrollment_system.png';
import FightCovid from '../../assets/images/fight-covid.gif'
import UnderDevelopment from '../../assets/images/under-development.gif'

export const projectInfo: any = [
  {
    title: 'Barangay Information Management System',
    details: 'BIMS provides LGUs with a centralized database of information that can be accessed and updated easily, allowing them to track and monitor the needs and activities of the barangay more efficiently.',
    techUsed: ['PostgreSQL', 'TypeScript', 'ReactJS', 'Node.js', 'ExpressJS', 'BootStrap'],
    image: BMISCover,
    github: 'not-available',
    view: 'https://www.youtube.com/watch?v=SZptpkdpzL0&t=21s'
  },
  {
    title: 'CatGPT',
    details: 'Have you ever wanted to chat with a playful cat? Look no further! Meet your new virtual friend - the "Meow Meow" chatbot, ready to meow back at you with accurate answers to your questions.',
    techUsed: ['TypeScript', 'Vite.js', 'ReactJS', 'Redux Toolkit'],
    image: CatGPTCover,
    github: 'https://github.com/jkrmarmol/CatGPT',
    view: 'https://catgpt-km.vercel.app/'
  },
  {
    title: 'Fight Covid & PH Covid API',
    details: 'The COVID-19 API and tracking website for the Philippines provide real-time data on cases, recoveries, and deaths, aiding in decision-making, precaution-taking, and community protection during the pandemic.',
    techUsed: ['CRA', 'ReactJS', 'Redux Toolkit', 'JavaScript', 'Node.js', 'Express.js'],
    image: FightCovid,
    github: 'https://github.com/jkrmarmol/fight-covid',
    view: 'https://fightcovid.vercel.app/'
  },
  {
    title: 'School Enrollment System',
    details: 'Introducing a web enrollment system can streamline the registration process, provide a user-friendly platform, automate tasks, reduce paperwork, eliminate manual data entry errors, and enhance the overall experience for users, ultimately saving time and resources for the organization',
    techUsed: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'BootStrap'],
    image: SESCover,
    github: 'not-available',
    view: 'https://xkurtph.000webhostapp.com/dist/view/login.php'
  },
  {
    title: 'School Management System',
    details: 'A School Management System streamlines operations, enhances communication, automates tasks, improves efficiency, and provides a user-friendly, secure, and scalable solution for schools to manage student enrollment, attendance, scheduling, grading, and reporting.',
    techUsed: ['TypeScript', 'ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Vite.js'],
    image: UnderDevelopment,
    github: 'not-available',
    view: 'not-available'
  },
]