import React from 'react'
import { itemsNav } from '../../data/data'
import NavItems from './NavItems'
import { NavLink } from 'react-router-dom'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'
import NavBarItems from './NavBarLink'
export default function NavBar() {
  return (
    <div className='bg-[rgb(26,26,26)] hidden sm:flex sm:w-auto justify-between gap-4 rounded-lg'>
        <div className='flex items-center '>
          <div className='mx-10 mb-4 bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-xl'>
                {/* <div className='m-0.5 bg-slate-800 rounded-xl'>
                  <img src="/mujerprog.png" alt="Logo" className='max-w-24 max-h-24' />
                </div> */}
            </div>
          <h3 className=  'text-lg md:text-xl lg:text-2xl font-bold text-white'>Victoria  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a87f5]
                                via-[#ae31fc] to-[#fc31f9]">López</span></h3>
        </div>
        <div className='flex justify-between'>
            {itemsNav.map(item =>(
            <NavBarItems key={item.id}
                icon={item.icon}
                text={item.text}
                path={item.path}
            />
        ))}
        </div>
        {/* <div className="px-4 flex justify-between items-center shadow-[0px_-0.5px_0px_rgba(255,255,255,0.2)] border-gray-300 p-2" >
              <a href="https://www.linkedin.com/in/vlopez2828/" target="_blanck"><SiLinkedin className="w-6 h-6 lg:w-8 lg:h-8 inline-block text-[#ae31fc] hover:scale-110 hover:text-[#fc31f9]"/></a>
              <a href="https://github.com/vickylopez2828" target="_blanck"><SiGithub className="w-6 h-6 lg:w-8 lg:h-8 inline-block text-[#ae31fc] hover:scale-110 hover:text-[#fc31f9]"/></a>
              <NavLink to={'/contact'}><SiGmail className="w-6 h-6 lg:w-8 lg:h-8 inline-block text-[#ae31fc] hover:scale-110 hover:text-[#fc31f9]"/></NavLink>
        </div> */}
        {/* <div className='mx-2 my-4  shadow-[0_0_20px_rgba(174,49,252,0.6)] animate-glow bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-md'>
                <div className='m-0.5 bg-slate-800 rounded-md p-1 lg:p-2 text-center'>
                <a className=''  download="LOPEZ-CV.pdf" href="/LOPEZ-CV.pdf">Descargar CV</a>
                </div>
            </div>   */}
        {/* <a  download="LOPEZ-CV.pdf" 
                  className="btn text-white text-sm sm:text-base p-2 m-2 rounded-md text-center
                            bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] hover:shadow-[0_0_10px_#ae31fc,0_0_20px_#c744ec,0_0_30px_#0a87f5] border-none
                            " href="/LOPEZ-CV.pdf">Descargar CV</a>
         */}
    </div>
  )
}
