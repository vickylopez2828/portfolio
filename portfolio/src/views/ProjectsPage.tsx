import React, { useState } from 'react'
import CardProject from '../components/projects/CardProject'
import { projects } from '../data/projectsData';
import ProjectPopup from '../components/projects/ProjectPopUp';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };
 
    return (
          <div className='relative w-full flex flex-col gap-8 sm:w-4/5  bg-[rgb(26,26,26)] mx-6 my-2 pb-4 lg:mx-16 rounded-lg overflow-y-scroll'>
            
            <div className="flex justify-center items-center m-8 animate-fade-down"> 
                <h1 className= 'text-2xl sm:text-4xl font-bold text-white '>Mis<span className="text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]"> Proyectos</span></h1>    
            </div>
          
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:mx-8 md:mx-20 auto-rows-fr'>
              {projects.map(project =>(
                <CardProject
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
              ))}
              
              
            </div>
           
            {selectedProject && (
              <ProjectPopup project={selectedProject} closePopup={() => setSelectedProject(null)} />
            )}
          </div>
          
        )
}
