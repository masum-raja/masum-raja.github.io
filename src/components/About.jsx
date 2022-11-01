import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  },[])


  return (
    <div
      name="about"
      className="w-full pb-10 bg-gradient-to-b from-gray-800 to-black text-white h-screen pt-5"
    >
      <div data-aos="fade-up"  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
       
        <ul className="text-xl mt-10 border-red-600">
          <li>Hello! My name is Masum Raja & I enjoy creating things that live on the internet. I'm a passionate Developer, with
            strong administrative & communication skills, good attention to details & the ability to write efficient code.
          </li>
        </ul>

        <br />

        <ul className="text-xl  border-red-600">
          <li>My field of interest are building new Web Technologies and Products and also in areas related to Deep Learning 
            and Natural Launguage Processing.
          </li>
        </ul>
        
        <br />

        <ul className="text-xl  border-red-600">
          <li>I have clear, logical mind with a practical approach to problem-solving and a drive to see things through to 
            completion. I have work experience in multiple project and clone project with team collaboration.
          </li>
        </ul>


      </div>
    </div>
  );
};

export default About;
