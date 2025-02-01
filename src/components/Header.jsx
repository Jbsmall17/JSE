import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import logo from "../assets/jse_logo.png"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { useCustomContext } from '../context/context'
import { useUtilsHook } from '../utils/utils'

export default function Header({pageName}) {
  const {scrollToSolar,scrollToMain, scrollToEnergy} = useUtilsHook()
  const [isActive, setIsActive] = useState(false)
  const [firstRender, setFirstRender] = useState(true)
  const {setActivePage,HeaderRefDiv} = useCustomContext()
  const openNavbar = ()=>{
    setIsActive(true);
    setFirstRender(false)
  }

  const closeNavbar = ()=>{
    setIsActive(false)
  }

  return (
  <nav ref={HeaderRefDiv} className='relative px-[5%] pt-[25px] flex flex-row items-center justify-between'>
      <a href='/'>
      <div className='flex flex-row md:flex-col gap-2 md:gap-0 items-center'>
        <img src={logo}  alt='logo' />
        <p className='text-xl md:text-base font-bold text-[#f1b210] md:text-[#105504]'>Japs Solar Energy</p>
      </div>
      </a>
      <ul className='bg-[#105504] self-stretch text-white md:px-0 lg:px-4 xl:px-6 hidden md:flex flex-row items-center justify-between list-none md:w-[350px] lg:w-[475px] xl:w-[515px]'>
        <li className='flex-1 group h-full flex items-center justify-center'>
          <a href='/' onClick={()=>setActivePage("home")} className={`no-underline ${pageName === "home" ? "font-bold text-lg" : ""} group-hover:font-bold group-hover:text-lg`}>Home</a> 
        </li>
        <li className='flex-1 group relative h-full flex items-center justify-center gap-1'>
          <a href='/services' onClick={()=>setActivePage("services")} className={`no-underline ${pageName === "services" ? "font-bold text-lg" : ""} group-hover:font-bold group-hover:text-lg`}>Services</a>
          <IoIosArrowDown className='text-lg group-hover:font-bold group-hover:text-xl'/>
          <ul className='hidden group-hover:flex absolute flex-col whitespace-nowrap gap-2 left-2 top-[65%] bg-[#f1b210] text-[#105504] rounded-lg p-2'>
            <li onClick={() => {setActivePage("solar"); scrollToSolar()}} className='cursor-pointer'>Solar installation</li>
            <li onClick={()=>{setActivePage("main"); scrollToMain()}} className='cursor-pointer'>Maintenance Services</li>
            <li onClick={()=>{setActivePage("energy");scrollToEnergy()}} className='cursor-pointer'>Energy Calculator</li>
          </ul>
        </li>
        <li className='flex-1 group h-full flex items-center justify-center'>
          <a href="/testimonials"  onClick={()=>setActivePage("testimonials")} className={`no-underline ${pageName === "testimonials" ? "font-bold text-lg" : ""} group-hover:font-bold group-hover:text-lg`}>Testimonials</a>
        </li>
        <li className='flex-1 group h-full flex items-center justify-center'>
          <a href="/about-us" onClick={()=>setActivePage("aboutUs")} className={`no-underline ${pageName === "about-us" ? "font-bold text-lg" : ""} group-hover:font-bold group-hover:text-lg`}>About us</a>
        </li>
      </ul>
      <a href="/contact-us">
      <button  onClick={()=>setActivePage("contactUs")} className='hidden md:block bg-[#f1b210] hover:bg-transparent hover:border hover:border-[#f1b210] rounded-lg h-[40px] w-[155px] whitespace-none lg:px-8 text-black transition-all duration-500 ease-out whitespace-nowrap'>
        Contact us
      </button>
      </a>
      <FaBars onClick={openNavbar} className="cursor-pointer block md:hidden text-[#f1b210] text-4xl" />
      <ul className={`${isActive && !firstRender ? "active" : !isActive && !firstRender ? "inactive" : "-translate-y-[100%]"} block md:hidden absolute top-0 left-0 w-full bg-[#105504] text-white px-[5%] pt-12 z-10`}>
        <IoClose onClick={closeNavbar} className='cursor-pointer absolute top-4 right-[5%] text-4xl' />
        <li><a className="block w-full py-2 text-center text-lg border-b border-b-white" href="/">Home</a></li>
        <li className='group'>
          <a className="block w-full py-2 text-center text-lg border-b border-b-white" href="javascript:0">Services</a>
          <ul className='hidden group-hover:block bg-[#f1b210] text-[#105504]'>
            <li onClick={() => {setActivePage("solar"); scrollToSolar()}} className='text-center text-lg py-2 border-b border-b-white'>Solar Installation</li>
            <li onClick={()=>{setActivePage("main"); scrollToMain()}} className='text-center text-lg py-2 border-b border-b-white' >Maintenance Services</li>
            <li onClick={()=>{setActivePage("energy");scrollToEnergy()}} className='text-center text-lg py-2'>Energy Calculation</li>
          </ul>
        </li>
        <li><a className="block w-full py-2 text-center text-lg border-b border-b-white" href="/testimonials">Testimonials</a></li>
        <li><a className="block w-full py-2 text-center text-lg" href="/about-us">About us</a></li>
      </ul>
    </nav>
  )
}
