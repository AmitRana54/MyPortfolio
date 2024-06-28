import React, { useState } from "react";
import TemplateOfProject from "./TemplateOfProject";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";

function Projects() {
  const projects = [
    {
      img: image1,
      title: "E-Commerce",
      detail:
        "In this project, I built two panels: one for the admin and one for the user. I used MongoDB Atlas for the database and Cloudinary for storing images. This project is based on the MERN stack. For login and session management, I implemented access and refresh tokens.",
      link: "https://github.com/AmitRana54/E-commerceStore",
      tech: ["React.js", "Redux", "Context", "Node.js", "Express.js", "Mongoose"],
    },
    {
      img: image2,
      title: "Healthcare Website",
      detail:
        "This is a website for a hospital that has all the details about the staff and services, and departments, where you can also book an appointment for yourself. This site is made in React for state management, using Context API, and for CSS we used Tailwind CSS.",
      link: "https://www.google.com", // Replace with a valid URL
      tech: ["React.js", "Redux", "Context"],
    },
    
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <h1 className="text-6xl tracking-wider font-thin text-center mb-7">Projects</h1>
      <div className="flex flex-wrap justify-center gap-52 px-5 md:px-10 lg:px-20">
        {projects.map((project, index) => (
          <TemplateOfProject
            key={index}
            imgLink={project.img}
            title={project.title}
            details={project.detail}
            link={project.link}
            tech={project.tech}
            toggle={toggleExpansion}
            variable={isExpanded}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
