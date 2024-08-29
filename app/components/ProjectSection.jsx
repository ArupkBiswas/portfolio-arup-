"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal Portfolio website for show casing my projects",
    image: "/images/projects/Portfolio_Website.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Invoice Generation Application",
    description: "This application generates invoices based on the relevant customer details provided",
    image: "/images/projects/Invoice_Keep.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ArupkBiswas/invoice-keep",
    previewUrl: "https://pensive-kare-5ddeda.netlify.app/",
  },
  {
    id: 3,
    title: "Dash Board Application",
    description: "React based Dashboard application to track employee activities",
    image: "/images/projects/React_DashBoard.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://fantastic-choux-d860c8.netlify.app/",
  },
  {
    id: 4,
    title: "Travel Website",
    description: "Designed for the travel enthusiasts, providing reasonable packages (Static site)",
    image: "/images/projects/Nature_Website_CSS.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ArupkBiswas/UI-UX/tree/dev/SASS",
    previewUrl: "https://dreamy-entremet-f0d5f5.netlify.app/",
  },
  {
    id: 5,
    title: "Hotels Rating Site",
    description: "Site for rating your hotel experiences (Static site)",
    image: "/images/projects/Hotel_Review_Website_CSS.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ArupkBiswas/UI-UX/tree/dev/SASS",
    previewUrl: "https://dainty-gingersnap-d7ede2.netlify.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4"></h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-3 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
