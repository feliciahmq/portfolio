import React from 'react';
import { RoughNotation } from 'react-rough-notation';
import { RandomColorPair, useColorPair } from './RandomColorPair';

const HeroContent = () => {
  const [aboutColor, contactColor] = useColorPair();

  return (
    <div className="fade-in mt-20 flex flex-col items-start space-y-5 md:mt-32 md:space-y-7 md:px-5 lg:mt-32">
      <h1 className="text-4xl font-semibold">
        Hey, I am Felicia Hwang. <br />{' '}
      </h1>
      <p className="font-light lg:text-xl">
        Read more
        <a className="ml-2 mr-2 font-normal text-black" href="#about">
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
        or
        <a
          className="ml-2 font-normal text-black"
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
  );
};

const Hero = () => (
  <RandomColorPair>
    <HeroContent />
  </RandomColorPair>
);

export default Hero;
