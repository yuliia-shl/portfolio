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
            const {
              status,
              imgPath,
              altText,
              title,
              description,
              client,
              year,
              role,
              links,
            } = project;

            return (
              <li
                key={index}
                className="flex flex-col lg:flex-row gap-10 lg:gap-12"
              >
                <div className="relative bg-woodsmoke-950 min-w-[290px] min-h-[190px] w-full py-11.5 px-[5%] lg:px-[3%] lg:py-[4%] mb-8 lg:mb-0 flex items-center rounded-xl">
                  {status && (
                    <span className="absolute py-1.5 px-3 bg-cod-gray-950 rounded-full text-xs top-2.5 left-2.5 lg:top-4 lg:left-4">
                      {status}
                    </span>
                  )}
                  <img
                    src={imgPath}
                    alt={altText}
                    className="w-full mx-auto object-cover rounded-xl"
                  />
                </div>

                <div className="w-full flex flex-col justify-evenly">
                  <h3 className="subtitle">{title}</h3>
                  <p className="mb-4">{description}</p>

                  <div className="mb-6">
                    <p className="py-4 border-b border-abbey-800 uppercase text-white font-semibold leading-[150%]">
                      Project Info
                    </p>
                    <div className="xl:flex xl:justify-between">
                      {client && (
                        <div className="flex items-center justify-between border-b border-abbey-800 xl:w-[48%] ">
                          <p className="py-4 text-white font-medium">Client</p>
                          <p>{client}</p>
                        </div>
                      )}
                      <div
                        className={`flex items-center justify-between border-b border-abbey-800 
                       ${client ? "xl:w-[48%]" : "xl:w-[100%]"}`}
                      >
                        <p className="py-4 text-white font-medium">Year</p>
                        <p>{year}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b border-abbey-800">
                      <p className="py-4 text-white font-medium">Role</p>
                      <p className="text-right">{role}</p>
                    </div>
                  </div>

                  <ul className="text-yellow-green-300 flex gap-x-6 flex-wrap ">
                    {links.map((link, index) => {
                      const [type, url] = Object.entries(link)[0];

                      const labelMap = {
                        live: "Live Demo",
                        gitHub: "See on GitHub",
                        gitHubBack: "GitHub (Backend)",
                        swagger: "Swagger",
                      };

                      return (
                        <li key={index}>
                          <a
                            href={url}
                            className="inline-flex items-center gap-1 text-sm font-bold uppercase relative underline-animation transition duration-300 ease-in-out"
                            target="_blank"
                          >
                            {labelMap[type] || "View"}
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
