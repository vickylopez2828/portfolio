import { SiReact } from "react-icons/si";
import React from 'react'

export default function CardSkill({tecnologia}) {
    if (!tecnologia) return null; 
    const Icon = tecnologia.icon;
  return (
    <div className='sm:w-[88px] shadow-[0_0px_5px_rgba(10,135,245,0.8)] rounded-xl p-4 flex flex-col items-center justify-center gap-1 sm:gap-3 hover:scale-110 cursor-pointer'>
        {/* <span className="w-12 h-12 text-[#0a87f5]">{tecnologia.icon}</span> */}
        <span className="">
             <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-[#0a87f5]"/>
        </span>
        <p className='text-[10px]  uppercase font-bold'>{tecnologia.name}</p>
    </div>
  )
}
