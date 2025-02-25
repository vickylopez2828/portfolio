import React from 'react'
const positions = {
  top: "top-2",
  bottom: "bottom-2",
  left: "left-2",
  right: "right-2",
};

export default function CornDecoration({coordY, coordX}) {
  return (
    <>
      <div className={`flex flex-col gap-2 absolute ${positions[coordY]} ${positions[coordX]}`}>
        <div className="bg-[#0a87f5] w-1 h-3 rounded-full"></div>
        <div className="bg-gradient-to-r from-[#0a87f5] to-[#ae31fc] w-1 h-3 rounded-full"></div>
        <div className="bg-[#ae31fc] w-1 h-3 rounded-full"></div>
        <div className="bg-[#fc31f9] w-1 h-3 rounded-full"></div>
        

      </div>
      <div className={`flex gap-2 absolute  ${positions[coordY]} ${positions[coordX]}`}>
        <div className="bg-[#0a87f5] w-3 h-1 rounded-full"></div>
        <div className="bg-gradient-to-r from-[#0a87f5] to-[#ae31fc] w-3 h-1 rounded-full"></div>
        <div className="bg-[#ae31fc] w-3 h-1 rounded-full"></div>
        <div className="bg-[#fc31f9] w-3 h-1 rounded-full"></div>
      </div>
    </>
  )
}
