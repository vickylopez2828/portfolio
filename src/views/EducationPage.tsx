import React from 'react'
import CardEducation from '../components/education/CardEducation';
import { android, angular, cadppCertification, contador, reactEducation, tudai } from '../data/educationData';


export default function EducationPage() {
  return (
    <div className=' w-full flex flex-col gap-8 sm:w-4/5  bg-[rgb(26,26,26)] mx-auto my-2 pb-4 lg:mx-16 rounded-lg overflow-y-scroll'>
      
      <div className="flex justify-center items-center m-8 animate-fade-down"> 
          <h1 className= 'text-2xl sm:text-4xl font-bold text-white '>Mi<span className="text-transparent tracking-widest bg-clip-text bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9]"> Formación Académica</span></h1>    
      </div>
      <CardEducation
        education={tudai}
      />
      <CardEducation
        education={reactEducation}
      />
      <CardEducation
        education={cadppCertification}
      />
      <CardEducation
        education={angular}
      />
      <CardEducation
        education={android}
      />
      <CardEducation
        education={contador}
      />
      
    </div>
  )
}
