"use client";

import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

export default function AboutSection() {
  const TAB_DATA = [
    {
      title: "Skills",
      id: "Skills",
      content: (
        <ul className="list-disc">
          <p className="-pl-4 font-semibold">Mobile Development: </p>
          <li className="ml-6">native android - Kotlin</li>
          <li className="ml-6">Flutter - dart</li>
          <p className="-pl-4 pt-4 font-semibold">Front end Development: </p>
          <li className="ml-6">
            {" "}
            React, Nextjs, JavaScript , typescript, tailwind, Redux, Bootstrap,
            HTML, CSS.
          </li>
          <p className="-pl-4 pt-4 font-semibold">Back end Development: </p>
          <li className="ml-6">Nodejs, Express, Nestjs, Postgres-prisma</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <ul className="list-disc pl-4">
          <li>1337 - 42 Network - UM6P</li>
          <li>English studies</li>
          <li>Bachelor&apos;s degree in science math international B</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "Experience",
      content: (
        <ul className="list-disc pl-4">
          <li>Google play self employed</li>
          <li>1337 coding school member</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/aboutimg.jpg" className="w-96 " alt="about img" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I&apos;m passionate about building mobile and web apps. My aim is to
            help companies succeed in technology by using my skills. I&apos;m
            dedicated to learning and making a significant impact in the tech
            industry.
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              active={tab === "Skills"}
              selectTab={async () => handleTabChange("Skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "Education"}
              selectTab={async () => handleTabChange("Education")}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === "Experience"}
              selectTab={async () => handleTabChange("Experience")}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8 h-72">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
