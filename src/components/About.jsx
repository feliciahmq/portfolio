import { RoughNotation } from 'react-rough-notation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const About = () => {
  const description = `
  I'm a second-year **Computer Science** student at the **National University of Singapore**. 

  &nbsp;
  
  Currently in school, I'm taking modules in <u>Computer Organisation and Computer Networks</u>. I also serve as a **teaching assistant for CS2030**, where I facilitate lab sessions on functional programming and object-oriented programming in Java.

  &nbsp;

  When I'm not immersed in work or studies, you'll likely find me building legos!`;

  return (
    <div className="flex flex-col items-start space-y-5 min-h-screen justify-center md:space-y-7 md:px-5">
      <h1 className="text-5xl font-semibold pt-28 dark:text-gray-100">About Me</h1>
      <div className="md:flex md:items-start md:space-x-8 md:w-full md:justify-center">
        <div className="flex flex-col items-center space-x-2 pt-20">
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
            CS @ NUS
          </div>
        </div>

        <div className="prose max-w-none pt-28 pb-8 md:flex-1 dark:text-gray-300">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default About;
