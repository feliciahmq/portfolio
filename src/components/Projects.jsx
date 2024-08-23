import BankLandingPage from '../assets/images/BankLandingPage.png';
import MechHub from '../assets/images/MechHub.png';
import InfiniGen from '../assets/images/InfiniGen.png';
import FinHub from "../assets/images/FinHub.png"
import NFTCo from "../assets/images/NFTCo.png"

const Projects = () => {
  const works = [
    {
      title: 'MechHub Ecommerce Platform',
      description: 'A full-stack e-commerce platform for mechanical keyboards, including social media features such as following, liking, forum and chat system. Used Tensorflow to calculate cosine similarity for product recommendation engine, and developed unit testings with Jest and React Testing Library.',
      code: 'https://github.com/feliciahmq/orbital-mechhub.git',
      live: 'https://orbital-mechhub.web.app/',
      stack: 'ReactJS, Firebase, Tensorflow, Zustand, Git, Jest, React Testing Library',
      thumbnail: MechHub,
    },
    {
      title: 'NFTCo Marketplace',
      description: 'An NFT marketplace, using Solidity Smart Contract to facilitate transactions. Built an interactive frontend with ReactJS and NextJS. Have yet connected smart contract with frontend.',
      code: 'https://github.com/feliciahmq/nft-marketplace',
      live: 'https://nftco-frontend.vercel.app/',
      stack: 'Smart Contract, Solidity, ReactJS, NextJS',
      thumbnail: NFTCo,
    },
    {
      title: 'FinHub',
      description: 'A data dashboard built with MERN stack. It allows users to  visualise and analyse real-time financial data.',
      code: 'https://github.com/feliciahmq/finhub',
      live: 'https://drive.google.com/file/d/1zvYOmkbDfuLAKlEVh8YF6VTaAFmYxOXx/view?usp=drive_link',
      stack: 'React, NodeJS, ExpressJS, MongoDB, Redux Toolkit, Material UI',
      thumbnail: FinHub,
    },
    {
      title: 'InfiniGen',
      description: 'An AI generation platform that focuses on a fully interactive frontend, built to explore NextJS. The project is without API integration. ',
      code: 'https://github.com/feliciahmq/infinigen',
      live: 'https://infinigen.vercel.app/',
      stack: 'NextJS, TailwindCSS, Zustand, Shadcn UI',
      thumbnail: InfiniGen,
    },
  ];
  
  const TechStack = ({ stack }) => {
    return (
      <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
        {stack}
      </span>
    );
  };

  return (
    <div>
      <div className="pt-20 lg:pt-0"></div>
      <div
        className="flex flex-col items-start space-y-5 md:space-y-7 md:px-5"
      >
        <h1 className="pt-32 text-5xl font-semibold pb-2">Projects</h1>
        <div className="grid gap-12 mt-12 md:grid-cols-2">
          {works.map((work, index) => (
            <div
              key={index}
              className="p-4 space-y-5 border border-white group lg:gap-x-0 lg:gap-y-5 border-zinc-200 rounded-2xl"
            >
              <img
                alt="blog"
                loading="lazy"
                width="400"
                height="400"
                className="object-cover w-full h-auto rounded-2xl"
                src={work.thumbnail}
              />
              <div className="flex flex-col items-start space-y-3">
                <h2 className="text-xl font-semibold">{work.title}</h2>
                <p>{work.description}</p>
                <div className="flex flex-wrap gap-2">
                  {work.stack.split(', ').map((tech, techIndex) => (
                    <TechStack stack={tech} key={techIndex} />
                  ))}
                </div>
                <div className="flex flex-row items-center w-full justify-start space-x-3">
                  {work.live && (
                    <a
                    href={work.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-100 border rounded-lg hover:bg-zinc-900 hover:text-white dark:hover:text-black dark:hover:bg-white"
                  >
                    Live{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 icon icon-tabler icon-tabler-devices"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M13 9a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-10z"></path>
                      <path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9"></path>
                      <path d="M16 9h2"></path>
                    </svg>
                  </a>
                  )}
                  <a
                    href={work.code}
                    target="_blank"
                    rel="noreferrer"
                    className="w-auto px-3 py-1 transition duration-500 ease-in-out delay-100 border rounded-lg hover:bg-zinc-900 hover:text-white dark:hover:text-black dark:hover:bg-white"
                  >
                    Source Code{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block w-4 h-4 icon icon-tabler icon-tabler-code"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 8l-4 4l4 4"></path>
                      <path d="M17 8l4 4l-4 4"></path>
                      <path d="M14 4l-4 16"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
