/*
 * Copyright 2024 Samuel Sanchez. 
 */

import { useCallback, useEffect } from "react";
import Typewriter from 'typewriter-effect';
import '../../global.css';

const Magic = () => {
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
    /*
 * Copyright 2024 Samuel Sanchez. 
 */
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
      const onLinkedInClick = useCallback(() => {
        window.open("https://www.linkedin.com/in/samuel-sanchez-3b846818b/");
      }, []);
    
      const onGithubClick = useCallback(() => {
        window.open("https://github.com/Codersam77");
      }, []);
    return (
        <>
         <section className="self-stretch overflow-hidden flex flex-row items-center justify-center pt-[60px] pb-[1px] px-[69px] box-border max-w-full text-left text-29xl text-primary-black font-heading-h6-semibold mq825:py-[39px] mq825:px-[34px] mq825:box-border">
        <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 px-[30px] box-border gap-[92px] max-w-full lg:flex-wrap mq825:gap-[46px] mq450:gap-[23px]">
          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-5 px-0 box-border gap-[40px] min-w-[513px] min-h-[510px] max-w-full lg:min-h-[auto] mq825:min-w-full mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-center justify-center gap-[32px] max-w-full mq450:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    <span>{`Hello, I’m `}</span>
                    <b>Samuel Sanchez:</b>
                  </h1>
                </div>
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                   {/* Desktop version of Typewriter */}
                 <div className="desktop-only">
                <Typewriter
                    options={{
                        strings: ['Software Engineer', 'Problem Solver','Innovator', 'Tech-Leader'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
                {/* Mobile version of Typewriter */}
            <div className="mobile-only">
                <Typewriter
                    options={{
                        strings: ['S.W.E.','Innovator', 'Engineer','Student','TechLead'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
                </div>
                <div
                  className="flex flex-row items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full"
                  data-animate-on-scroll
                >
                  <h1 className="m-0 relative text-inherit tracking-[-0.02em] leading-[56px] font-inherit mq825:text-19xl mq825:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
                    <span>{`UMass `}</span>
                    <b>Amherst CS + MATH</b>
                  </h1>
                </div>
              </div>
              <div
                className="self-stretch relative text-base tracking-[0.02em] leading-[24px] text-zinc-500 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-top] opacity-[0]"
                data-animate-on-scroll
              >
                <p className="m-0 mb-4">{`Welcome to my website! I'm a highly motivated Computer Science and Mathematics (Computing Concentration) Double Major at the University of Massachusetts Amherst (3.74 GPA). I am dedicated to formulating the best possible technological solutions, crafting efficient code, and using technology as a catalyst for real-world change.`}</p>
                <p className="m-0">
                  I'm constantly seeking to broaden my technical skills and eager to apply what I've learned in settings that are at the forefront of technological progress. My strong academic background and continuous learning approach allows me to quickly pickup skills and be a dynamic leader in fast paced environments. Please explore my resume, projects, and skills and envision the potential of what we can achieve together...
                  </p>
              </div>
            </div>
            <div className="self-stretch h-14 flex flex-row items-start justify-start gap-[32px] social-buttons-container">
    {/* LinkedIn button */}
    <button
        className="cursor-pointer [border:none] p-4 bg-primary-black self-stretch rounded w-14 flex flex-row items-center justify-center box-border active:animate-[1s_ease_0s_infinite_normal_none_shadow-pop-tr] active:opacity-[1] hover:bg-darkslategray"
        onClick={onLinkedInClick}
    >
        <img
            className="relative w-5 h-5"
            alt="LinkedIn"
            src="/LinkedIn.svg"
        />
              </button>
              <button
        className="cursor-pointer p-4 bg-[transparent] rounded box-border w-[58px] h-[58px] flex flex-row items-center justify-center border-[2px] border-solid border-primary-black active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
        onClick={onGithubClick}
    >
        <img
            className="relative w-5 h-5"
            alt="GitHub"
            src="/Github.svg"
        />
    </button>
</div>
          </div>
          <div className="bg-primary-white w-full max-w-[377px] overflow-hidden shrink-0 flex flex-col items-center justify-center lg:flex-1 mq825:w-full mq825:min-w-0 magic-image-container p-0">
    <img
        className="hidden mq825:block relative overflow-hidden object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] lg:w-auto"
        style={{ width: '100%', height: 'auto' }}
        loading="eager"
        alt="Desktop version"
        src="/final.jpg"
        data-animate-on-scroll
    />
    <img
        className="mq825:hidden relative overflow-hidden object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] lg:w-auto"
        style={{ width: '100%', height: 'auto' }}
        loading="eager"
        alt="Mobile version"
        src="/final.jpg"
        data-animate-on-scroll
    />
</div>
    </div>
    </section>
    <div className="w-full">
    <section className="flex flex-col items-start justify-center px-[98.5px] gap-0 mq825:items-center mq825:px-4">
  <p className="text-[18px] text-primary-black mq825:pb-6 mq450:pb-6 font-semibold m-0 mb-0 leading-none mq825:text-center">
    Experiences From:
  </p>
  <div className="flex flex-row flex-wrap space-x-10 mq825:flex-col mq825:items-start mq825:space-y-4 mq825:pb-4 mq825:space-x-0">
    <img
      alt="Honeywell"
      loading="lazy"
      decoding="async"
      className="w-28 object-contain m-0 mq825:w-24"
      src="/Honeywell_logo.svg.png"
    />
    <img
      alt="Bloomberg"
      loading="lazy"
      decoding="async"
      className="w-28 object-contain m-0 mq825:w-24"
      src="/bloomberg-logo-transparent.png"
    />
    <img
      alt="Sullivan and McLaughlin Companies"
      loading="lazy"
      decoding="async"
      className="w-28 object-contain m-0 mq825:w-24"
      src="/sullivanandmclaughlinlogotrasnparent.png"
    />
    <img
      alt="Manning College of Information and Computer Sciences"
      loading="lazy"
      decoding="async"
      className="w-28 object-contain m-0 mq825:w-24"
      src="cics_logo.jpg"
    />
  </div>
</section>
</div>

  </>
    )};

export default Magic;