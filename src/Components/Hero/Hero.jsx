import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Lottie from "lottie-react";
import DeveloperAnimation from "../../assets/Developer.json";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["I am Amit Rana", "I am a Frontend Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <main className="h-[70vh] w-full flex">
      <div className="h-[70vh] w-1/2 flex flex-col gap-4 justify-center">
        <h1 className="text-5xl my-3 mx-24 px-14 font-bold text-white ">
          Hi There!
          <h1 className="text-slate-400">{typeEffect}<span className="animate-ping">|</span></h1>
        </h1>
       
        <p className="w-full text-xl my-3 mx-32 px-7 text-white">

          Hi there! I'm a passionate frontend developer with a <br /> mission to
          share my programming knowledge with the world.
        </p>
        <button className="h-14 w-36 mt-8 mx-40 rounded-full font-bold text-xl bg-blend-luminosity p-2 bg-white text-[#1d2e6d] animate-bounce shadow-lg shadow-blue-500 ">
          {" "}
          <a href="../src\Resume\Amit-rana-resume.pdf" download="Amit_rana_resume.pdf">
            RESUME ↓
          </a>
        </button>
      </div>

      <div className="h-full w-1/2 flex items-center justify-center  ">
        <div className="ml-24 h-full min-w-[34rem] relative ">
          <Lottie className="h-full w-full absolute" animationData={DeveloperAnimation} />
        </div>
      </div>
    </main>
  );
}

export default Hero;
