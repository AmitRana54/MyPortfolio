import React from "react";

function TemplateOfProject({
  imgLink,
  title,
  details,
  link,
  tech,
  toggle,
  variable,
}) {
  return (
    <div className="h-auto w-[30vw] rounded-lg hover:bg-indigo-900">
      <div className="relative">
        <div className="h-auto w-full flex items-center justify-center">
          <img
            className="h-60 w-[40rem] object-cover object-center rounded-xl"
            src={imgLink}
            alt=""
          />
        </div>

        <h1 className="text-3xl font-semibold m-3">{title}</h1>
        <div className="h-auto w-full">
          <p className={`text-white text-lg ml-4 ${variable ? "" : "line-clamp-2"}`}>
            {details}
          </p>
          <button className="text-lg text-white underline ml-4" onClick={toggle}>
            {variable ? "Read less" : "Read more"}
          </button>
        </div>
        <div>
          <a className="underline text-xl ml-3 font-semibold" href={link}>
            Source Code
          </a>
        </div>
        <div className="h-auto w-full flex flex-wrap">
          {tech?.map((item, index) => (
            <button
              className="p-4 font-semibold flex items-center text-lg bg-white m-3 rounded-2xl h-9 text-center"
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateOfProject;
