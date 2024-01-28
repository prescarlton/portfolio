"use client"
import { useState } from "react"
import Card from "./card"
import ProjectTile from "./project-tile"

const ProjectsCard = () => {
  const [activeProject, setActiveProject] = useState("tido")
  const projects = [
    {
      name: "tido",
      logoPath: "tido.svg",
      description: `tido is my passion project and my retirement plan. I've been working on 
it since early 2019, and have scrapped and rewritten it more times than I can count. I have 
a big grandoise vision of what it will one day be, and would love to share it with anyone 
that will listen. It's a project that's given me exposure to more than just the dev side 
of things. I've had to think about marketing, business strategy, and even silly things like tax implications.`,
      tldr: "My personal project; A super fancy PM software that will make you unsubscribe to all of the other tools your company pays way too much money for.",
    },
    {
      name: "Candidate Pathways",
      logoPath: "candidate_pathways.svg",
      description: "A tool to help you find your next PM candidate",
      tldr: "I co-lead a team to create an e-learning platform to teach people how to run for public office.",
    },
    {
      name: "Pollen",
      logoPath: "pollen.png",
      description:
        "A marketing tool that allows you to post to all of your social media accounts with as much ease as possible",
      tldr: "I lead a team to create a platform allowing you to seamlessly connect and post to all of your social media accounts.",
    },
    {
      name: "St. Louis Aquarium",
      logoPath: "stlaq.svg",
      description:
        "I was apart of a team that was responsible for all the technology and exhibits at the new St. Louis Aquarium",
      tldr: "I spent a month in an aquarium, hanging out with fish and coding. I helped build all the exhibits, including an OpenCV project and a Raspberry Pi build.",
    },
    {
      name: "Kennedy Space Center",
      logoPath: "nasa.png",
      description:
        "Okay, this one's a bit of a stretch. I didn't explicitly work for NASA but it sounds a lot cooler to say I did. I got to work with Kennedy Space Center to help revamp their Saturn V building, building the interactives and exhibits for it.",
      tldr: "Okay, technically not NASA, but still KSC. I helped build all the exhibits, and then spent a few weeks as on-site installation and support.",
    },
  ]
  const onProjectClick = (projName: string) => {
    setActiveProject(projName)
  }

  const activeProjectData = projects.find((proj) => proj.name == activeProject)

  return (
    <Card
      header="projects"
      className="lg:col-span-2 lg:row-span-4 lg:row-start-4"
    >
      <div className="flex gap-2 flex-wrap items-center justify-center px-16 mt-4">
        {projects.map((proj) => (
          <ProjectTile
            key={proj.name}
            name={proj.name}
            logoPath={proj.logoPath}
            selected={proj.name == activeProject}
            onClick={() => onProjectClick(proj.name)}
          />
        ))}
      </div>
      <div className="mt-4 h-48 border-slate-500/20  dark:border-white/10 border rounded-lg ">
        <div className="font-bold border-b border-slate-500/20 dark:border-b-white/10 px-3 py-1 flex gap-4">
          <div className="flex gap-2 items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <h3>{activeProject}</h3>
        </div>
        <p className="px-3 py-2">{activeProjectData?.tldr}</p>
      </div>
    </Card>
  )
}
export default ProjectsCard
