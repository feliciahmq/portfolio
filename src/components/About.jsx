import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const About = () => {
  const description = `
  I am a second-year **Computer Science** student at the **National University of Singapore**.  

  &nbsp;

  During my summer, I interned as a **Digital Transformation Intern** at 
  <u><a href="https://www.caas.gov.sg" target="_blank" rel="noopener"> Civil Aviation Authority of Singapore CAAS</u></a>. 
  My work involves supporting digital transformation efforts in CAAS. 
  
  &nbsp;
  
  I developed **user journey storyboards** to visualize digital processes within the office, ensuring that workflows are efficient and 
  streamlined for an optimal user experience across various use cases. Additionally, I performed **competitor analysis** of different 
  Service Management platforms to identify the best solution for our needs. Lastly, I **automated workflows using UiPath**, 
  significantly enhancing operational efficiency and boosting overall productivity at CAAS.

  &nbsp;

  When I'm not immersed in work or studies, you'll likely find me lost in the
  world of Lego, building to my heart's content!
  `;

  return (
    <div className="flex flex-col items-start space-y-5 min-h-screen justify-center md:space-y-7 md:px-5">
      <h1 id="about" className="text-5xl font-semibold pt-32 dark:text-gray-100">About Me</h1>
      <div className="md:flex md:items-start md:space-x-8 md:w-full md:justify-center">
        <div className="flex flex-col items-center space-x-2 pt-16">
          <img
            src="/static/avatar.jpg"
            alt="avatar"
            width="600px"
            height="600px"
            className="h-72 w-72 rounded-full object-cover md:h-72 md:w-72"
          />
          <h3 className="pt-4 pb-2 text-2xl font-semibold leading-8 tracking-tight dark:text-gray-100">
            Felicia Hwang
          </h3>
          <div className="text-gray-600 dark:text-gray-200">
            Intern @ CAAS
          </div>
        </div>

        <div className="prose max-w-none pt-14 pb-8 md:flex-1 dark:text-gray-300">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
          <p className="mt-8 cursor-pointer">
            <a
              className="!font-normal !text-black dark:!text-white !no-underline"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              <RoughNotation
                show
                type="box"
                animationDelay={250}
                animationDuration={2000}
                strokeWidth={2}
                color={document.documentElement.classList.contains('dark') ? '#CAF0F8' : '#F9E5D8'}
              >
                View My Projects
              </RoughNotation>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
