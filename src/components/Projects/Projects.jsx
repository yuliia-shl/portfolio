import React from "react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-20 border-b border-abbey-800">
      <div className="container mx-auto px-[5%] flex flex-col gap-19 lg:gap-20">
        <div>
          <h2 className="title mb-3">Featured Projects</h2>
          <p>
            Here are some of the selected projects that showcase my passion for
            full-stack development.
          </p>
        </div>

        <ul className="flex flex-col gap-19 lg:gap-30">
          {projects.map((project, index) => {
            const { path, altText, title, description, year, role, links } =
              project;

            return (
              <li
                key={index}
                className="flex flex-col lg:flex-row gap-10 lg:gap-12"
              >
                <div className="bg-woodsmoke-950 min-w-[290px] min-h-[290px] w-full p-[7%] lg:p-[3%] mb-8 flex items-center">
                  <img
                    src={path}
                    alt={altText}
                    className="w-full lg:max-w-[488px] mx-auto object-cover"
                  />
                </div>

                <div className="w-full flex flex-col justify-evenly">
                  <h3 className="subtitle">{title}</h3>
                  <p className="mb-4">{description}</p>

                  <div className="mb-8">
                    <p className="py-4 border-b border-abbey-800 uppercase text-white font-semibold leading-[150%]">
                      Project Info
                    </p>
                    <div className="flex items-center justify-between border-b border-abbey-800">
                      <p className="py-4 text-white font-medium">Year</p>
                      <p>{year}</p>
                    </div>
                    <div className="flex items-center justify-between border-b border-abbey-800">
                      <p className="py-4 text-white font-medium">Role</p>
                      <p>{role}</p>
                    </div>
                  </div>

                  <ul className="text-yellow-green-300 flex gap-6">
                    {links.map((link, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={link.live ? `${link.live}` : `${link.github}`}
                            className="inline-flex items-center gap-1 text-sm font-bold uppercase relative underline-animation hover:text-conifer-400 transition duration-300 ease-in-out"
                            target="_blank"
                          >
                            {link.live ? "Live Demo" : "See on Github"}

                            <svg className="w-5.5 h-5.5 fill-yellow-green-300 hover:fill-conifer-400">
                              <use href="/icons.svg#icon-arrow-up" />
                            </svg>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
