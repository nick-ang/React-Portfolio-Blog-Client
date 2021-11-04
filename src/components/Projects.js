import { CodeIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { projects } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="projects"
      className="text-gray-400 bg-gray-900 body-font mb-20"
    >
      <div
        id="project-container"
        className="container py-10 mx-auto text-center lg:px-40 p-10"
      >
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My Projects
          </h1>
        </div>
        <div className="flex flex-wrap ">
          {projects.map((project) => (
            <div className=" lg:w-1/2 p-2">
              <div data-aos="fade" className="rounded flex relative ">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover rounded-3xl object-center"
                  src={project.image}
                  style={{ width: 600, height: 270 }}
                />
                <div className="px-8 py-10 shadow-2xl relative z-10 w-100 border-4 rounded-3xl border-gray-800 bg-gray-800 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                  <a
                    href={project.link}
                    key={project.image}
                    className="sm:w-1/2 p-4"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
