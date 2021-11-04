import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../animations/work.json";
import arrowJson from "../animations/arrow3.json";

export default function About() {
  return (
    <section id="about">
      <div
        id="about-container"
        className="container mx-auto flex flex-wrap md:flex-row flex-col h-full items-center"
      >
        <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-3xl lg:text-5xl sm:text-2xl mb-4 text-white">
            Hi, I'm Nick 👋🏼
            <br className="hidden lg:inline-block" /> I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Currently a Software Engineer at Afterpay, I hope to be involved in
            the creation and development of life changing software that is used
            by millions of people in their everyday lives
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-center items-center text-lg"
            >
              Work With Me!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-3/6 w-1/6">
          <Lottie loop animationData={lottieJson} play />
        </div>
      </div>
      <div className="container w-full flex pb-20 justify-center">
        <div className="w-20 content-center">

            <Lottie loop animationData={arrowJson} play />

        </div>
      </div>
    </section>
  );
}
