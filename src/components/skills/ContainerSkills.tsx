import React from 'react'
import CardSkill from './CardSkill'

export default function ContainerSkills({tecnologias, titulo}) {
  return (
    <div className='shadow-lg mx-4 sm:mx-auto pb-8 bg-[rgb(30,30,30)] gap-8 flex flex-col justify-between rounded-xl'>
        <h3 className='shadow-[0_4px_6px_rgba(0,0,0,0.3)] text-lg px-10 py-1 md:text-xl font-bold relative bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-t-xl'>
            {titulo}
        </h3>
        <div className='px-10 py-6 mb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-auto gap-4'>
            {tecnologias.map(item => (
              <CardSkill
                key={item.id}
                tecnologia={item}
                />
            ))}            
        </div>
      </div>
  )
}