import React, { useState } from 'react'
import image1 from "../assets/testimonials1.png"
import image2 from "../assets/testimonials2.png"
import image3 from "../assets/testimonials3.png"
import image4 from "../assets/testimonials4.png"
import image5 from "../assets/testimonials5.png"
import image6 from "../assets/testimonials6.png"
import image7 from "../assets/testimonials7.png"
import { FaQuoteRight,FaStar,FaArrowLeft,FaArrowRight } from "react-icons/fa"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { testimonials, testimonials2 } from '../data/data'

export default function Testimonials() {
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)
    console.log(count1)
    const countHandler = (type) =>{
        if(type == "increase"){
            setCount((prev)=>{
                if(prev!=2){
                    return prev + 1
                }else{
                    return prev
                }
            })
        }else{
            setCount((prev)=>{
                if(prev !=0){
                    return prev - 1
                }else{
                    return prev
                }
            })
        }
    }

    const countHandler2 = (type) =>{
        if(type == "increase"){
            setCount1((prev)=>{
                if(prev!=1){
                    return prev + 1
                }else{
                    return prev
                }
            })
        }else{
            setCount1((prev)=>{
                if(prev !=0){
                    return prev - 1
                }else{
                    return prev
                }
            })
        }
    }
    return (
    <>
        <Header 
            pageName={"testimonials"}
        />
        <main className='px-[5%] pt-4 md:pt-8 lg:pt-12 xl:pt-16 pb-12'>
        <section className='flex flex-col md:flex-row gap-8'>
            <div className='relative flex-1'>
                <img className='block h-full w-full' src={image1} alt={"testimonials image"} />
                <div className='absolute left-[50%] -translate-x-[50%] w-[90%] lg:w-[65%] bottom-0 translate-y-[50%] flex flex-row justify-between items-center rounded-lg p-2 bg-[#105504] text-white'>
                    <p className='pl-2 lg:pl-4 pr-3 whitespace-nowrap text-base lg:text-lg font-semibold'>Trusted Clients</p>
                    <div className='flex flex-row items-center'>
                        <img className='w-[24px] lg:w-[28px] h-[24px] lg:h-[28px]' src={image2} alt="" />
                        <img className='w-[24px] lg:w-[28px] h-[24px] -translate-x-2' src={image3} alt="" />
                        <img className='w-[24px] lg:w-[28px] h-[24px] -translate-x-4' src={image4} alt="" />
                        <img className='w-[24px] lg:w-[28px] h-[24px] -translate-x-6' src={image5} alt="" />
                    </div>
                </div>
            </div>
            <div className='p-4 lg:p-6 md:flex-[1.5] lg:flex-[1.75] rounded-lg bg-[#105504] text-white'>
                <div className='flex flex-row justify-between items-center'>
                    <FaQuoteRight  className='text-4xl text-white'/>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaStar  className='text-lg text-[#f1b210]' />
                        <FaStar  className='text-lg text-[#f1b210]' />
                        <FaStar  className='text-lg text-[#f1b210]' />
                        <FaStar  className='text-lg text-[#f1b210]' />
                        <FaStar  className='text-lg text-[#f1b210]' />
                    </div>
                </div>
                <p className='text-white text-center text-lg mt-2'>
                    {
                        testimonials[count].content
                    }
                </p>
                <div className='flex flex-row gap-4 items-center justify-center mt-4'>
                    <img src={testimonials[count].image} alt="testimonials image" />
                    <div>
                        <p className='text-lg font-semibold'>{testimonials[count].name}</p>
                        <p className='text-base font-normal'>{testimonials[count].position}</p>
                    </div>
                </div>
            </div>
        </section>
        <div className='mt-4 flex justify-end items-center mb-8'>
            <div className='flex flex-row gap-4'>
                <div className={`h-[32px] w-[32px] flex justify-center items-center bg-[#105504] rounded-full ${count == 0 ? "opacity-60": ""} `}>
                    <FaArrowLeft onClick={()=> countHandler("decrease")} className={`text-2xl text-white cursor-pointer`} />
                </div>
                <div className={`h-[32px] w-[32px] flex justify-center items-center bg-[#105504] rounded-full ${count == 2 ? "opacity-60": ""}`}>
                    <FaArrowRight onClick={()=> countHandler("increase")} className={`text-2xl text-white cursor-pointer`}  />
                </div>
            </div>
        </div>
        <section className='bg-[linear-gradient(to_right,_#379627,_#F1B21057)] px-[5%] pt-6 md:pt-10 pb-4 md:pb-6'>
            <div className='flex flex-col md:flex-row justify-between gap-6 items-center md:items-start'>
                <div>
                    <img src={testimonials2[count1].image} />
                </div>
                <div>
                    <p className='text-lg font-semibold mb-6 text-center'>
                        {
                            testimonials2[count1].content
                        }
                    </p>
                    <p className='text-center'>{testimonials2[count1].name}John Omokwu</p>
                    <p className='text-lg font-semibold text-center mb-6'>{testimonials2[count1].position}</p>
                    <div className='flex flow-row justify-center gap-8'>
                        <FaArrowLeft onClick={()=>countHandler2("decrease")} className={`text-3xl text-[#105504] cursor-pointer ${count1 == 0 ? "opacity-60": ""}`}/>
                        <FaArrowRight onClick={()=>countHandler2("increase")} className={`text-3xl text-[#105504] cursor-pointer ${count1 == 1 ? "opacity-60" : ""}`} />
                    </div>
                </div>
            </div>
        </section>
    </main>
        <Footer />
    </>
  )
}
