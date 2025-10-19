
import { expFreelance, expGeneos, expIgrowker, expSinergia, proyPersonales, expMindDev } from '../data/experienceData'
import CardExperience from '../components/experience/CardExperience'

export default function ExperiencePage() {
  return (
      <div className=' w-full flex flex-col gap-8 sm:w-4/5  bg-[rgb(26,26,26)] mx-auto my-2 pb-4 lg:mx-16 rounded-lg overflow-y-scroll'>
        
        <div className="flex justify-center items-center m-4  sm:m-8 animate-fade-down"> 
            <h1 className= 'text-2xl sm:text-4xl font-bold text-white '>Mi<span className="text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]"> Experiencia</span></h1>    
        </div>
        <CardExperience experience={expMindDev}/>
        <CardExperience experience={expSinergia}/>
        <CardExperience experience={expFreelance}/>
        <CardExperience experience={expIgrowker}/>
        <CardExperience
          experience={expGeneos}
        />
        <CardExperience
          experience={proyPersonales}
        />
      </div>
    )
}
