/*
 * Copyright 2024 Samuel Sanchez. 
 */

import { useEffect } from "react";
import ProjectHelper from "../ProjectHelper";

const Projects = () => {
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

/*
 * Copyright 2024 Samuel Sanchez. 
 */
    
    return (
      <section
      className="projects-section self-stretch bg-white overflow-hidden flex flex-col items-start justify-start py-[60px] pr-[97px] pl-20 box-border max-w-full text-left text-29xl text-zinc-500 font-heading-h6-semibold lg:pt-[25px] lg:pb-[25px] lg:box-border mq825:py-5 mq825:pr-12 mq825:pl-10 mq825:box-border mq450:pr-5 mq450:box-border mq1425:pt-[39px] mq1425:pb-[39px] mq1425:box-border"
      data-scroll-to="project"
    >
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-8 box-border gap-[20px] max-w-full">
          <div
            className="self-stretch overflow-hidden flex flex-row items-center justify-center py-5 px-0 gap-[16px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0] mq450:flex-wrap"
            data-animate-on-scroll
          >
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-normal font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              My
            </h1>
            <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-extrabold font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
              Projects
            </h1>
          </div>
          <ProjectHelper
            Image="/trial.svg"
            Number="01:"
            Title="Personal Website"
            ImageLink=""//edit
            Text1="My Website Portfolio is the perfect example of when preparation meets opportunity. Through my experiences as a developer, I have learned how to efficiently code, learn new technologies, and problem solve and I put these together to put together this beautiful website that stands out among the rest. I self-taught myself many of the technologies I needed to build it and used various skills, frameworks, and development tools like: TypeScript, HTML/CSS, Node, React, TailWind CSS, VS Code, Git, & Github."
          />
          <ProjectHelper
            Image="/searchengine.svg"
            Number="02:"
            Title="Advanced Search Engine Architecture"
            ImageLink="https://github.com/Codersam77/Advanced-Search-Engine-Architecture"
            Text1="Developed a Java-based search engine for indexing documents and determining their relevance to search terms. Utilized Maps, Sets, and Lists for data management, and implemented a tf-idf based ranking system. Focused on accurate result sorting and thorough unit testing to ensure system reliability. Skills: Java, JUnit Testing, OOP, VSCode, Git, Github, Data Structures (Maps, Sets, List)"
          />
          <ProjectHelper
            Image="/Plagiarism.png"
            Number="03:"
            Title="Sophisticated Plagiarism Detection Tool"
            ImageLink="https://github.com/Codersam77/Java-plagiarism-detection-tool"
            Text1="Developed a Java plagiarism detection tool for academic assignments using the Jaccard index and Set/List data structures. This efficient system compared submissions against extensive text databases and included thorough unit testing for reliable, accurate detection. Demonstrated expertise in algorithm design and automated testing. Skills: Java, JUnit Testing, OOP, VSCode, Git, Github, Data Structures (Sets/List)"
          />
          <ProjectHelper
            Image="/pythonautomation.svg"
            Number="04:"
            Title="Python Automation System"
            Text1="Working on a Python automation system to enhance workflow efficiencies, automating tasks like calendar access, grade retrieval, and file organization demonstrating my ability to enhance workflow efficiency in any innovative company. Skills: Python, PytTest, VS Code, Pandas, Git, Github. Docker, Selenium."
          />
          <ProjectHelper
            Image="/ballet.svg"
            Number="05:"
            Title="Amherst Ballet's Website"
            ImageLink="https://amherstballet.org/"
            Text1="Collaborated on the full-stack development of Amherst Ballet’s website, enhancing its online presence, and ensuring faster loading time through collaborative efforts with an agile team of software developers and product managers leveraging React, Gatsby.js, Django REST Framework, Firebase, Express, Git, & Github. Collaboratively engineering robust back-end systems for Amherst Ballet with a four-member development team, focusing on database management, server-side logic, and API integration."
            />
            <ProjectHelper
            Image="/Dna.jpeg"
            Number="06:"
            Title="DNA Sequence Assembly Program"
            ImageLink="https://github.com/Codersam77/Dna-Sequence-Assembly-Program"
            Text1="Created a sophisticated DNA sequence assembly program, mirroring real-world genetic research techniques; Skills: Java, JUnit Testing, OOP, VSCode, Git, Github, Data Structures."
            />
        </div>
      </section>
    )};
/*
 * Copyright 2024 Samuel Sanchez. 
 */
    export default Projects;
    /*
 * Copyright 2024 Samuel Sanchez. 
 */