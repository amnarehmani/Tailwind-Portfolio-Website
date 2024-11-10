"use client"
import React , {useState} from 'react';
import ProjectsCards from './ProjectsCards';

const projectsData = [
  {
    id: 1,
    title: "Simple Calculator",
    description: "Project 1 description",
    image: "/image/01.jpg",
    tag: ["All", "Web"],

  },
  {
    id: 2,
    title: "Responsive Website",
    description: "Project 2 description",
    image: "/image/02.jpg",
    tag: ["All", "Web"],
   
  },
  {
    id: 3,
    title: "Currency Convertor",
    description: "Project 2 description",
    image: "/image/03.jpg",
    tag: ["All", "Web"],

  },
  {
    id: 4,
    title: "Responsive Website",
    description: "Project 2 description",
    image: "/image/04.jpg",
    tag: ["All", "Web"],
    
  },
  {
    id: 5,
    title: "To Do App",
    description: "Project 2 description",
    image: "/image/05.jpg",
    tag: ["All", "Web"],

  },
  {
    id: 6,
    title: "Login/Signup Firebase",
    description: "Project 2 description",
    image: "/image/06.jpg",
    tag: ["All", "Web"],
 
  },
]

function Projects() {
  return (
 <div>
  <div className="flex justify-center items-center py-10">
  <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center">
    My Projects
  </h1>
</div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectsData.map((project) => (
          <ProjectsCards
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
