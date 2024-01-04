"use client";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { m, motion, useInView } from "framer-motion";
import { animate } from "framer-motion/dom";

export default function ProjectsSection() {
  const projectsData = [
    {
      id: 1,
      title: "hix-nextjs-portfolio",
      description: "#Nextjs #TS #Tailwind ",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hixcoder/hix-nextjs-portfolio",
      previewUrl: "https://hixcoder.me",
    },
    {
      id: 2,
      title: "HixSocial",
      description: "#JS #HTML5 #CSS3 #Axios",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hixcoder/HixSocial",
      previewUrl: "",
    },
    {
      id: 3,
      title: "ft_transcendance",
      description:
        "#Nextjs #TS #Tailwind #Redux #Nestjs #Postgres #docker #socket.io",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hixcoder/ft_transcendance",
      previewUrl: "",
    },
    {
      id: 4,
      title: "hix_front-end",
      description: "#HTML5 #CSS3 ",
      image: "/images/projects/4.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hixcoder/hix_front-end",
      previewUrl: "https://hixcoder.github.io/hix_front-end/",
    },
    {
      id: 5,
      title: "Minishell",
      description: "#C #Bash",
      image: "/images/projects/5.png",
      tag: ["All", "C/C++"],
      gitUrl: "https://github.com/hixcoder/minishell",
      previewUrl: "",
    },
    {
      id: 6,
      title: "hix-checkout-page",
      description: "#Nextjs #TS #Tailwind #TanStack/Query",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/hixcoder/hix_CheckoutPage",
      previewUrl: "https://hix-checkout-page.vercel.app/",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const [tag, setTag] = useState("All");
  function handleTagChange(newTag: string) {
    setTag(newTag);
  }
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <section id="projects">
      <h1 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My projects
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={() => {
            handleTagChange("All");
          }}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={() => {
            handleTagChange("Web");
          }}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={() => {
            handleTagChange("Mobile");
          }}
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          name="C/C++"
          onClick={() => {
            handleTagChange("C/C++");
          }}
          isSelected={tag === "C/C++"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={"cardli" + index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
