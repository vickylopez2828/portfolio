import React from 'react'
import { FaClock, FaUniversity } from 'react-icons/fa'
import SkillItem from '../education/SkillItem'
import CornDecoration from '../CornDecoration'
export default function CardExperience({experience}) {
  return (
      <div className="bg-[rgb(36,36,36)] relative sm:w-4/5 animate-fade-right flex flex-col mx-3 sm:mx-auto rounded-lg py-4 px-6 md:px-16 md:py-8 my-2">
                <CornDecoration coordY={'top'} coordX={'left'} />
                <CornDecoration coordY={'bottom'} coordX={'right'} />
                <div className='absolute p-1 hidden md:flex top-16 right-0 bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-s-full'>
                  <div className="flex items-center gap-1 text-xs font-black">
                    {experience.periodo 
                      ? (
                      <>
                          <span>{experience.periodo.inicio}</span>
                              <span className="text-xs md:text-xl font-black">→</span>
                          <span>{experience.periodo.fin}</span>
                      </>
                      )  
                      : (
                          <>
                              <span className="px-6 py-2">{experience.anio}</span>
                          </>
                      )}
                    
                  </div>
                </div>
                <div className='w-full md:w-2/3 '>
                  <h3 className='text-white text-lg md:text-2xl ' ><span className="font-bold text-[#fc31f9]">{experience.resaltado} </span>{experience.titulo}</h3>
                  <div className='flex gap-2 my-2 items-center'>
                    <span className=''><FaUniversity/></span>
                    <p className="text-[rgb(146,146,146)] text-xs">{experience.lugar}</p>
                  </div>
                </div>
                <div className='w-full md:hidden'>
                    {experience.periodo
                      ? (
                        <div className='flex gap-2 my-2 items-center'>
                          <span className=''><FaClock/></span>
                          <p className="text-[rgb(146,146,146)] text-xs">{experience.periodo.inicio} - {experience.periodo.fin}</p>
                        </div>
                      ) : (
                        <div className='flex gap-2 my-2 items-center'>
                          <span className=''><FaClock/></span>
                          <p className="text-[rgb(146,146,146)] text-xs">{experience.anio}</p>
                        </div>
                      )
  
                    }
                  
                </div>
                <div className='flex flex-col mt-6 w-5/6'>
                  <p className='text-xs md:text-sm'>{experience.descripcion}</p>
                  {experience.habilidades !== null && (
                      <>
                          <p className='mt-4'>💡 Habilidades adquiridas:</p>
                          <ul className='list-none text-xs md:text-sm'>
                              {experience.habilidades.map((item, index) => (
                                  <li key={index} className="before:content-['✔'] before:mr-2 indent-2 md:indent-8">{item}</li>
                              ))}
                          </ul>
                      </>
                  )}
                  
                </div>
                <div className='flex gap-2 flex-wrap mt-6'>
                  {experience.skill.map(item => (
                    <SkillItem
                      key={item.id}
                      skill={item.skill}
                    />
                  ))}
                </div> 
                
            </div>
    )
}
