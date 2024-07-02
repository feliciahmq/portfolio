import { useState, useEffect } from 'react';
import { IoMdMoon as MoonIcon } from 'react-icons/io';
import { IoSunnyOutline as SunIcon, IoDocumentTextOutline as ResumeIcon } from 'react-icons/io5';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference === 'true' || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="sticky top-0 z-50 flex-none mx-auto w-full bg-white border-b dark:bg-gray-900">
      <div className="py-3 px-3 mx-auto w-full flex justify-between align-middle max-w-6xl md:px-4">
        <a
          href="/"
          className="flex text-2xl font-bold text-gray-900 whitespace-nowrap"
          aria-label="Felicia Hwang - portfolio website"
        >
          {/* logo */}
        </a>
        <div className="flex space-x-4">
          <a href="/static/HwangMeiQiFelicia_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Felicia Hwang - Resume" 
          >
            <ResumeIcon className='cursor-pointer fade-in text-xl md:text-3xl dark:text-white'/>
          </a>
          {darkMode ? (
            <SunIcon className='fade-in text-xl md:text-3xl cursor-pointer' onClick={toggleDarkMode} />
          ) : (
            <MoonIcon className='fade-in text-xl md:text-3xl cursor-pointer' onClick={toggleDarkMode} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
