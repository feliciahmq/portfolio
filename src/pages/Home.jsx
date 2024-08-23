import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';

const Home = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'projects', label: 'Projects' },
  ];

  const handleScroll = () => {
    const aboutSection = document.getElementById('about').offsetTop;
    const experiencesSection = document.getElementById('experiences').offsetTop;
    const projectsSection = document.getElementById('projects').offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition >= projectsSection) {
      setActiveSection('projects');
    } else if (scrollPosition >= experiencesSection) {
      setActiveSection('experiences');
    } else if (scrollPosition >= aboutSection) {
      setActiveSection('about');
    } else {
      setActiveSection('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative flex">
      <div className="w-full">
        <Hero />
        <div id="about">
          <About />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>

      {activeSection && (
        <div className="sticky top-20 h-screen w-1/12 flex flex-col items-center justify-center hidden">
          <ul className="relative space-y-10">
            {sections.map((section) => (
              <li key={section.id} className="relative group flex items-center">
                <a
                  href={`#${section.id}`}
                  className={`w-4 h-4 rounded-full block ${
                    activeSection === section.id ? 'bg-gray-800 dark:bg-gray-600' : 'bg-gray-300 dark:bg-gray-300'
                  }`}
                ></a>
                <span
                  className={`absolute left-6 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 dark:bg-white dark:text-gray-800 text-sm py-1 px-3 rounded-full whitespace-nowrap transition-opacity duration-300 ${
                    activeSection === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  {section.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
