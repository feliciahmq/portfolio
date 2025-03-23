import MechHub from '../assets/images/MechHub.png';
import FSO from '../assets/images/FSO.png';
import ShowerBreak from '../assets/images/ShowerBreak.png'
import Chatbot from '../assets/images/Chatbot.png'
import JobTracker from '../assets/images/JobTracker.png'

const projects = [
	{
    title: 'Job Tracker',
    description: 'Track your job hunt. A CRUD app to manage job applications, built with T3 Stack. Frequent deprecations, and scattered documentations so it got slightly annoying building this app. Loved Shadcn for their clean and modern components, and type safety with tRPC and Zod.',
    code: 'https://github.com/feliciahmq/t3-job-app',
    stack: 'NextJS, Prisma, TailwindCSS, tRPC, Zod, Shadcn-UI',
    thumbnail: JobTracker,
	},
  {
    title: 'Chatbot for Task Management',
    description: 'A chatbot for users to manage tasks via Graphical User Interface GUI. Developed CRUD operations using OOP principles for clean code.',
    code: 'https://github.com/feliciahmq/ip',
    stack: 'Java, JavaFX, Gradle, JUnit',
    thumbnail: Chatbot,
	},
  {
    title: 'Shower Reminder TeleBot',
    description: 'A fun Telegram bot for NUS Hack&Roll 2025 to encourage good hygiene by gamifying our shower routine! Features include QR code integration, ML-based photo verification for showerhead detection, a shower timer, and daily reminders. Users can track their showering habits interactively through Telegram.',
    code: 'https://github.com/feliciahmq/shower-reminder',
    stack: 'Python, Supabase, Image Classification',
    thumbnail: ShowerBreak,
  },
  {
    title: 'MechHub Ecommerce Platform',
    description: 'A full-stack e-commerce platform for mechanical keyboards, including social media features such as following, liking, forum and chat system. Used Tensorflow to calculate cosine similarity for product recommendation engine, and developed unit testings with Jest and React Testing Library.',
    code: 'https://github.com/feliciahmq/orbital-mechhub.git',
    live: 'https://orbital-mechhub.web.app/',
    stack: 'ReactJS, Firebase, Tensorflow, Zustand, Git, Jest, React Testing Library',
    thumbnail: MechHub,
  },
  {
    title: 'Full Stack Open',
    description: 'My projects & solutions to the Full Stack Open course from the University of Helsinki. Projects include Phonebook, Blog, Anecdotes applications with CRUD.',
    code: 'https://github.com/feliciahmq/full-stack-open',
    stack: 'React, Express, NodeJS, MongoDB, REST APIs, Postman, Redux, Unit Testing, Integration Testing, E2E Testing, Docker, PostgreSQL',
    thumbnail: FSO,
  },
];

export default projects