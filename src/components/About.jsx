import React from 'react';
import { RoughNotation } from 'react-rough-notation';

const About = () => {

  return (
    <div className="flex flex-col items-start my-10 space-y-5 md:my-32 md:space-y-7 md:px-5 lg:my-32">
      <h1 id="about" className="text-5xl font-bold pt-32">About Me</h1>
      <div className="md:flex md:items-start md:space-x-8 md:w-full md:justify-center">
        <div className="flex flex-col items-center space-x-2 pt-8">
          <img
            src="/static/avatar.jpg"
            alt="avatar"
            width="600px"
            height="600px"
            className="h-72 w-72 rounded-full object-cover md:h-72 md:w-72"
          />
          <h3 className="pt-4 pb-2 text-2xl font-semibold leading-8 tracking-tight">
            Felicia Hwang
          </h3>
          <div className="text-gray-500">
            Intern @ CAAS
          </div>
        </div>

        <div className="prose max-w-none pt-8 pb-8 md:flex-1 text-gray-700">
        <p className="mt-8">
            I am a second-year <strong>Computer</strong> student at the 
            <strong> National University of Singapore</strong>.
          </p>
          <p className="mt-4">
            Currently, I am interning as an <strong>Digital Transformation Intern</strong> at 
            <a href="https://www.caas.gov.sg" className="underline" target="_blank" rel="noreferrer" >
             Civil Aviation Authority of Singapore CAAS</a>. 
             My work involves supporting digital transformation efforts in CAAS, coordinating events
             and creating content for internal communications. This internship enhances my 
             skills in project management, agile methodologies, and business process optimization.
          </p>
          <p className="mt-4">
            When I'm not immersed in work or studies, you'll likely find me lost in the
             world of Lego, building to my heart's content!
          </p>
          <p className="mt-8">
            <a
              className="!font-normal !text-black !no-underline"
              href="/static/HwangMeiQiFelicia_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <RoughNotation
                show
                type="box"
                animationDelay={250}
                animationDuration={2000}
                strokeWidth={2}
                color='#F9E5D8'
              >
                View My Resume
              </RoughNotation>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
