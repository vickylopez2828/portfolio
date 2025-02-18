import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Layout() {
  return (

    <div className="bg-stone-950 w-full min-h-screen max-h-screen flex  text-[#EEEEEE] sm:py-4 sm:pl-4">
            <Nav/>
            <Outlet/>
    </div>
  )
}
