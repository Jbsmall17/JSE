import React from 'react'
import { IoIosArrowDown } from "react-icons/io"
import logo from "../assets/jse_logo.png"

export default function Header() {
  return (
    <nav className='px-[5%] pt-[25px] flex flex-row items-center justify-between'>
      <div className='flex flex-col items-center'>
        <img src={logo}  alt='logo' />
        <p className='text-base font-bold text-[#105504]'>Japs Solar Energy</p>
      </div>
      <ul className='bg-[#105504] self-stretch text-white px-12 flex flex-row items-center gap-12 list-none'>
        <li className='h-full flex items-center'>
          <a href='#' className='no-underline'>HomePage</a> 
        </li>
        <li className='group relative h-full flex items-center gap-1'>
          <a href='#' className='no-underline'>Services</a>
          <IoIosArrowDown className='text-lg'/>
          <ul className='hidden group-hover:flex absolute flex-col whitespace-nowrap gap-2 left-2 top-[65%] bg-[#f1b210] text-[#105504] rounded-lg p-2'>
            <li>Solar installation</li>
            <li>Maintenance Services</li>
            <li>Energy Calculator</li>
          </ul>
        </li>
        <li className='h-full flex items-center'>
          <a href="#"  className='no-underline'>Testimonials</a>
        </li>
        <li className='h-full flex items-center'>
          <a href="#"  className='no-underline'>About us</a>
        </li>
      </ul>
      <button className='bg-[#f1b210] rounded-lg h-[40px] px-8 text-black'>
        Contact us
      </button>
    </nav>
  )
}
