import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWorkOutline } from "react-icons/md";
import experiences from '../data/experiences';

const Experiences = () => {
  const borderColors = ['#B5D1E6', '#FCC3BC', '#B7E4C7'];

  return (
    <div className="pt-14 pb-20">
      <div className="space-y-5 md:space-y-7 md:px-5">
        <h1 className="mt-20 text-5xl font-semibold pb-8 text-center">Experiences</h1>

        <VerticalTimeline lineColor="#F2F4F6" animate={true}>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#FFF',
                border: '0.5px solid rgba(0, 0, 0, 0.1)', 
                borderTop: `8px solid ${borderColors[index % borderColors.length]}`,
                padding: '2rem 2rem 2rem 2rem',
                borderRadius: '0.5rem',
                boxShadow: 'none',
              }}
              contentArrowStyle={{
                borderRight: '10px solid #D1D5DB',
              }}
              date={experience.date}
              dateClassName={"date-right-align"}
              iconStyle={{ background: '#FFF', color:'#1A1A1A' }}
              icon={
                <MdOutlineWorkOutline size={30} />
              }
            >
              <div className="flex">
                <img
                  src={experience.company_logo}
                  alt={experience.company_name}
                  className="w-[50px] h-[50px] object-contain mr-4"
                />
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] text-lg leading-tight">{experience.role}</h3>
                  <h4 className="text-gray-600 text-md leading-tight mt-1">{experience.company_name}</h4>
                  {experience.description && (
                    <h5 className="text-gray-700 text-sm leading-snug mt-3">{experience.description}</h5>
                  )}
                  <div className="flex flex-wrap justify-start mt-3 gap-4">
                    {experience.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group relative inline-block transition-transform duration-200"
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="h-[30px] w-[30px] object-contain origin-center will-change-transform backface-hidden transition-transform duration-200"
                        />
                        <span
                          className="absolute text-xs text-[#1A1A1A] font-mono opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        >
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experiences;
