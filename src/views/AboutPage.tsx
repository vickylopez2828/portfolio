import { MdWavingHand } from "react-icons/md";
import CornDecoration from "../components/CornDecoration";
export default function AboutPage() {
  return (
    <div className='w-full  sm:w-4/5 relative bg-[rgb(26,26,26)] mx-auto my-2 lg:mx-16 rounded-lg overflow-y-scroll   '>
      
      <div className="flex flex-col gap-4 justify-center items-center mt-8 animate-fade-down">
        <div className="flex gap-2 items-center">
          <h3 className='text-center tracking-widest	 text-[rgb(146,146,146)] text-3xl font-bold'> Hola</h3>
          <span ><MdWavingHand className=" w-6 h-6 text-[#fc31f9] animate-wiggle-more animate-infinite" /></span>
        </div>
          <h1 className= 'text-2xl sm:text-4xl font-bold text-white '>Soy  <span className="text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]">Victoria López</span></h1>    
      </div>
        <div className=" sm:w-2/3 animate-fade-right relative flex flex-col justify-between mx-auto my-8 p-10 gap-2 items-center ">
          <CornDecoration coordY={'top'} coordX={'left'} />

          <CornDecoration coordY={'bottom'} coordX={'right'} />

            <p className="text-[rgb(146,146,146)] indent-8"><span className="font-bold text-[#fc31f9]">Desarrolladora Web especializada en Frontend</span>, con fuerte enfoque en React y conocimientos full stack. Me gradué como <span className="font-bold text-[#fc31f9]">Técnica Universitaria en Desarrollo de Aplicaciones Informáticas</span> y cuento con experiencia trabajando con tecnologías modernas como React, TypeScript, Tailwind CSS, Axios, Zustand, MUI, entre otras.</p>
            <p className="text-[rgb(146,146,146)] indent-8">También tengo conocimientos en backend, habiendo trabajado con Node.js y Express, y tengo familiaridad con Python, Django y bases de datos relacionales como PostgreSQL,MySQL y Supabase.</p>
            <p className="text-[rgb(146,146,146)] indent-8">Siempre busco crear interfaces dinámicas y accesibles, <span className="font-bold text-[#fc31f9]">aplicar buenas prácticas</span> y seguir <span className="font-bold text-[#fc31f9]">aprendiendo constantemente</span>  para construir soluciones escalables y eficientes. 🚀</p>
        </div>
        <div className="flex mx-4 flex-col sm:w-2/3 sm:flex-row animate-fade-left gap-2 sm:gap-8 lg:gap-16 sm:mx-auto items-center justify-center my-8">
            <div className='w-full max-w-96  my-4 animate-glow  hover:shadow-[0_0_20px_rgba(174,49,252,0.6)] bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-md'>
                <div className=' m-0.5 bg-slate-800 rounded-md p-1 lg:p-2 text-center'>
                <a className=''  download="LOPEZ-CV.pdf" href="/LOPEZ-CV.pdf">Descargar CV</a>
                </div>
            </div> 
        </div>

    </div>
  )
}