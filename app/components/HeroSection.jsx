"use client"
import React from "react";
import Image from "next/image";

import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-700">Hello friend,  {" "}
            </span>
            <br />
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I\'m Andre',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'I\'m a Cybersecurity Professional',
        2000,
        'I\'m a Front-end Developer',
        2000,
        'I\'m an Ethical Hacker',
        2000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] sm:text-lg mb-6 lg:text-xl">
            I'm an aspiring cybersecurity professional with a passion for protecting information and systems. I am currently pursuing a bachelors in Cybersecurity and information Assurance at WGU and have completed serveral certifications: Google IT Support, Google Cybersecurity, and Security+.
          </p>

          <div>

            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-900 to-blue-300 hover:bg-slate-200 text-white">Hire Me</button>

            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-200 hover-bg-slate-100 text-white mt-3">
             <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2 ">Download CV</span>
              </button>

          </div>
          
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-gradient-to-br from-blue-700 via-transparent to-[#121212] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;