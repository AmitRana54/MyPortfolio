import React, { useState, useCallback } from "react";
import TemplateOfProject from "./TemplateOfProject";

function Projects() {
  const projects = [
    {
      img: "",
      tittle: "E-Commerce",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatibus. Facilis veritatis sit laboriosam aliquam rerum molestiae dolor illum vero repudiandae rem modi, magnam quidem, unde distinctio odio reprehenderit harum.",
      link: "www.google.com",
      teck: ["React js", "Redux", "context"],
    },
    {
      img: "",
      tittle: "E-Commerce",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatibus. Facilis veritatis sit laboriosam aliquam rerum molestiae dolor illum vero repudiandae rem modi, magnam quidem, unde distinctio odio reprehenderit harum.",
      link: "www.google.com",
      teck: ["React js", "Redux", "context"],
    },
    {
      img: "",
      tittle: "E-Commerce",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatibus. Facilis veritatis sit laboriosam aliquam rerum molestiae dolor illum vero repudiandae rem modi, magnam quidem, unde distinctio odio reprehenderit harum.",
      link: "www.google.com",
      teck: ["React js", "Redux", "context"],
    },
  ];
  const [width, setWidth] = useState(false);
 const toggle = ()=>{
    setWidth(!width)
 }
  return (
    <>
      <h1 className="text-6xl tracking-wider font-thin text text-center mb-7 ">
        Projects
      </h1>
      <div
        className={` 
           h-[90vh]
         flex flex-wrap gap-4 items-center px-28  `}
      >
        {projects.map((items,index) => (
          <TemplateOfProject
          key={index}
            img={items.img}
            tittle={items.tittle}
            details={items.detail}
            link={items.link}
            teck={items.teck}
            toggle={toggle}
            variable={width}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
