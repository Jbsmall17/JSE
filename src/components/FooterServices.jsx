import React from 'react'
import logo from "../assets/jse_logo.png"
import { FaFacebookF,FaInstagram,FaLinkedinIn, FaXTwitter} from "react-icons/fa6";
import sptc from "../assets/sptc.png"
import havenhill from "../assets/havenhill.png"
import { useNavigate } from 'react-router-dom';
import { useCustomContext } from '../context/context';
import { useUtilsHook } from '../utils/utils';


export default function Footer() {
  const navigate = useNavigate()
  const {setActivePage, HeaderRefDiv} = useCustomContext()
  const {scrollToFaq} = useUtilsHook()

  function navigateAndScrollUp(page,route){
    if(page == "aboutUs"){
      HeaderRefDiv.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      }) 
    }
    setActivePage(page);
    navigate(route);
  }

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
            <p>Products</p>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Case study</li>
              <li>Reviews</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <p>Company</p>
            <ul>
              <li className='cursor-pointer' onClick={()=>{navigateAndScrollUp("aboutUs","/about-us")}}>About Us</li>
              <li>Contact Us</li>
              <li>Blogs</li>
              <li>Maintenance services</li>
              <li onClick={()=>scrollToFaq()} className='cursor-pointer'>FAQ</li>
            </ul>
          </div>
          <div>
            <p>Support</p>
            <ul>
              <li>Web</li>
              <li>IOS</li>
              <li>Macbook</li>
              <li>Windows</li>
            </ul>
          </div>
          <div>
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
        <div className='h-[2px] w-[90%] bg-white mx-auto mt-8 mb-2'></div>
        <div className='w-[90%] mx-auto pb-4 flex flex-row justify-between items-center text-white'>
            <p>&copy;2024hushmode</p> 
            <div className='flex flex-row gap-4 items-center'>
                <p>Privacy Policy</p>
                <div className='h-[8px] w-[8px] rounded-full bg-white'></div>
                <p>Terms and condition</p>
                <div className='h-[8px] w-[8px] rounded-full bg-white'></div>
            </div>     
        </div>
      </div>
    </footer>
  )
}
