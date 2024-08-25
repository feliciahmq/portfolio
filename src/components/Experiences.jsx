import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experiences = () => {
  const experiences = [
    {
      role: 'Software Engineer',
      company_name: 'NUS Fintech Society',
      link: 'https://fintechsociety.comp.nus.edu.sg/',
      date: 'Aug 2024 - Present',
      icon: '/static/fintech_logo.png',
      description: '',
    },
    {
      role: 'Undergraduate Teaching Assistant',
      company_name: 'NUS School of Computing',
      link: 'https://www.comp.nus.edu.sg/',
      date: 'Aug 2024 - Present',
      icon: '/static/nus_logo.png',
      description: 'Mentored 20 students in functional programming and OOP in Java.',
    },
    {
      role: 'Web Developer',
      company_name: 'Advisory Singapore',
      link: 'https://advisory.sg/',
      date: 'Feb 2024 - Present',
      icon: '/static/advisory_logo.png',
      description: 'Improved site functionality by resolving feature issues during site migration to Ghost platform.',
    },
    {
      role: 'Digital Tranformation Intern',
      company_name: 'Civil Aviation Authority of Singapore',
      link: 'https://www.caas.gov.sg/',
      date: 'June 2024 - Aug 2024',
      icon: '/static/caas_logo.png',
      description: 'Developed and implemented RPA workflows with UiPath, enhancing workplace efficiency.',
    },
  ];

  const borderColors = ['#ACCBE1', '#FCC3BC', '#B7E4C7'];


  return (
    <div className="pt-14 pb-20">
      <div
        className="space-y-5 md:space-y-7 md:px-5"
      >
        <h1 className="mt-20 text-5xl font-semibold pb-8">Experiences</h1>
        
        <VerticalTimeline
          lineColor='#F2F4F6'  
          animate={ true }
        >
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ 
                background: '#F2F4F6', 
                color: '#000',
                borderBottom: 'none',
                borderTop: `7px solid ${borderColors[index % borderColors.length]}`,
              }}
              contentArrowStyle={{ 
                borderRight: '10px solid #F2F4F6' 
              }}
              date={experience.date}
              dateClassName="text-gray-600 dark:text-gray-700 lg:dark:text-gray-300"
              icon={
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-full h-full object-contain rounded-full p-1" 
                  />
                </a>
              }
              iconStyle={{
                background: '#fff',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',  
              }}
              
            >
              <h3 className="vertical-timeline-element-title font-bold">{experience.role}</h3>
              <h4 className="vertical-timeline-element-subtitle font-medium text-gray-700">{experience.company_name}</h4>
              <p className='text-base'>{experience.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experiences;
