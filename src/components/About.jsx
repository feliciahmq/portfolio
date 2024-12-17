import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import avatar from '../assets/avatar.jpg';
import description from '../data/about';

const About = () => {
  
  return (
    <div className="flex flex-col items-start space-y-5 min-h-screen justify-center md:space-y-7 md:px-5">
      <h1 className="text-5xl font-semibold pt-28 dark:text-gray-100">About Me</h1>
      <div className="md:flex md:items-start md:space-x-8 md:w-full md:justify-center">
        <div className="flex flex-col items-center space-x-2 pt-20">
          <img
            src={avatar}
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

        <div className="prose max-w-2xl pt-32 pb-8 md:flex-1 dark:text-gray-300">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default About;
