import React from 'react'
import logo from "../assets/jse_logo.png"
import { FaFacebookF,FaInstagram,FaLinkedinIn, FaXTwitter} from "react-icons/fa6";
import sptc from "../assets/sptc.png"
import havenhill from "../assets/havenhill.png"


export default function Footer() {
  return (
    <footer className='px-[5%] pt-8 pb-6 bg-[#105504] text-white'>
      <div className='flex flex-col md:flex-row justify-between mb-4'>
        <div className='flex flex-col gap-1'>
          <img className='w-[64px]' src={logo} alt="jse logo" />
          <p className='text-lg font-semibold whitespace-nowrap'>Japs Solar Energy</p>
          <p className='text-base font-normal'>
            We reach your potential to a good services,<br />
            making sure your solar energy is<br />
            installed perfectly
          </p>
          <div className='hidden md:flex flew-row gap-2 self-stretch'>
            <div className='w-[20px] bg-[#f1b210] rounded-sm h-[20px] flex items-center justify-center'>
              <FaFacebookF className='text-black text-sm' />
            </div>
            <div className='w-[20px] bg-[#f1b210] rounded-sm h-[20px] flex items-center justify-center'>
              <FaInstagram className='text-black text-sm' />
            </div>
            <div className='w-[20px] bg-[#f1b210] rounded-sm h-[20px] flex items-center justify-center'>
              <FaLinkedinIn className='text-black text-sm' />
            </div>
            <div className='w-[20px] bg-[#f1b210] rounded-sm h-[20px] flex items-center justify-center'>
              <FaXTwitter className='text-black text-sm' />
            </div>
          </div>
        </div>
        <div className='footer-link flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-6 lg:mt-10'>
          <div>
            <p>Quicks Links</p>
            <ul>
              <li>About us</li>
              <li>FAQ</li>
              <li>Services</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <p>Legal Information</p>
            <ul>
              <li>Copyright information</li>
              <li>Privacy Policy</li>
              <li>Terks of Service</li>
            </ul>
          </div>
          <div>
            <p>Contact</p>
            <ul>
              <li>Johndoe12345@gmail.com</li>
              <li>Xyz new virgina arena,</li>
              <li>Lagos, Nigeria</li>
              <li>+2347012345678</li>
            </ul>
          </div>
          <div>
            <p>Certification & Affiliation</p>
            <div className='flex flex-row flex-wrap gap-2 md:justify-between items-center mb-1'>
              <img src={sptc} alt='sptc image' />
              <img src={havenhill} alt="havenhill image" />
            </div>
            <p className='text-sm font-normal mb-'>
              In Partnership with XYZ solar company,<br /> NO.1 solar company in<br /> Nigeria
            </p>
            <div className='flex md:hidden flew-row gap-2 self-stretch mt-2'>
            <div className='w-[20px] bg-[#f1b210] rounded-sm h-[20px] flex items-center justify-center'>
              <FaFacebookF className='text-black text-sm' />
            </div>
            <div className='w-[20px] bg-[#f1b210] rounded-sm h-[20px] flex items-center justify-center'>
              <FaInstagram className='text-black text-sm' />
            </div>
            <div className='w-[20px] bg-[#f1b210] rounded-sm h-[20px] flex items-center justify-center'>
              <FaLinkedinIn className='text-black text-sm' />
            </div>
            <div className='w-[20px] bg-[#f1b210] rounded-sm h-[20px] flex items-center justify-center'>
              <FaXTwitter className='text-black text-sm' />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div>
        <p className='text-sm text-white mb-2 '>Subscribe to our Newsletter</p>
        <div className='relative w-[70%] max-w-[400px]'>
          <input className='rounded-lg  p-2 h-full w-full text-black' placeholder="Enter Email Address" />
          <button className='absolute p-2 h-[40px] flex items-center rounded-lg top-[50%] -translate-y-[50%] right-0 z-10 text-whte h-[110%] bg-[#f1b210] hover:scale-110 transition-all duration-500'>Subscribe</button>
        </div>
      </div>
    </footer>
  )
}
