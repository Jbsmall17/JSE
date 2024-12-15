import React from 'react'
import service1 from "../assets/servicePage1.png"
import service2 from "../assets/servicePage2.png"
import service3 from "../assets/servicePage3.png"
import service4 from "../assets/servicePage4.png"
import service5 from "../assets/servicePage5.png"
import service6 from "../assets/servicePage6.png"
import icon1 from "../assets/serviceIcon1.png"
import icon2 from "../assets/serviceIcon2.png"
import { IoMdCheckmark,IoIosArrowUp,IoIosArrowDown } from "react-icons/io"
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";


function ServiceComp({children,title,desc}){
    return (
        <div className='flex-1 bg-[#105504] rounded-lg p-6 text-white text-start'>
            <div className='flex flex-row gap-4 items-center mb-20'>
                <div className='w-[28px] h-[28px] rounded-full bg-[#f1b210] flex justify-center items-center'>
                    {children}
                </div>
                <p className='text-lg font-semibold'>{title}</p>
            </div>
            <p className='text-base font-normal'>{desc}</p>
        </div>
    )
}

function LoadComp({position,name, unit}){
    return (
        <>
        {
            position == 1
            ? 
            <div className='grid grid-cols-[2.25fr_1.5fr_1.75fr] gap-x-32 gap-y-4 mb-4'>
                <p className='text-[#f1b210] text-lg'>Appliances</p>
                <p className='text-[#f1b210] text-lg'>Quantity</p>
                <p className='text-[#f1b210] text-lg'>Load</p>
                <div className='bg-[#105504] text-white p-2 rounded-lg flex justify-center items-center'>{name}</div>
                <div className='text-white bg-[#105504] p-2 rounded-lg flex justify-between items-center'>
                    <p>1</p>
                    <div className='flex flex-col gap-2'>
                        <IoIosArrowUp />
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className='bg-[#105504] text-white p-2 rounded-lg flex justify-center items-center'>{unit}</div>
            </div>
            : 
            <div className='grid grid-cols-[2.25fr_1.5fr_1.75fr] gap-x-32 gap-y-4 mb-4'>
                <div className='bg-[#105504] text-white p-2 rounded-lg flex justify-center items-center'>{name}</div>
                <div className='text-white bg-[#105504] p-2 rounded-lg flex justify-between items-center'>
                    <p>1</p>
                    <div className='flex flex-col gap-2'>
                        <IoIosArrowUp />
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className='bg-[#105504] text-white p-2 rounded-lg flex justify-center items-center'>{unit}</div>
            </div>
        }
        </>
    )
}

function LoadCalculationComp(){
    return (
        <div className='p-8 flex-1 border-2 border-[#f1b210] rounded-lg text-white self-start text-center bg-[#105504]'>
            <div className='flex flex-col gap-1 items-center pb-4 border-b-2 border-b-white'>
                <p className='text-lg'>Your Total Load</p>
                <RiArrowDownSFill className='text-2xl' />
                <p className='text-3xl'>0</p>
                <p className='text-xl'>Watts</p>
            </div>
            <div className='flex flex-col gap-1 items-center pt-2 pb-4 border-b-2 border-b-white'>
                <p className='text-lg'>Recommended</p>
                <p className='text-lg'>Investor Rating</p>
                <RiArrowDownSFill className='text-2xl' />
                <p className='text-3xl'>0</p>
                <p className='text-xl'>VA</p>
            </div>
            <div className='p-4'>
                <div className='text-center mb-2'>
                    <p className='py-1 bg-[#f1b210] text-black text-lg font-semibold'>Solar panel capacity-watt</p>
                    <p className='py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
                <div className='text-center mb-2'>
                    <p className='py-1 bg-[#f1b210] text-black text-lg font-semibold'>Panel Quantity</p>
                    <p className='py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
                <div className='text-center mb-2'>
                    <p className='py-1 bg-[#f1b210] text-black text-lg font-semibold'>Charge Controller</p>
                    <p className='py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
                <div className='text-center mb-2'>
                    <p className='py-1 bg-[#f1b210] text-black text-lg font-semibold'>Qty of charge controller</p>
                    <p className='py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
                <div className='text-center mb-2'>
                    <p className='py-1 bg-[#f1b210] text-black text-lg font-semibold'>Panel bank/ K watts</p>
                    <p className='py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
            </div>
        </div>
    )
}

function FAQ({content}){
    return (
        <div className='relative py-4 text-white flex flex-row gap-4 items-center justify-center bg-[#105504]'>
            <p className='text-lg font-semibold'>{content}</p>
            <RiArrowRightSLine className='text-xl absolute right-4 top-[50%] -translate-y-[50%] font-semibold' />
        </div>
    )
}


export default function Service() {
  return (
    <main className='px-[5%] pt-20 pb-16'>
        <section className='flex flex-row gap-8 mb-8'>
            <div className='p-8 bg-[#105504] text-white flex flex-col justify-between flex-[1.5] rounded-lg'>
                <p className='text-xl font-semibold'>
                    Japs Solar Energy provides top-quality solar panels to homeowners and businesses, helping you save on energy costs and reduce your carbon footprint. Benefits are; - Lower energy bills. We Provide top quality solar panel to homeowners and businesses helping you save on energy cost and contributing to greener planet 
                </p>
                <div className='flex flex-row justify-between text-3xl font-semibold'>
                    <p>100+ companies</p>
                    <p>10k Houses</p>
                </div>
            </div> 
            <div className='flex-1'>
                <img src={service1} alt="image in service page" />
            </div>     
        </section>
        <section>
            <div className='flex justify-center items-center mb-12'>
            <div className='pt-2 pb-4 px-6 bg-[#f1b210] flex flex-row justify-between max-w-[600px] w-[70%]'>
                <div>
                    <p className='text-2xl text-[#105504] font-semibold'>200+</p>
                    <p className='text-lg text-[#105504]'>Clients</p>
                </div>
                <div>
                    <p className='text-2xl text-[#105504] font-semibold'>1month</p>
                    <p className='text-lg text-[#105504]'>Guaranty</p>
                </div>
                <div>
                    <p className='text-2xl text-[#105504] font-semibold'>100+</p>
                    <p className='text-lg text-[#105504]'>Satisfied customers</p>
                </div>
            </div>
            </div>
            <p className='text-center text-2xl font-semibold mb-4'>
                Here's what our valued customers have to say<br /> about their experience with us:?
            </p>
            <div className='flex flex-row gap-12 items-center justify-center'>
                <div className='flex-1'>
                    <img className='w-full' src={service2} alt={"image in service page"} />    
                </div>
                <ServiceComp 
                    children={<img className='w-[80%] h-[80%]' src={icon1} alt='service icon' />}
                    title={"Excellent Work"}
                    desc={"we believe in personalized pricing, contact us today to receive a detailed quoted tailored specifically for your property and energy consumption"}
                />
                <ServiceComp 
                    children={<img className='w-[80%] h-[80%]' src={icon2} alt='service icon' />}
                    title={"Clear on Cost"}
                    desc={"we believe in personalized pricing, contact us today to receive a detailed quoted tailored specifically for your property and energy consumption"}
                />
            </div>
            <p className='text-center mt-10 mb-6 text-2xl text-[#105504] font-semibold'>
                Either Residential, commercial or industrial solar <br /> we got you covered
            </p>
            <div className='flex flex-row gap-20'>
                <div className='flex-1'>
                    <img className='w-full block mb-4' src={service3} alt={"service page image"} />
                    <div className='flex justify-center items-center'>
                    <p className='px-8 h-[40px] text-base rounded-full font-semibold flex justify-center  items-center bg-[#f1b210]'>Get a quote</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='w-full block mb-4' src={service4} alt={"service page image"} />
                    <div className='flex justify-center items-center'>
                        <p className='px-8 h-[40px] text-base rounded-full font-semibold flex justify-center  items-center bg-[#f1b210]'>Get a quote</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='w-full block mb-4' src={service5} alt={"service page image"} />
                    <div className='flex justify-center items-center'>
                        <p className='px-8 h-[40px] text-base rounded-full font-semibold flex justify-center  items-center bg-[#f1b210]'>Get a quote</p>
                    </div>
                </div>
            </div>
            <p className='text-center mt-16 mb-12 text-2xl text-[#105504] font-semibold'>
                Maintananace Plans are available upon<br /> Installation
            </p>
            <div className='flex flex-row gap-16 justify-center items-center '>
                <img src={service6} alt={"service page image"} />
                <div>
                    <p className='text-[#f1b210] text-center mb-6 text-2xl font-semibold'>Schedule inspections and cleaning service <br />on the go</p>
                    <div className='flex flex-row gap-6 items-center mb-6'>
                        <div className='w-[28px] h-[28px] flex justify-center items-center bg-[#f1b210]'>
                            <IoMdCheckmark className='text-[#105504] text-xl font-semibold' />
                        </div>
                        <p className='text-xl font-semibold'>Monthly Inspection</p>
                    </div>
                    <div className='flex flex-row gap-6 items-center mb-6'>
                        <div className='w-[28px] h-[28px] flex justify-center items-center bg-[#f1b210]'>
                            <IoMdCheckmark   className='text-[#105504] text-xl font-semibold' />
                        </div>
                        <p className='text-xl font-semibold'>General repair maintanance</p>
                    </div>
                    <div className='flex flex-row gap-6 items-center mb-6'>
                        <div className='w-[28px] h-[28px] flex justify-center items-center bg-[#f1b210]'>
                            <IoMdCheckmark   className='text-[#105504] text-xl font-semibold' />
                        </div>
                        <p className='text-xl font-semibold'>Fixing of Faulty wiring</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='py-2 px-6 h-[40px] rounded-2xl flex justify-center items-center text-base font-semibold text-[#105504] bg-[#f1b210]'>Book Now</button>
                    </div>
                </div>
            </div>
            <p className='text-center mt-12 mb-10 mb-6 text-2xl text-[#105504] font-semibold'>
                Energy Calculator
            </p>
            <div className='flex flex-row gap-36 mb-16'>
                <div className='flex-[2]'>
                    <LoadComp
                        position={1}
                        name={"Normal Bulb"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={2}
                        name={"Table light"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={3}
                        name={"Led"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={4}
                        name={"Fan"}
                        unit={"40"}
                    />
                    <LoadComp 
                        position={5}
                        name={"Led/led tv(s42)"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={6}
                        name={"Desktop computers"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={7}
                        name={"Laptops"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={8}
                        name={"Refrigerator(65-250ltr)"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={9}
                        name={"Refrigerator(250-350ltr)"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={10}
                        name={"Refrigerator(350-450ltr)"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={11}
                        name={"AC-1HP"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={12}
                        name={"AC-1HP"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={13}
                        name={"AC-1.5HP"}
                        unit={"40"}
                    />
                    <LoadComp
                        position={14}
                        name={"Toaster"}
                        unit={"40"}
                    />
                </div>
                <LoadCalculationComp />
            </div>
            <div className='text-center bg-[#f1b210] pt-10 pb-16 mb-12'>
                <p className='text-[#105504] text-2xl font-semibold'>Frequently Asked Questions</p>
                <div className='flex justify-center'>
                <div className='flex flex-col gap-4 max-w-[600px] w-[90%] mt-12'>
                    <FAQ 
                        content={"How much does it cost to install a solar energy system?"}
                    />
                    <FAQ 
                        content={"Does Solar energy work in a cloudy area?"}
                    />
                    <FAQ 
                        content={"How long do solar panel last?"}
                    />
                    <FAQ 
                        content={"Can i use my solar energy to power my entire home?"}
                    />
                    <FAQ 
                        content={"Can i use my solar energy to power my entrie home?"}
                    />
                </div>
                </div>
            
            </div>
            <p className='text-2xl text-center font-semibold text-[#105504] mb-8'>
                Ready to light up your house, <br />
                business, estates.
            </p>
            <div className='flex justify-center'>
                <button className='bg-[#f1b210] px-8 text-white h-[40px] items-center justify-between text-base rounded-full'>Contact Us</button>
            </div>
        </section>
    </main>
  )
}
