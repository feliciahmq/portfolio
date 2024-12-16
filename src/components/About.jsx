import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const About = () => {
  const description = `
  I'm a second-year **Computer Science** student at the **National University of Singapore**. 

  &nbsp;
  
  Currently, I'm focusing on software engineering roles while also developing my skills in data engineering. 
  Move fast and break things, that's how I learn ! 
 
  &nbsp;

  If we share similar interests, I'd love to connect for a coffee chat !

  `
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

        <div className="prose max-w-none pt-32 pb-8 md:flex-1 dark:text-gray-300">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default About;
