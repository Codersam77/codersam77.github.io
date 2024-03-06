/*
 * Copyright 2024 Samuel Sanchez. 
 */

import { useCallback, useEffect } from "react";
import Navbar from '../Blocks/SectionForBlocks/Navbar';
import ContactForm from "../Blocks/SectionForBlocks/ContactForm";
import Projects from "../Blocks/SectionForBlocks/Projects";
import About from "../Blocks/SectionForBlocks/AboutMe";
import Magic from "../Blocks/SectionForBlocks/Magic";

const Main = () => {
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
  return (
    <div className="relative bg-primary-white w-full overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
    <Navbar />
    <Magic />
    <About/>
    <Projects />
    <ContactForm />
    <footer className="self-stretch bg-primary-white overflow-hidden flex flex-row items-center justify-center py-6 pr-[97px] pl-20 box-border max-w-full text-right text-base text-primary-black font-heading-h6-semibold mq825:pl-10 mq825:pr-12 mq825:box-border mq450:pr-5 mq450:box-border">
      <div className="flex-1 overflow-hidden flex flex-row items-center justify-center py-0 px-8 box-border gap-[20px] max-w-full mq825:flex-wrap">
        <div className="flex flex-col items-center justify-center gap-[12px] w-full">
          <div className="relative text-center text-2xl lg:text-3xl tracking-[-0.02em] leading-[20px] font-semibold">
            ©2024 Samuel Sanchez
          </div>
        </div>
      </div>
    </footer>
  </div>
);
};
/*
 * Copyright 2024 Samuel Sanchez. 
 */
export default Main;
/*
 * Copyright 2024 Samuel Sanchez. 
 */