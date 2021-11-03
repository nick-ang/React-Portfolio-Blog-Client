import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../animations/work.json";

export default function About() {
  return (
    <section id="about">
      <div className="container flex items-center">
        <div className="flex flex-col  text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Nick.
            <br className="hidden lg:inline-block" />I love to build amazing
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
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="flex-initial">
          <Lottie
            loop
            animationData={lottieJson}
            play

          />
        </div>
      </div>
    </section>
  );
}
