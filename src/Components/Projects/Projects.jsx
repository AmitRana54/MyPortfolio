import React, { useState } from "react";
import TemplateOfProject from "./TemplateOfProject";

function Projects() {
  const projects = [
    {
      img: "",
      title: "E-Commerce",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatibus. Facilis veritatis sit laboriosam aliquam rerum molestiae dolor illum vero repudiandae rem modi, magnam quidem, unde distinctio odio reprehenderit harum.",
      link: "www.google.com",
      tech: ["React js", "Redux", "Context"],
    },
    {
      img: "",
      title: "E-Commerce",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatibus. Facilis veritatis sit laboriosam aliquam rerum molestiae dolor illum vero repudiandae rem modi, magnam quidem, unde distinctio odio reprehenderit harum.",
      link: "www.google.com",
      tech: ["React js", "Redux", "Context"],
    },
    {
      img: "",
      title: "E-Commerce",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatibus. Facilis veritatis sit laboriosam aliquam rerum molestiae dolor illum vero repudiandae rem modi, magnam quidem, unde distinctio odio reprehenderit harum.",
      link: "www.google.com",
      tech: ["React js", "Redux", "Context"],
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <h1 className="text-6xl tracking-wider font-thin text-center mb-7">Projects</h1>
      <div className="flex flex-wrap justify-center gap-4 px-5 md:px-10 lg:px-20">
        {projects.map((project, index) => (
          <TemplateOfProject
            key={index}
            img={project.img}
            title={project.title}
            details={project.detail}
            link={project.link}
            tech={project.tech}
            toggle={toggleExpansion}
            isExpanded={isExpanded}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;