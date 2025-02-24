import React, { useState } from 'react'
import SkillItem from '../education/SkillItem'
import { SiGithub } from 'react-icons/si'
import { BiLinkExternal } from "react-icons/bi";

export default function CardProject({ project, onClick }) {
    
  return (
    /* From Uiverse.io by vishalmet */ 
    <div className="max-w-4xl w-11/12 mx-auto ">
    <div
        className="relative  sm:min-h-[350px] h-full flex flex-col gap-2 justify-between group bg-gray-900/50 backdrop-blur-xl shadow-lg rounded-2xl p-6 sm:p-8 hover:border hover:border-gray-800"
    >
        <div
        className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#0a87f5] rounded-tl-2xl "
        ></div>
        <div
        className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#fc31f9] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
        className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#fc31f9] rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
        <div
        className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#0a87f5] rounded-br-2xl "
        ></div>

        <div className="relative flex flex-col justify-between gap-4">
        <div
            className="absolute -top-12 left-0 px-6 py-2 bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-full text-sm text-white"
        >
            {project.category}
        </div>
        <div>
            <h2 className="text-lg sm:text-xl font-bold text-white line-clamp-2">{project.title}</h2>
            <h3
                className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]"
            >
                {project.subtitle}
            </h3> 
        </div>
        <div className="flex-grow">
           <p className="text-sm sm:text-base text-gray-300 min-h-24 line-clamp-4">
            {project.description}
        </p> 
        </div>
        

        <div className="flex flex-wrap gap-2 text-gray-300 line-clamp-1">
            {
                project.skills.map((skill, index) =>(
                    <div key={index} className='w-fit py-1 px-2 md:px-4 rounded-lg flex gap-2 items-center bg-[rgb(13,13,13)]'>
                        <p className='uppercase text-xs font-medium md:font-black text-[rgb(146,146,146)]'>{skill}</p>
                    </div>
                ))
            }
            
           
        </div>

        <div className="flex gap-8 items-center justify-between mt-auto">
            <div className='w-fit  my-2 hover:shadow-[0_0_20px_rgba(174,49,252,0.6)] bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-full'>
                <div className=' m-0.5 bg-slate-800 rounded-full p-1 lg:p-2 text-center'>
                    <a className='px-4 py-2' href="#"
                        onClick={onClick}
                    >Detalles</a>
                </div>
            </div> 
            <div className='flex gap-4'>
                <div>
                    <a href="https://github.com/vickylopez2828" target="_blanck"><BiLinkExternal className="w-6 h-6 lg:w-8 lg:h-8 inline-block text-[#ae31fc] hover:scale-110 hover:text-[#fc31f9]"/></a>
                    
                </div>
                <div>
                    <a href="https://github.com/vickylopez2828" target="_blanck"><SiGithub className="w-6 h-6 lg:w-8 lg:h-8 inline-block text-[#ae31fc] hover:scale-110 hover:text-[#fc31f9]"/></a>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>

  )
}
