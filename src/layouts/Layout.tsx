import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav'
import CustomCursor from '../components/CustomCursor'
import NavMobile from '../components/nav/NavMobile'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'


export default function Layout() {
  const [isVerticalLayout, setIsVerticalLayout] = useState(true);
  const [showDesktopNav, setShowDesktopNav] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     const height = window.innerHeight;

  //     // Mostrar el nav de desktop solo si cumple ambas condiciones:
  //     if (width >= 640 && height >= 500) {
  //       setShowDesktopNav(true);
  //       setIsVerticalLayout(false); // flex-row
  //     } else {
  //       setShowDesktopNav(false);
  //       setIsVerticalLayout(true); // flex-col
  //     }
  //   };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
  
      const isDesktopNotVertical = width >= 640 && height >= 500;
      setShowDesktopNav(isDesktopNotVertical);
      setIsVerticalLayout(!isDesktopNotVertical); // Si no es desktop, es vertical
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar el estado inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (

    <div className={`bg-stone-950 w-full min-h-screen max-h-screen flex ${isVerticalLayout ? "flex-col" : "flex-row"} gap-4  text-[#EEEEEE] px-4 sm:px-2 sm:py-4 sm:pl-4`}>
            
            {showDesktopNav ? <Nav /> : <NavMobile isVertical={isVerticalLayout}/>}
            {/* <CustomCursor /> */}
            <Outlet/>
            
    </div>
  )
}
