import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  },[])


  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4 gap-20">
        <div data-aos="fade-right" className="flex flex-col justify-center">
          <h4 className="text-sm sm:text-3xl font-bold text-white" >Hello, my name is</h4>
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-3">Masum Raja</h2>
          <h2 className="text-3xl sm:text-3xl font-bold text-white mt-5">
            I'm a Full Stack Developer
          </h2>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 mt-10 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" >
          <img
            src="https://avatars.githubusercontent.com/u/107463457?v=4"
            alt="my profile"
            className="rounded-full mx-auto w-2/4 md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
