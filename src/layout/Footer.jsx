import React from 'react';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import { IoLogoGithub as GithubIcon } from 'react-icons/io';
import { SiGmail as MailIcon } from 'react-icons/si';

const Footer = () => {
  const iconStyle =
    'inline-flex justify-center items-center w-10 h-10 text-center rounded-full transition';
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-6 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="text-center font-light text-ms">
        <div className="mt-10 space-x-8 my-2">
        <a
            className={`${iconStyle} hover:text-github`}
            href="https://github.com/feliciahmq"
            target="_blank"
            rel="noreferrer"
            aria-label="Follow me on Github"
          >
            <GithubIcon size={35} className='text-black dark:text-white'/>
          </a>
          <a
            href="https://www.linkedin.com/in/feliciahmq/"
            target="_blank"
            rel="noreferrer"
            className={`${iconStyle} hover:text-linkedin`}
            aria-label="Follow me on LinkedIn"
          >
            <LinkedinIcon size={35} color="#0277B5" />
          </a>
          <a
            href="mailto:feliciahmq@u.nus.edu"
            target="_blank"
            rel="noreferrer"
            className={`${iconStyle} hover:text-email`}
            aria-label="Email me"
          >
            <MailIcon size={35} color="#D44738" />
          </a>
        </div>
        &copy; 2024 Felicia Hwang
      </div>
    </footer>
  );
};

export default Footer;
