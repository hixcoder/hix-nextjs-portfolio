"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1  sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="min-w-full col-span-8 place-self-center text-center sm:text-left "
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-main  to-color-second">
              Hello, I&apos;m {""}
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
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl my-6 w-full">
            I&apos;m Hamza Boumahdi, a member at{" "}
            <span className="font-bold">1337 - 42 Network - UM6P</span>.
          </p>
          <div>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/hamza-boumahdi/"}
            >
              <button className="w-full sm:w-fit px-12 py-3 rounded-full mr-4 text-white bg-gradient-to-br from-color-main  to-color-second hover:to-color-second hover:via-color-main ">
                Hire me
              </button>
            </Link>
            {/* <button className="w-full sm:w-fit  p-1  rounded-full bg-transparent hover:bg-slate-800 text-white  mt-3 bg-gradient-to-br from-color-main  to-color-third">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Hire me
              </span>
            </button> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 order-first sm:order-last place-self-center lg:mt-0 mt-4 mb-6"
        >
          <img
            className=" w-56 lg:w-96"
            src="/images/dev.png"
            alt="dev image"
          />
        </motion.div>
      </div>
    </section>
  );
}
