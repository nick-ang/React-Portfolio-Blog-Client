import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="text-gray-400 bg-gray-900 body-font mb-20"
    >
      <div className="container px-5 py-10 text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className=" bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <span className="flex-grow flex flex-col">
                  <span className="title-font font-medium text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-gray-500 text-sm uppercase">
                    {testimonial.company}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
