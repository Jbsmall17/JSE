import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";


export default function ContactUs() {
  return (
    <main className='px-[5%] py-12'>
        <section>
            <p className='text-2xl font-semibold text-[#15504] mb-4 text-center'>Get In Touch</p>
            <div className='flex flex-row justify-center mb-6'>
                <p className='text-[#105504] text-lg'>Want to speak to semoone about<br /> getting your houe installed<br /> with solar?</p>
            </div>
            <div className='flex flex-row gap-32 items-center'>
                <form className='flex-1 py-8 px-4 rounded-lg bg-[#efddaa]' action="">
                    <div className='grid grid-cols-2 gap-x-10 gap-y-2 mb-6'>
                        <label htmlFor="">First name</label>
                        <label htmlFor="">Last name</label>
                        <input className='p-2 rounded-lg border-2 border-black outline-none' type="text" placeholder='first name' />
                        <input className='p-2 rounded-lg border-2 border-black outline-none' type="text" placeholder='last name' />
                    </div>
                    <label htmlFor="">Email address</label><br />
                    <input className='mb-6 w-full block p-2 rounded-lg border-2 border-black outline-none' type="text" placeholder='email address' />
                    <label htmlFor="">Home address</label><br />
                    <input className='mb-6 w-full block p-2 rounded-lg border-2 border-black outline-none' type="text" placeholder='email address' />
                    <label htmlFor="">Phone address</label><br />
                    <input className='mb-6 w-[60%] block p-2 rounded-lg border-2 border-black outline-none' type="text" placeholder='email address' />
                    <label htmlFor="">Message</label>
                    <textarea className='block w-full rounded-lg h-[150px] border-2 border-black resize-none mb-6'>
                        leave a message......
                    </textarea>
                    <div className='flex justify-center'>
                        <button className='rounded-full h-[40px] w-[70%] flex justify-center items-center bg-[#f1b210]'>Send a Message</button>
                    </div>
                </form>
                <div className='flex-1'>
                    <p className='text-3xl text-center text-[#105504] mb-6 font-semibold'>Call Us</p>
                    <p className='text-lg text-[#105504] mb-6 text-center'>Call our team from Mon-Fri, 8am to 5pm</p>
                    <div className='flex flex-row justify-center gap-4 items-center mb-10'>
                        <div className='h-[24px] w-[24px] flex justify-center items-center bg-[#f1b210]'>
                            <FaPhoneAlt />
                        </div>
                        <p className='text-lg font-semibold'>+2347012345678</p>
                    </div>
                    <p className='text-3xl text-center text-[#105504] mb-6 font-semibold'>Chat with us</p>
                    <p className='text-lg text-[#105504] mb-6 text-center'>Speak to our friendly team via live chat</p>
                    <div className='flex flex-row justify-center gap-8 mb-10'>
                        <button className='rounded-lg bg-[#f1b210] h-[40px] px-4 flex flex-row justify-center items-center'>Start a live chat</button>
                        <button className='rounded-lg bg-[#f1b210] h-[40px] px-4 flex flex-row justify-center items-center'>Send an email</button>
                    </div>
                    <p className='text-3xl text-center text-[#105504] mb-6 font-semibold'>Visit Us</p>
                    <div className='flex flex-row justify-center'>
                        <p className='text-lg text-[#105504]'>
                            Chat with us in person at XYZ<br />
                            new Virginia Arena<br />
                            Lagos Nigeria.<br />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
