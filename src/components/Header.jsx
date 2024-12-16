import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import logo from "../assets/jse_logo.png"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const [firstRender, setFirstRender] = useState(true)
  // active: true,false. inactive: false, false 

  const openNavbar = ()=>{
    setIsActive(true);
    setFirstRender(false)
  }

  const closeNavbar = ()=>{
    setIsActive(false)
  }
  return (
    <nav className='relative px-[5%] pt-[25px] flex flex-row items-center justify-between'>
      <a href='/'>
      <div className='flex flex-row md:flex-col gap-2 md:gap-0 items-center'>
        <img src={logo}  alt='logo' />
        <p className='text-xl md:text-base font-bold text-[#f1b210] md:text-[#105504]'>Japs Solar Energy</p>
      </div>
      </a>
      <ul className='bg-[#105504] self-stretch text-white md:px-4 lg:px-10 xl:px-12 hidden md:flex flex-row items-center md:gap-4 lg:gap-10 xl:gap-12 list-none'>
        <li className='h-full flex items-center'>
          <a href='/' className='no-underline'>Home</a> 
        </li>
        <li className='group relative h-full flex items-center gap-1'>
          <a href='/services' className='no-underline'>Services</a>
          <IoIosArrowDown className='text-lg'/>
          <ul className='hidden group-hover:flex absolute flex-col whitespace-nowrap gap-2 left-2 top-[65%] bg-[#f1b210] text-[#105504] rounded-lg p-2'>
            <li>Solar installation</li>
            <li>Maintenance Services</li>
            <li>Energy Calculator</li>
          </ul>
        </li>
        <li className='h-full flex items-center'>
          <a href="/testimonials"  className='no-underline'>Testimonials</a>
        </li>
        <li className='h-full flex items-center'>
          <a href="/about-us"  className='no-underline'>About us</a>
        </li>
      </ul>
      <a href="/contact-us">
      <button className='hidden md:block bg-[#f1b210] hover:bg-transparent hover:border hover:border-[#f1b210] rounded-lg h-[40px] w-[150px] whitespace-none lg:px-8 text-black transition-all duration-500 ease-out'>
        Contact us
      </button>
      </a>
      <FaBars onClick={openNavbar} className="block md:hidden text-[#f1b210] text-4xl" />
      <ul className={`${isActive && !firstRender ? "active" : !isActive && !firstRender ? "inactive" : "-translate-y-[100%]"} block md:hidden absolute top-0 left-0 w-full bg-[#105504] text-white px-[5%] pt-12 z-10`}>
        <IoClose onClick={closeNavbar} className='absolute top-4 right-[5%] text-4xl' />
        <li><a className="block w-full py-2 text-center text-lg border-b border-b-white" href="/">Home</a></li>
        <li className='group'>
          <a className="block w-full py-2 text-center text-lg border-b border-b-white" href="/services">Services</a>
          <ul className='hidden group-hover:block bg-[#f1b210] text-[#105504]'>
            <li className='text-center text-lg py-2 border-b border-b-white'>Solar Installation</li>
            <li className='text-center text-lg py-2 border-b border-b-white' >Maintenance Services</li>
            <li className='text-center text-lg py-2'>Energy Calculation</li>
          </ul>
        </li>
        <li><a className="block w-full py-2 text-center text-lg border-b border-b-white" href="/testimonials">Testimonials</a></li>
        <li><a className="block w-full py-2 text-center text-lg" href="/about-us">About us</a></li>
      </ul>
    </nav>
  )
}
