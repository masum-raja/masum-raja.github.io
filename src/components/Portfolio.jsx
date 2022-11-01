import React, { useEffect } from "react";
import bonsai from "../assets/portfolio/bonsai.png";
import cronometer from "../assets/portfolio/cronometer.jpg";
import timley from "../assets/portfolio/timley.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cronometer,
      title: "Cronometer Clone",
      tag: "This is a nutrition tracking website. I implemented some functionalities like login & signup user data authentication. User can track BMI & daily calorie intake.",
      stack: "React, Chakra UI, CSS, JavaScript",
      link: "https://myreact-project.netlify.app",
      github: "https://github.com/masum-raja/Cronometer/tree/main/my-project",
    },
    {
      id: 2,
      src: bonsai,
      title: "HelloBonsai Clone",
      tag: "This is a freelancing management website.This was a team project where I with my teammates had created and implemented some functionalities like login, signup, invoice generator, chatbot.",
      stack: "HTML, CSS, JavaScript",
      link: "https://monumental-crisp-761be5.netlify.app",
      github: "https://github.com/masum-raja/HelloBonsai",
    },
    {
      id: 3,
      src: timley,
      title: "Timely Clone",
      tag: "This is a time tracking website. I implemented some functionalities like login & signup user data authentication.",
      stack: "HTML, CSS, JavaScript",
      link: "https://gregarious-chebakia-e454d5.netlify.app",
      github: "https://github.com/masum-raja/Timetracking",
    },
    {
      id: 4,
      src: timley,
      title: "Timely Clone",
      tag: "This is a time tracking website. I implemented some functionalities like login & signup user data authentication.",
      stack: "HTML, CSS, JavaScript",
      link: "https://gregarious-chebakia-e454d5.netlify.app",
      github: "https://github.com/masum-raja/Timetracking",
    },
  ];

  useEffect(()=>{
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  },[])

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  pb-5  text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, title, tag, stack, link, github }) => (
            <div key={id} className="flex flex-col gap-2 shadow-md shadow-gray-600 rounded-lg">
              <img 
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center font-bold pt-8">
                <h2>{title}</h2>
              </div>

              <div className="p-3  h-40">
                <h3>{tag}</h3>
              </div>

              <div className="p-3 h-16 " >
                <h3 className="font-bold mt-2 text-sky-300">
                  Tech Stacks :-{" "}
                  <span className="font-light text-white">{stack}</span>
                </h3>
              </div>

              <div className="flex items-center justify-center">
                 <a href={link} target="_blank" className="w-2/5 text-center py-3 m-4 px-6 duration-200 hover:scale-105 border-solid border-2 border-sky-500 rounded-lg" >
                  <button className=" ">
                    Demo
                  </button>
                </a>

                <a href={github} target="_blank" className="w-2/5 text-center py-3 m-4 px-6 duration-200 hover:scale-105 border-solid border-2 border-sky-500 rounded-lg">
                  <button>
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
