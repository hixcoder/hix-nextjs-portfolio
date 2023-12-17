"use client";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1  sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400  to-pink-600">
              Hello, I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hamza",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                2000,
                "Mobile Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              //   style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type
          </p>
          <div>
            <button className="w-full sm:w-fit px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Hire me
            </button>
            <button className="w-full sm:w-fit  p-1  rounded-full bg-transparent hover:bg-slate-800 text-white  mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center lg:mt-0 mt-4 mb-6">
          <div className="rounded-full bg-[#181818] w-48 h-48 lg:w-80 lg:h-80 relative">
            <img
              className=" w-48 h-48 lg:h-96 lg:w-96 absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/dev.png"
              alt="dev image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}