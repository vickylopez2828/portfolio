import { itemsNavMobile } from '../../data/data';
import { BiCodeAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
export default function NavMobile() {

  return (
    <nav className=' flex flex-col justify-between'>
        <div className='flex gap-4 items-center justify-center mt-2 shadow-[0px_0.5px_0px_rgba(255,255,255,0.2)] '>
        <BiCodeAlt className="w-6 h-6 text-[#ae31fc]" />
            {/* <div className=' bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-xl'>
                <div className='m-0.5 bg-slate-800 rounded-xl'>
                    <img src="/mujerprog.png" alt="Logo" className='max-w-10 max-h-10' />
                </div>
            </div> */}
            <h3 className=  'text-xl font-bold text-white'>Victoria  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a87f5]
                        via-[#ae31fc] to-[#fc31f9]">López</span></h3>
            <BiCodeAlt className="w-6 h-6 text-[#ae31fc]" />
        </div>
        <div className='flex justify-around'>
                    {itemsNavMobile.map(item =>(
                    <NavLink 
                        key={item.id}
                        to={item.path}
                        className= {({isActive})=> 
                        isActive 
                            ? ' bg-[rgb(50,50,50)] text-fuchsia-500 before:opacity-100 flex items-center w-full py-2 shadow-[0px_-0.5px_0px_rgba(255,255,255,0.2)] border-gray-300 justify-start   relative border-transparent before:absolute before:bottom-0 before:left-0 before:w-full before:h-[6px] before:bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] before:transition-opacity' 
                            : 'flex gap-3 items-center hover:bg-[rgb(50,50,50)] hover:text-fuchsia-500 shadow-[0px_0.5px_0px_rgba(255,255,255,0.2)]  w-full py-2  border-t-gray-300 justify-start text-white   relative border-transparent before:absolute before:top-0 before:right-0 before:w-[8px] before:h-full before:bg-gradient-to-b from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] before:transition-opacity before:opacity-0'
                        }
                        >
                        
                
                        <item.icon className="w-8 h-8 mx-auto" /> 
                        
                    </NavLink>
                    ))}
                </div>
    </nav>
  )
}
