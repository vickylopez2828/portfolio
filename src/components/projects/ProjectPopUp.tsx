import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineClose } from "react-icons/ai";

export default function ProjectPopup({ project, closePopup }) {
  if (!project) return null;

  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    lazyLoad: "progressive", 
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: window.innerWidth >= 640, 
  });

  useEffect(() => {
    const handleResize = () => {
      setSliderSettings((prev) => ({
        ...prev,
        arrows: window.innerWidth >= 640, 
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-70 flex justify-center items-center z-50 overflow-y-auto">
      <div className="relative flex flex-col gap-1 justify-center bg-gray-900 p-6 sm:px-12 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 max-w-full max-h-[95vh]">
        <button onClick={closePopup} className="absolute top-4 right-2 text-[#ae31fc] hover:scale-105">
          <AiOutlineClose size={24} />
        </button>
        <div>

          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 z-10">{project.title}</h2>
        </div>
        <div className="">
          {project.images && project.images.length > 0 ? (
          <Slider {...sliderSettings}>
            {project.images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index}`} className="mx-auto max-h-[40vh] object-contain rounded-md overflow-hidden" />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-300 ">No hay imágenes disponibles</p>
        )}
        </div>
        

        {/* <div className="z-10 h-0 mx-auto"><iframe src="https://www.loom.com/embed/14e58cb8f1ee4057a8858d8391887bfa?sid=cfaf9320-4285-449c-9e1a-2d76f877d651" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className="width-full height-full"></iframe></div> */}
        <p className="sm:pl-8 pt-4 text-gray-300 overflow-y-auto">{project.descriptionLarge}</p>
        <div className="flex gap-8 items-center sm:pl-8 mt-auto">
                  {
                    project.demo &&(
                      <div className='w-fit  my-2 hover:shadow-[0_0_20px_rgba(174,49,252,0.6)] bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-full'>
                        <div className=' m-0.5 bg-slate-800 rounded-full p-1 lg:p-2 text-center'>
                            <a className='px-4 py-2' href={project.demo}  target="_blanck"
                                
                            >Demo</a>
                        </div>
                    </div> 
                    )
                  }
                    
                    <div className='w-fit  my-2 hover:shadow-[0_0_20px_rgba(174,49,252,0.6)] bg-gradient-to-r from-[#0a87f5] via-[#ae31fc] to-[#fc31f9] rounded-full'>
                        <div className=' m-0.5 bg-slate-800 rounded-full p-1 lg:p-2 text-center'>
                            <a className='px-4 py-2' href={project.git} target="_blanck"
                                
                            >Code</a>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
}
