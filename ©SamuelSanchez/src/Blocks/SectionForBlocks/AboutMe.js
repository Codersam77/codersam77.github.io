/*
 * Copyright 2024 Samuel Sanchez. 
 */

import { useEffect, useState } from "react";
import ExperienceComponent from "../ExperienceComponent";

const about = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
    }, []);
    const [activeTab, setActiveTab] = useState('skills');

    const opentab = (tabName) => {
        setActiveTab(tabName);
    };
    const skills = {
        tools: [
          { name: 'Storybook', level: 3 },
          { name: 'GithubPages', level: 3 },
          { name: 'Jupyter N.', level: 3 },
          { name: 'FireBase', level: 3 },
          { name: 'Figma', level: 3 },
          { name: 'Linux', level: 3 },
          { name: 'Unix', level: 3 },
          { name: 'Bamboo', level: 3 },
          { name: 'Git', level: 3 },
          { name: 'Github', level: 3 },
          { name: 'VS Code', level: 3 },
          { name: 'Docker', level: 2 },
          { name: 'React.T.L.', level: 2 },
        ],
        programming: [          
          { name: 'Java', level: 3 },
          { name: 'Python', level: 3 },
          { name: 'JavaScript', level: 3 },
          { name: 'TypeScript', level: 3 },
          { name: 'HTML', level: 3 },
          { name: 'CSS', level: 3 },
          { name: 'C', level: 3 },
          { name: 'C#', level: 2 },
          { name: 'C++', level: 2 },
          { name: 'Arduino', level: 2 },
          { name: 'SQL', level: 2 }
        ],
        Frameworks: [       
            { name: 'React', level: 3 },    
            { name: 'Node.js', level: 3 }, 
            { name: 'MongoDB', level: 3 },
            { name: 'Pandas', level: 3 },
            { name: 'Tailwind CSS', level: 3 },
            { name: 'Firebase', level: 3 },
            { name: 'Django', level: 3 },
            { name: 'Flask', level: 3 },
            { name: 'Express.js', level: 2 },
            { name: 'SciKit-learn', level: 2 }
        ]
      };

    const journey = {
        introduction: "Born and raised in the greater Greater Boston Area, I have had the privilege of growing up in an environment at the forefront of the technological advancements that have revolutionized our world. Coming from a mother who had very few opportunities growing up, was a first-generation student, came here on an H-1B Visa, and is currently a software engineer, I have had the opportunity to gain inspiration from her journey of overcoming many obstacles as one of the few Latino women in tech.",
        academicJourney: "Embracing my mother's legacy, I embarked on my own voyage into software engineering. My journey has been marked by a passion for innovation and solving problems as well as a commitment to diversity and cultural inclusivity, key pillars that have helped tremendously in my growth. In my high school years, at Xaverian Brothers High School, one of MA’s highest ranked exam schools, I began taking advanced computer science courses as well as tackling projects that got my hands wet with coding and Machine Learning. I also further developed my communication skills and abilities, serving as Class President all four years and Founding the Entrepreneurship Club.",
        collegeChallenges: "Transitioning to College, I have taken the most rigorous computer science classes my school offers, even taking a graduate-level statistics course, which relates heavily to work in Machine Learning (AI) in my sophomore year. In addition to this, I have gained experience in the industry of software engineering, creating projects (which you can see below) and leading innovation through different roles I have taken part in. Guided by my Afro-Hispanic roots, I have made it an effort to champion minority voices in technology, ensuring that the technology we create is accessible, equitable, and reflective of the diverse world we live in. Notably, I serve as the National Society of Black Engineers Academic Excellence Chair, which has been a fulfilling avenue to enhance my leadership skills while contributing and affirming the importance of inclusive representation in STEM fields.",
        employment2024:"In the Summer of 2024, my sophomore year, I was fortunate enough to receive several offers from some of the world's best companies. I accepted an offer from Honeywell in their Software HQ in Atlanta Georgia where I collaborated with a team of highly advanced engineers and grew in my skills! It was an incredible summer where I over-excelled in my role, receiving a return offer from my manager who was incredibly pleased with my work!", 
        schoolyear:"During the school-year I serve as a Full-Stack Software Engineer at BUILD UMass, an organization that focuses on creating technological solutions for startups, small businesses, and nonprofits. In my freshman year, I served as a Networking Engineering Intern for Sullivan and McLaughlin Companies, New England‘s largest technology contracting company.",           
        personalLife: "When I’m not programming, you can find me at the gym, enjoying a burrito at Chipotle, or immersed in a book. I’m deeply inspired by visionaries like Steve Jobs and Steve Wozniak, who believed that engineering could propel society forward. Like them, I believe that those who are bold enough to think they can change the world are often the ones who do—and I'd consider myself one of those individuals.",
        careerAspirations: "I am open to discussing Summer Internship opportunities in Software engineering for the Summer of 2025 or Winter 2024-2025. I welcome the chance to collaborate with professionals across the industry and am confident in the meaningful contributions I can bring to any team. If you're interested in working together, please feel free to reach out—my contact information is available at the bottom of the page!"
      };

      const renderPersonalJourney = () => {
        const { introduction, academicJourney, collegeChallenges, employment2024, schoolyear, personalLife, careerAspirations } = journey;

  return (
    <div>
      <p>{introduction}</p>       
      <p>{academicJourney}</p>
      <p>{collegeChallenges}</p>
      <p>{employment2024}</p>
      <p>{schoolyear}</p>
                <p>{personalLife}</p>
                <p>{careerAspirations}</p>
            </div>
        );
    };            
            const renderExperience = (category) => {
                            return experience[category].map((experience, index) => (
                            <div className="comfortability" key={index}>
                                    <li className="experience-name">{experience.name}</li>
                                    {Array.from({ length: 3 }, (_, i) => (
                                    <div key={`${experience.name}-${i}`} className={`comfort-box ${i < experience.level ? '' : 'not'}`}></div>
                                    ))}
                            </div>
                            ));
                    };
                    
                    const renderSkills = (category) => {
                        return skills[category].map((skill, index) => (
                          <div className="comfortability" key={index}>
                            <li className="skill-name">{skill.name}</li>
                            {Array.from({ length: 3 }, (_, i) => (
                              <div key={`${skill.name}-${i}`} className={`comfort-box ${i < skill.level ? '' : 'not'}`}></div>
                            ))}
                          </div>
                        ));
                      };
        return (
            <section
                className="self-stretch bg-primary-black overflow-hidden flex flex-row items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-primary-actuallywhite font-heading-h6-semibold mq825:py-[25px] mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pt-5 mq450:pr-0 mq450:pl-0 mq450:pb-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
                data-scroll-to="about"
            >
                <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-0 px-8 box-border  gap-[20px] max-w-full">
                    <div
                        className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px]  [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
                        data-animate-on-scroll
                    >

            <h1 className="about-me-title m-0 relative text-primary-white tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    About <span className="font-bold">Me</span>
            </h1>
            </div>
        <div className="container">
            <div className="row">
                <div className="about-col-1">
                </div>
                <div className="about-col-2">
                    <p>Below, you can see my skills, experiences, and read a little bit more about my journey so you can how I got to where I am today. My journey is a testament to relentless curiosity and a robust learning ethic that propels me to master new skills and thrive as a proactive leader in dynamic, high-velocity settings. As you navigate through my story, you'll discover a consistent theme of ambition and adaptability—a narrative that I continue to expand with each new challenge and learning opportunity.</p>
                    <div className="tab-titles"></div>
                    <div className="tab-titles">
                        <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => opentab('skills')}>Skills</p>
                        <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => opentab('experience')}>Experience</p>
                        <p className={`tab-links ${activeTab === 'journey' ? 'active-link' : ''}`} onClick={() => opentab('journey')}>Personal Journey</p>
                    </div>
                    {activeTab === 'skills' && (
                    <div className="tab-contents active-tab" id="skills">
                        <div className="skills-container">
                            <div className="skills-column">
                                <ul>
                                    <li><span>Languages:</span></li>
                                    {renderSkills('programming')}
                                </ul>
                            </div>
                <div className="skills-column">
                  <ul>
                    <li><span>Developer Tools:</span></li>
                    {renderSkills('tools')}
                  </ul>
                </div>
                <div className="skills-column">
                  <ul>
                    <li><span>Frameworks:</span></li>
                    {renderSkills('Frameworks')}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'experience' && (
            <div className="tab-contents active-tab" id="experience">
              <div className="experience-container">
                <div className="experience-column">
                 <ExperienceComponent
            Title={
                <span>
                  Full-Time Advanced Software Engineer Intern @{" "}
                  <a
                    href="https://www.honeywell.com/us/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Honeywell (Summer 2024)
                  </a>
                </span>
              }
              Date="May 2024 - Aug 2024"
           Text1="• Optimized Honeywell’s Connected Workforce Competency Dashboard, utilized by industry leaders such as ExxonMobil and
Shell, by migrating on-premise .Net solutions to Microsoft Azure"
           Text2="• Modernized the platform by developing a custom wrapper around their existing component library, enhancing features and adding new components using TypeScript, JSX, React, Storybook, leading to improved user experience and system performance."
           Text3="• Implemented dynamic programming techniques to streamline data handling and management, significantly boosting overall system efficiency and reliability"
           Text4="• Technologies used: TypeScript, JavaScript, JSX, HTML/CSS, TailwindCSS, React, Storybook, React Testing Library,
Microsoft Azure, Git, Github, Bamboo(CI/CD), Figma, SonarQube"
          />
           <ExperienceComponent
            Title={
                <span>
                  Bloomberg L.P. Engineering Accelerator Fellow @{" "}
                  <a
                    href="https://www.bloomberg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Bloomberg
                  </a>
                </span>
              }
              Date="May 2024 - Sep 2024"
           Text1="• Took part in exclusive 1:1 weekly Advanced SWE mentorship with Bloomberg Engineers, advancing directly to technical rounds for 2025"         
          />
                <ExperienceComponent
            Title={
                <span>
                  Full-Stack Software Engineer @{" "}
                  <a
                    href="https://buildumass.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    BUILD UMass
                  </a>
                </span>
              }
              Date="Jan 2024 - Present"
              Text1={
                <span>
                  • Collaborated on the full-stack development of{" "}
                  <a
                    href="https://www.amherstballet.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Amherst Ballet’s Website
                  </a>
                  , enhancing its online presence, and ensuring faster loading time through collaborative efforts with an agile team of software developers and product managers leveraging React
                </span>
              }
           Text2="• Ensuring a faster loading time by over 25% using Gatsby.js and improved authentication using Django REST Framework and Firebase, effectively modernizing the school’s online presence and improving user engagement"
           Text3="• Applied Agile methodologies such as Scrum stand-ups and sprints, efficiently maneuvering through technical complexities, ensuring steady progress, and keeping adherence to project timelines"
           Text4="• Collaboratively engineering robust back-end systems for Amherst Ballet with a four-member development team, focusing on database management, server-side logic, and API integration. Actively contributing to a wide range of technology solutions for startups, small businesses, and nonprofits, demonstrating a strong proficiency in both front-end and back-end development"
           Text5="• Technologies used: HTML/CSS, TypeScript, Node, React, Gatsby.js, Django, Express, Firebase, Git, Github"           
          />
          <ExperienceComponent
            Title={
                <span>
                  Full-Time Networking Engineering Intern @{" "}
                  <a
                    href="https://www.sullymac.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Sullivan and McLaughlin Companies
                  </a>
                </span>
              }
            Date="May 2023 - Aug 2023"
            Text1="• Collaborated closely with the technology department's Network Engineering team to assist in configuring and deploying 5G CradlePoint technology to over 1,000+ locations across 40+ states"
            Text2="• Expertly managed network configuration and protocol settings for 5G CradlePoint deployments, ensuring robust and secure communication across all networks. Played a pivotal role in standardizing network protocols and configurations, which enhanced system interoperability and security across multi-state installations"
            Text3="• Remotely diagnosed and resolved 150+ intricate technical issues with 5G Cradle Points, swiftly pinpointing and addressing problems to guarantee uninterrupted and optimal network performance"
          />
          <ExperienceComponent
            Title="Founder @ Young & Yoked (Successful Start-up)"
            Date="Aug 2020 - Mar 2023"
            Text1={
                <span>
                  • Founded Youth-Led Fitness Movement; 4 Team Members; Average of 100+ Paying Clients per month; Built An App & A Website With Team; Over 10,000 users; Over 15,000 Followers on Social Media;{' '}
                  <a href="https://www.youtube.com/watch?v=TctdeYHKivI" target="_blank" rel="noopener noreferrer">
                     Video of What Our App Looked Like
                  </a>
                </span>
              }
          />
          <ExperienceComponent
             Title={
                <span>
                  Researcher/Innovator @{" "}
                  <a
                    href="https://www.tks.world/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'white', textDecoration: 'underline' }}
                  >
                    The Knowledge Society
                  </a>
                </span>
              }
            Date="Sep 2020 - May 2021"
            Text1="• Gained hands-on experience through projects with AI technologies like Machine Learning and Natural Language Processing"
            Text2="• Adopted moonshot thinking for innovative problem-solving, inspired by Google's Moonshot Factory, equipping me to efficiently tackle significant software engineering challenges"
            Text3="• Applied First Principles Thinking and MECE Analysis to break down complex problems, providing me with the proper framework to devise solutions in software development"
          />
                </div>
              </div>
            </div>)}
            {activeTab === 'journey' && (
            <div className="tab-contents active-tab" id="journey">
                <div className="journey-container">
                <div className="journey-column">
                    <ul>
                    <li><span>My Journey:</span></li>
                    {renderPersonalJourney()}
                    </ul>
                </div>
                </div>
            </div>)}
        </div>
      </div>
    </div>
          </div>
    </section>
  );
};

export default about;