import React from "react";
import bonsai from "../assets/portfolio/bonsai.png";
import cronometer from "../assets/portfolio/cronometer.jpg";
import timley from "../assets/portfolio/timley.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cronometer,
      title: "Cronometer Clone",
      tag: "This is a nutrition tracking website. This was a individual project. I implemented some functionalities like login & signup user data authentication, User can track BMI & daily calorie intake.",
      stack: "React, Chakra UI, CSS, JavaScript",
      link: "https://myreact-project.netlify.app",
      github: "https://github.com/masum-raja/Cronometer",
    },
    {
      id: 2,
      src: bonsai,
      title: "HelloBonsai Clone",
      tag: "This is a freelancing management website.This was a team project where I with my teammates had created. We implemented some functionalities like login, signup, invoice generator, chatbot & etc..",
      stack: "HTML, CSS, JavaScript",
      link: "https://monumental-crisp-761be5.netlify.app",
      github: "https://github.com/masum-raja/HelloBonsai",
    },
    {
      id: 3,
      src: timley,
      title: "HelloBonsai Clone",
      tag: "This is a timr tracking website.I implemented some functionalities like login & signup user data authentication.",
      stack: "HTML, CSS, JavaScript",
      link: "https://gregarious-chebakia-e454d5.netlify.app",
      github: "https://github.com/masum-raja/Timetracking",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full pb-5 text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full mb-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, tag, stack, link, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="text-center font-bold pt-8">
                <h2>{title}</h2>
              </div>

              <div className="p-4">
                <h3>{tag}</h3>
              </div>

              <div className="p-4">
                <h3 className="font-bold mt-2 text-sky-300">
                  Tech Stacks :-{" "}
                  <span className="font-light text-white">{stack}</span>
                </h3>
              </div>

              <div className="flex items-center justify-center">
                <button className="w-2/5 px-6 py-3 m-4 duration-200 hover:scale-105 border-solid border-2 border-sky-500 rounded-lg">
                  <a href={link} target="_blank">
                    Demo
                  </a>
                </button>
                <button className="w-2/5 px-6 py-3 m-4 duration-200 hover:scale-105 border-solid border-2 border-sky-500 rounded-lg">
                  <a href={github} target="_blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
