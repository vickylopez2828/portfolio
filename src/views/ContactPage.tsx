import React from 'react'

export default function ContactPage() {
  return (
    <div className=' w-full flex flex-col gap-8 sm:w-4/5  bg-[rgb(26,26,26)] mx-auto my-2 pb-4 lg:mx-16 rounded-lg overflow-y-scroll'> 
      <div className="flex flex-col my-auto justify-between gap-8 p-2 m-4 animate-fade-down"> 
          <h1 className= 'text-2xl sm:text-4xl mx-auto font-bold text-white '>
            <span className="text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]">
            Contacto</span>
          </h1>
          <h2 className='w-fit font-bold text-lg sm:text-xl border-b-2 border-[#0a87f5]'>Enviame un Mensaje</h2>
          <form action="" className='w-full mx-auto flex flex-col gap-4  bg-[rgb(18,18,18)] p-4 sm:p-8 rounded-xl shadow-[0_0px_5px_rgba(10,135,245,0.8)]'>
            <input 
              type="text" placeholder='Nombre' 
              className='bg-[rgb(30,30,30)] rounded-md p-1 sm:p-2 border-2 border-slate-700'
            />
            <input 
              type="text" placeholder='Email' 
              className='bg-[rgb(30,30,30)] rounded-md p-1 sm:p-2 border-2 border-slate-700'
            />
            
            <textarea name="" id="" className='bg-[rgb(30,30,30)] rounded-md p-2 border-2 border-slate-700'></textarea>
            
            <div className='w-full mx-auto  my-4  hover:shadow-[0_0_20px_rgba(174,49,252,0.6)] bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-md'>
                <div className=' m-0.5 bg-slate-800 rounded-md p-1 lg:p-2 text-center'>
                <a className=''  href="#">Enviar</a>
                </div>
            </div> 
          </form>    
      </div>
      
    </div>
    
  )
}
