import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import { RandomColorPair, useColorPair } from './RandomColorPair';

const HeroContent = () => {
  const [aboutColor, contactColor] = useColorPair();

  return (
    <div className='fade-in flex flex-1 flex-col px-6 min-h-screen -translate-y-28 justify-center lg:px-10'>
      <div className="flex flex-col items-start space-y-5 md:space-y-7 md:px-5 lg:my-48">
      <h1 className="text-4xl font-bold lg:text-5xl">
        Hey, I am Felicia Hwang <br />{' '}
      </h1>
      <p className="lg:text-xl">
        Click to read more
        <a className="ml-2 mr-2 font-normal text-black cursor-pointer" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
          <RoughNotation
            show
            type="highlight"
            animationDelay={250}
            animationDuration={2000}
            color={aboutColor}
          >
            about me
          </RoughNotation>
        </a>
        <span className="block md:h-4"></span>
        or
        <a
          className="ml-2 mr-2 font-normal text-black"
          href="/static/HwangMeiQiFelicia_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <RoughNotation
            show
            type="highlight"
            animationDelay={250}
            animationDuration={2000}
            color={contactColor}
          >
            view my resume
          </RoughNotation>
        </a>
      </p>
      </div>
    </div>
  );
};

const Hero = () => (
  <RandomColorPair>
    <HeroContent />
  </RandomColorPair>
);

export default Hero;
