import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItems({icon: Icon, text, path}) {
  return (

    <NavLink 
        to={path}
        className= {({isActive})=> 
          isActive 
            ? ' bg-[rgb(50,50,50)] text-fuchsia-500 before:opacity-100 flex gap-3 items-center py-2 px-4 shadow-[0px_-0.5px_0px_rgba(255,255,255,0.2)] border-gray-300 justify-start   relative border-transparent before:absolute before:top-0 before:right-0 before:w-[8px] before:h-full before:bg-gradient-to-b from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] before:transition-opacity' 
            : 'flex gap-3 items-center hover:bg-[rgb(50,50,50)] hover:text-fuchsia-500  py-2 px-4 shadow-[0px_-0.5px_0px_rgba(255,255,255,0.2)] border-gray-300 justify-start text-white   relative border-transparent before:absolute before:top-0 before:right-0 before:w-[8px] before:h-full before:bg-gradient-to-b from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] before:transition-opacity before:opacity-0'
        }
        >
         

         <Icon className="w-4 h-4 lg:w-6 lg:h-6 " /> 
         
        <p className='font-quicksand text-xs lg:text-base font-black    '>{text}</p>
    </NavLink>
  )
}


// className='flex gap-3 items-center py-2 px-4 shadow-[0px_-0.5px_0px_rgba(255,255,255,0.2)] border-gray-300 
//         justify-start text-white  hover:scale-105 hover:bg-[rgb(50,50,50)] relative border-transparent 
//         before:absolute before:top-0 before:right-0 before:w-[8px] before:h-full before:bg-gradient-to-b from-[#0a87f5] 
//         via-[#ae31fc] to-[#fc31f9] before:transition-opacity before:opacity-0 
//         hover:before:opacity-100'