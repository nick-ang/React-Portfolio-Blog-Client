import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../animations/work.json";
import arrowJson from "../animations/arrow3.json";

export default function About() {
  return (
    <section id="about">
      <div
        id="about-container"
        className=" container flex flex-wrap lg:flex-row md:flex-col sm:flex-col justify-center h-full items-center"
      >
        <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <br />
          <h1 className="text-4xl lg:text-5xl mb-4 font-large text-white">
            Hi, I'm Nick 👋🏼
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <br />
          <p className="mb-8 leading-relaxed">
            Currently a Software Engineer at Afterpay, I hope to be involved in
            the creation and development of life changing software that is used
            by millions of people
          </p>
          <br />
          <div className="flex justify-center">
            <a
              href="#contact"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Work With Me!
            </a>

            <a
              href="#projects"
              className="ml-10 text-gray-400 bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:text-white rounded text-lg"
            >
              Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-3/6 w-5/6">
          <br />
          <Lottie loop animationData={lottieJson} play />
        </div>
      </div>
      <div className="container w-full flex pb-20 justify-center">
        <div className="w-20 mt-20 content-center">
          <Lottie loop animationData={arrowJson} play />
        </div>
      </div>
    </section>
  );
}
