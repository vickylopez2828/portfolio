import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBarItems({icon: Icon, text, path}) {
  return (

    <NavLink 
        to={path}
        className= {({isActive})=> 
          isActive 
            ? ' bg-[rgb(50,50,50)] text-fuchsia-500 before:opacity-100 flex gap-3 items-center py-2 px-4 justify-start   relative border-transparent before:absolute before:bottom-0 before:left-0 before:w-full before:h-[8px] before:bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] before:transition-opacity' 
            : 'flex gap-3 items-center hover:bg-[rgb(50,50,50)] hover:text-fuchsia-500  py-2 px-4 justify-start text-white   relative border-transparent'
        }
        >
         

         <Icon className="w-4 h-4 lg:w-6 lg:h-6 " /> 
         
        <p className='font-quicksand text-xs lg:text-base font-black    '>{text}</p>
    </NavLink>
  )
}
