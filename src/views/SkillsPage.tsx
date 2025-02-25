import React from 'react'
import CardSkill from '../components/skills/CardSkill'
import { backend, frontend, idiomas, softSkills } from '../data/skillsData'
import ContainerSkills from '../components/skills/ContainerSkills'
import ContainerSoftSkills from '../components/skills/ContainerSoftSkills'

export default function SkillsPage() {
  return (
    <div className=' w-full flex flex-col gap-8 sm:w-4/5  bg-[rgb(26,26,26)] mx-auto my-2 pb-4 lg:mx-16 rounded-lg overflow-y-scroll'>
      <div className="flex mx-auto items-center my-8 animate-fade-down"> 
          <h1 className= 'text-center text-2xl p-2 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white '><span className="text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]"> 
            Habilidades y Tecnologías</span></h1>    
      </div>
      <ContainerSkills
        tecnologias={frontend}
        titulo={"Frontend"}
      />
       <ContainerSkills
        tecnologias={backend}
        titulo={"Backend"}
      />
     {/* <ContainerSoftSkills
        tecnologias={softSkills}
        titulo={"Soft Skills"}
      />
      <ContainerSoftSkills
        tecnologias={idiomas}
        titulo={"Idiomas"}
      /> */}
      
    </div>
  )
}
