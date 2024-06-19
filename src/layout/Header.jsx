import React from 'react';
import { IoMdMoon as MoonIcon } from 'react-icons/io';
import { IoSunnyOutline as SunIcon } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 flex-none mx-auto w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b dark:border-b-0">
      <div className="py-3 px-3 mx-auto w-full flex justify-between align-middle max-w-6xl md:px-4">
        <a
          href="/"
          className="flex text-2xl font-bold text-gray-900 whitespace-nowrap dark:text-white"
          aria-label="Felicia Hwang - personal portfolio website"
        >
          
        </a>
        <div className="flex">
          <MoonIcon className='fade-in text-xl' />
          <SunIcon className='fade-in text-xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;
