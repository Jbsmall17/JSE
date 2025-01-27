import React, { useEffect, useState } from 'react'
import service1 from "../assets/servicePage1.png"
import service2 from "../assets/servicePage2.png"
import service3 from "../assets/servicePage3.png"
import service4 from "../assets/servicePage4.png"
import service5 from "../assets/servicePage5.png"
import service6 from "../assets/servicePage6.png"
import icon1 from "../assets/serviceIcon1.png"
import icon2 from "../assets/serviceIcon2.png"
import { IoMdCheckmark, IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useCustomContext } from '../context/context'
import { useUtilsHook } from '../utils/utils'
import { useNavigate } from 'react-router-dom'


function ServiceComp ({ children, title, desc }) {
    const navigate = useNavigate()
    return (
        <div className='flex-1 bg-[#105504] rounded-lg p-6 text-white text-start'>
            <div className='flex flex-row gap-4 items-center mb-20'>
                <div className='w-[28px] h-[28px] rounded-full bg-[#f1b210] flex justify-center items-center'>
                    { children }
                </div>
                <p className='text-lg font-semibold'>{ title }</p>
            </div>
            <p className='text-base font-normal'>{ desc }</p>
        </div>
    )
}

function LoadComp ({ position, name, number, unit, idx }) {
    const { loadArray, setLoadArray } = useCustomContext()
    function increaseCount () {
        const newArray = loadArray.map((item, index) => {
            if (index === idx) {
                return {
                    ...item,
                    number: item.number + 1
                }
            }
            else {
                return item
            }
        })
        setLoadArray(newArray)
    }

    function decreaseCount () {
        const newArray = loadArray.map((item, index) => {
            if (index === idx) {
                if (item.number >= 1) {
                    return {
                        ...item,
                        number: item.number - 1
                    }
                } else {
                    return item
                }

            }
            else {
                return item
            }
        })
        setLoadArray(newArray)
    }


    return (
        <>
            {
                position == 1
                    ?
                    <div className='grid grid-cols-3 lg:grid-cols-[2.25fr_1.5fr_1.75fr] gap-x-2 md:gap-x-16 lg:gap-x-24 xl:gap-x-32 gap-y-4 mb-4'>
                        <p className='text-[#f1b210] text-lg'>Appliances</p>
                        <p className='text-[#f1b210] text-lg'>Quantity</p>
                        <p className='text-[#f1b210] text-lg'>Load</p>
                        <div className='bg-[#105504] text-white p-2 rounded-lg flex justify-center items-center'>{ name }</div>
                        <div className='text-white bg-[#105504] p-2 rounded-lg flex justify-between items-center'>
                            <p>{ number }</p>
                            <div className='flex flex-col gap-2'>
                                <IoIosArrowUp className='cursor-pointer' onClick={ increaseCount } />
                                <IoIosArrowDown className='cursor-pointer' onClick={ decreaseCount } />
                            </div>
                        </div>
                        <div className='bg-[#105504] text-white p-2 rounded-lg flex justify-center items-center'>{ unit }</div>
                    </div>
                    :
                    <div className='grid grid-cols-3 lg:grid-cols-[2.25fr_1.5fr_1.75fr] gap-x-2 md:gap-x-16 lg:gap-x-24 xl:gap-x-32 gap-y-4 mb-4'>
                        <div className='bg-[#105504] text-white p-2 rounded-lg flex justify-center items-center'>{ name }</div>
                        <div className='text-white bg-[#105504] p-2 rounded-lg flex justify-between items-center'>
                            <p>{ number }</p>
                            <div className='flex flex-col gap-2'>
                                <IoIosArrowUp className='cursor-pointer' onClick={ increaseCount } />
                                <IoIosArrowDown className='cursor-pointer' onClick={ decreaseCount } />
                            </div>
                        </div>
                        <div className='bg-[#105504] text-white p-2 rounded-lg flex justify-center items-center'>{ unit }</div>
                    </div>
            }
        </>
    )
}

function LoadCalculationComp () {
    const [total, setTotal] = useState(0)
    const { loadArray } = useCustomContext()

    useEffect(() => {
        const total = loadArray.reduce((acc, currentValue) => {
            const { number, unit } = currentValue
            return acc + (number * parseInt(unit));
        }, 0)
        setTotal(total)
    }, [loadArray])

    return (
        <div className='p-8 flex-1 border-2 border-[#f1b210] rounded-lg text-white self-stretch sm:self-center lg:self-start text-center bg-[#105504]'>
            <div className='flex flex-col gap-1 items-center pb-4 border-b-2 border-b-white'>
                <p className='text-lg'>Your Total Load</p>
                <RiArrowDownSFill className='text-2xl' />
                <p className='text-3xl'>{ total }</p>
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
                    <p className='px-2 py-1 bg-[#f1b210] text-black text-lg font-semibold'>Solar panel capacity-watt</p>
                    <p className='px-2 py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
                <div className='text-center mb-2'>
                    <p className='px-2 py-1 bg-[#f1b210] text-black text-lg font-semibold'>Panel Quantity</p>
                    <p className='px-2 py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
                <div className='text-center mb-2'>
                    <p className='px-2 py-1 bg-[#f1b210] text-black text-lg font-semibold'>Charge Controller</p>
                    <p className='px-2 py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
                <div className='text-center mb-2'>
                    <p className='px-2 py-1 bg-[#f1b210] text-black text-lg font-semibold'>Qty of charge controller</p>
                    <p className='px-2 py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
                <div className='text-center mb-2'>
                    <p className='px-2 py-1 bg-[#f1b210] text-black text-lg font-semibold'>Panel bank/ K watts</p>
                    <p className='px-2 py-1 bg-white text-[#105504] text-lg font-semibold'>0</p>
                </div>
            </div>
        </div>
    )
}

function FAQ ({ content }) {
    return (
        <div className='relative py-2 px-2 md:py-4 text-white flex flex-row gap-4 items-center justify-start md:justify-center bg-[#105504]'>
            <p className='text-start text-base md:text-lg font-normal md:font-semibold'>{ content }</p>
            <RiArrowRightSLine className='text-xl absolute right-2 md:right-4 top-[50%] -translate-y-[50%] font-semibold' />
        </div>
    )
}


export default function Service () {
    const { solarRefDiv, mainRefDiv, energyRefDiv, activePage, faqRefDiv, loadArray } = useCustomContext()
    const { scrollToSolar, scrollToMain, scrollToEnergy, scrollToFaq } = useUtilsHook()
    const navigate = useNavigate()

    useEffect(() => {
        if (activePage === "solar") {
            scrollToSolar()
        }
        else if (activePage === "main") {
            scrollToMain()
        } else if (activePage === "energy") {
            scrollToEnergy()
        }
        else if (activePage === "faq") {
            scrollToFaq()
        }
        else {
            return
        }
    }, [activePage])

    const handleQuoteClick = () => {
        navigate('/quote')
    }

    return (
        <>
            <Header
                pageName={ "services" }
            />
            <main className='px-[5%] pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-16'>
                <section className='flex flex-col md:flex-row gap-4 lg:gap-6 xl:gap-8 mb-6 md:mb-8'>
                    <div className='p-4 lg:p-8 bg-[#105504] text-white flex flex-col justify-between gap-4 lg:gap-6 xl:gap-0 flex-[1.5] rounded-lg'>
                        <p className='text-base lg:text-xl font-semibold'>
                            Japs Solar Energy provides top-quality solar panels to homeowners and businesses, helping you save on energy costs and reduce your carbon footprint. Benefits are; - Lower energy bills. We Provide top quality solar panel to homeowners and businesses helping you save on energy cost and contributing to greener planet
                        </p>
                        <div className='flex flex-row justify-between text-2xl lg:text-3xl font-semibold'>
                            <p className='whitespace-none'>100+ companies</p>
                            <p className='whitespace-none'>10k Houses</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img className='flex-image h-full w-full' src={ service1 } alt="image in service page" />
                    </div>
                </section>
                <section>
                    <div className='flex justify-center items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
                        <div className='pt-2 pb-4 px-6 bg-[#f1b210] flex flex-row justify-between max-w-[600px] w-[90%]'>
                            <div className='text-center'>
                                <p className='text-xl md:text-2xl text-[#105504] font-semibold'>200+</p>
                                <p className='text-base md:text-lg text-[#105504]'>Clients</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-xl md:text-2xl text-[#105504] font-semibold'>1month</p>
                                <p className='text-base md:text-lg text-[#105504]'>Guaranty</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-xl md:text-2xl text-[#105504] font-semibold'>100+</p>
                                <p className='text-base md:text-lg text-[#105504]'>Satisfied customers</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-center text-2xl font-semibold mb-4'>
                        Here's what our valued customers have to say<br /> about their experience with us:?
                    </p>
                    <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 sm:items-center justify-center'>
                        <div className='flex-1'>
                            <img className='flex-image w-full' src={ service2 } alt={ "image in service page" } />
                        </div>
                        <ServiceComp
                            children={ <img className='w-[80%] h-[80%]' src={ icon1 } alt='service icon' /> }
                            title={ "Excellent Work" }
                            desc={ "we believe in personalized pricing, contact us today to receive a detailed quoted tailored specifically for your property and energy consumption" }
                        />
                        <ServiceComp
                            children={ <img className='w-[80%] h-[80%]' src={ icon2 } alt='service icon' /> }
                            title={ "Clear on Cost" }
                            desc={ "we believe in personalized pricing, contact us today to receive a detailed quoted tailored specifically for your property and energy consumption" }
                        />
                    </div>
                    <p ref={ solarRefDiv } className='text-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-2 md:mb-4 lg:mb-6 text-2xl text-[#105504] font-semibold'>
                        Either Residential, commercial or industrial solar <br /> we got you covered
                    </p>
                    <div className='flex flex-row flex-wrap justify-center gap-x-12 md:gap-x-16 lg:gap-x-16 xl:justify-between items-center gap-y-8'>
                        <div className='w-[100%] max-w-[325px]'>
                            <img className='flex-image2 w-full block mb-4' src={ service3 } alt={ "service page image" } />
                            <div className='flex justify-center items-center'>
                                <button
                                    onClick={ handleQuoteClick }
                                    className='px-8 h-[40px] text-base rounded-full font-semibold flex justify-center items-center bg-[#f1b210] hover:bg-white hover:border hover:border-[#f1b210] transition duration-500 cursor-pointer'
                                >
                                    Get a quote
                                </button>
                            </div>
                        </div>
                        <div className='w-[100%] max-w-[325px]'>
                            <img className='flex-image2 w-full block mb-4' src={ service4 } alt={ "service page image" } />
                            <div className='flex justify-center items-center'>
                                <button
                                    onClick={ handleQuoteClick }
                                    className='px-8 h-[40px] text-base rounded-full font-semibold flex justify-center items-center bg-[#f1b210] hover:bg-white hover:border hover:border-[#f1b210] transition duration-500 cursor-pointer'
                                >
                                    Get a quote
                                </button>
                            </div>
                        </div>
                        <div className='w-[100%] max-w-[325px]'>
                            <img className='flex-image2 w-full block mb-4' src={ service5 } alt={ "service page image" } />
                            <div className='flex justify-center items-center'>
                                <button
                                    onClick={ handleQuoteClick }
                                    className='px-8 h-[40px] text-base rounded-full font-semibold flex justify-center items-center bg-[#f1b210] hover:bg-white hover:border hover:border-[#f1b210] transition duration-500 cursor-pointer'
                                >
                                    Get a quote
                                </button>
                            </div>
                        </div>
                    </div>
                    <p ref={ mainRefDiv } className='text-center mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16 mb-4 md:mb-8 xl:mb-12 text-2xl text-[#105504] font-semibold'>
                        Maintananace Plans are available upon Installation
                    </p>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 xl:gap-16 justify-center items-center '>
                        <img className='w-[100%] max-w-[300px] lg:max-w-[425px]' src={ service6 } alt={ "service page image" } />
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
                                    <IoMdCheckmark className='text-[#105504] text-xl font-semibold' />
                                </div>
                                <p className='text-xl font-semibold'>General repair maintanance</p>
                            </div>
                            <div className='flex flex-row gap-6 items-center mb-6'>
                                <div className='w-[28px] h-[28px] flex justify-center items-center bg-[#f1b210]'>
                                    <IoMdCheckmark className='text-[#105504] text-xl font-semibold' />
                                </div>
                                <p className='text-xl font-semibold'>Fixing of Faulty wiring</p>
                            </div>
                            <div className='flex justify-center'>
                                <button className='px-6 h-[40px] rounded-2xl flex justify-center items-center text-base font-semibold text-[#105504] bg-[#f1b210] hover:bg-white hover:border hover:border-[#f1b210] transition duration-500 cursor-pointer'>Book Now</button>
                            </div>
                        </div>
                    </div>
                    <p ref={ energyRefDiv } className='text-center mt-12 mb-10 mb-6 text-2xl text-[#105504] font-semibold'>
                        Energy Calculator
                    </p>
                    <div className='flex flex-col items-center lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 mb-8 lg:mb-12 xl:mb-16'>
                        <div className='w-full lg:w-auto flex-[2]'>
                            {
                                loadArray.map(({ id, appliances, number, unit }, idx) => {
                                    return (
                                        <LoadComp
                                            key={ idx }
                                            idx={ idx }
                                            position={ id }
                                            number={ number }
                                            name={ appliances }
                                            unit={ unit }
                                        />
                                    )
                                })
                            }
                        </div>
                        <LoadCalculationComp />
                    </div>
                    <div ref={ faqRefDiv } className='text-center bg-[#f1b210] pt-4 md:pt-6 lg:pt-10 pb-16 mb-6 md:mb-8 lg:mb-12'>
                        <p className='text-[#105504] text-2xl font-semibold'>Frequently Asked Questions</p>
                        <div className='flex justify-center'>
                            <div className='flex flex-col gap-4 max-w-[600px] w-[95%] mt-6 md:mt-8 lg:mt-12'>
                                <FAQ
                                    content={ "How much does it cost to install a solar energy system?" }
                                />
                                <FAQ
                                    content={ "Does Solar energy work in a cloudy area?" }
                                />
                                <FAQ
                                    content={ "How long do solar panel last?" }
                                />
                                <FAQ
                                    content={ "Can i use my solar energy to power my entire home?" }
                                />
                                <FAQ
                                    content={ "Is Solar energy environmental friendly?" }
                                />
                            </div>
                        </div>

                    </div>
                    <p className='text-2xl text-center font-semibold text-[#105504] mb-8'>
                        Ready to light up your house, <br />
                        business, estates.
                    </p>
                    <div className='flex justify-center'>
                        <button onClick={()=>{navigate("/contact-us");window.scrollTo(0,0)}} className='bg-[#f1b210] hover:bg-white hover:border hover:border-[#f1b210] hover:text-[#f1b210] w-[140px] text-white h-[40px] items-center justify-between text-base rounded-full transition-all duration-500'>
                            Contact Us
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
