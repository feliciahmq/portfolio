import MechHub from '../assets/images/MechHub.png';
import FSO from '../assets/images/FSO.png';

const projects = [
  {
    title: 'Full Stack Open',
    description: 'My projects & solutions to the Full Stack Open course from the University of Helsinki',
    code: 'https://github.com/feliciahmq/full-stack-open',
    stack: 'React, Express, NodeJS, MongoDB, REST APIs, Postman, Redux, Unit Testing, Integration Testing, E2E Testing, Docker, PostgreSQL',
    thumbnail: FSO,
  },
  {
    title: 'MechHub Ecommerce Platform',
    description: 'A full-stack e-commerce platform for mechanical keyboards, including social media features such as following, liking, forum and chat system. Used Tensorflow to calculate cosine similarity for product recommendation engine, and developed unit testings with Jest and React Testing Library.',
    code: 'https://github.com/feliciahmq/orbital-mechhub.git',
    live: 'https://orbital-mechhub.web.app/',
    stack: 'ReactJS, Firebase, Tensorflow, Zustand, Git, Jest, React Testing Library',
    thumbnail: MechHub,
  },
];

export default projects