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
        <ul className="list-disc pl-2">
          <li>Next.js</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Nest.js</li>
          <li>PostgreSQL</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "Education",
      content: (
        <ul className="list-disc pl-2">
          <li>bac smi</li>
          <li>English studies</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "Experience",
      content: (
        <ul className="list-disc pl-2">
          <li>Google play self employed</li>
          <li>1337 coding school</li>
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
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/images/aboutimg.jpg" className="w-96 " alt="about img" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
