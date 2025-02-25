import React from 'react'
import { FaStar } from "react-icons/fa";
export default function SkillItem({skill}) {
  return (
    <div className='w-fit py-1 px-2 md:px-4 rounded-lg flex gap-2 items-center bg-[rgb(13,13,13)]'>
        <FaStar className='w-3 h-3 text-[#fc31f9]' />
        <p className='uppercase text-xs font-medium md:font-black text-[rgb(146,146,146)]'>{skill}</p>
    </div>
  )
}
