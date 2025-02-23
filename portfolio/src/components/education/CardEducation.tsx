import React from 'react'
import { FaUniversity, FaClock } from 'react-icons/fa'
import SkillItem from './SkillItem'


export default function CardEducation({education}) {
  return (
    <div className="shadow-[0_0px_5px_rgba(174,49,252,0.8)] md:shadow-[0_0px_20px_rgba(174,49,252,0.8)] relative   sm:w-4/5 animate-fade-right flex flex-col mx-3 sm:mx-auto rounded-lg px-4 py-2 md:px-16 md:py-8 my-2">
              {/* <CornDecoration coordY={'top'} coordX={'left'} />
              <CornDecoration coordY={'bottom'} coordX={'right'} /> */}
              <div className='absolute p-1 hidden md:flex top-16 right-0 bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-s-full'>
                <div className="flex items-center gap-1 text-xs font-black">
                  {education.periodo 
                    ? (
                    <>
                        <span>{education.periodo.inicio}</span>
                            <span className="text-xs md:text-xl font-black">→</span>
                        <span>{education.periodo.fin}</span>
                    </>
                    )  
                    : (
                        <>
                            <span className="px-6 py-2">{education.anio}</span>
                        </>
                    )}
                  
                </div>
              </div>
              <div className='w-full md:w-2/3'>
                <h3 className='text-white text-lg md:text-2xl ' ><span className="font-bold text-[#fc31f9]">{education.resaltado} </span>{education.titulo}</h3>
                <div className='flex gap-2 my-2 items-center'>
                  <span className=''><FaUniversity/></span>
                  <p className="text-[rgb(146,146,146)] text-xs">{education.lugar}</p>
                </div>
              </div>
              <div className='w-full md:hidden'>
                  {education.periodo
                    ? (
                      <div className='flex gap-2 my-2 items-center'>
                        <span className=''><FaClock/></span>
                        <p className="text-[rgb(146,146,146)] text-xs">{education.periodo.inicio} - {education.periodo.fin}</p>
                      </div>
                    ) : (
                      <div className='flex gap-2 my-2 items-center'>
                        <span className=''><FaClock/></span>
                        <p className="text-[rgb(146,146,146)] text-xs">{education.anio}</p>
                      </div>
                    )

                  }
                
              </div>
              <div className='flex flex-col mt-6 w-5/6'>
                <p className='text-xs md:text-sm'>{education.descripcion}</p>
                {education.habilidades !== null && (
                    <>
                        <p className='mt-4'>💡 Habilidades adquiridas:</p>
                        <ul className='list-none text-xs md:text-sm'>
                            {education.habilidades.map((item, index) => (
                                <li key={index} className="before:content-['✔'] before:mr-2 indent-2 md:indent-8">{item}</li>
                            ))}
                        </ul>
                    </>
                )}
                
              </div>
              <div className='flex gap-2 flex-wrap mt-6'>
                {education.skill.map(item => (
                  <SkillItem
                    key={item.id}
                    skill={item.skill}
                  />
                ))}
              </div> 
              
          </div>
  )
}
