import React from 'react'
import quote from "../assets/quote.svg"
import heroImage from "../assets/heroImage.png"
import Service from '../components/Service'
import solarIcon from "../assets/solar_icon.png"
import servicesIcon from "../assets/services_icon.png"
import calculatorIcon from "../assets/calculator_icon.png"
import Testimonials from '../components/Testimonials'
import client1 from "../assets/client1.png"
import client2 from "../assets/client2.png"
import client3 from "../assets/client3.png"
import caseStudy1 from "../assets/case_study1.png"
import caseStudy2 from "../assets/case_study2.png"
import caseStudy3 from "../assets/case_study3.png"
import caseStudy4 from "../assets/case_study4.png"
import caseStudy5 from "../assets/case_study5.png"
import caseStudy6 from "../assets/case_study6.png"
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"
import team4 from "../assets/team4.png"
import team5 from "../assets/team5.png"
import Team from "../components/Team"
import CaseStudy from '../components/CaseStudy'
import contact1 from "../assets/contact1.png"
import contact2 from "../assets/contact2.png"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useNavigate } from 'react-router-dom'
import { useCustomContext } from '../context/context'
import { useUtilsHook } from '../utils/utils'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


// green 105504
// yellow #f1b210
export default function Home() {
   const {scrollToSolar} = useUtilsHook()
  const {setActivePage} = useCustomContext()

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
      <Header 
        pageName={"home"}
      />
      <main>
      <section className='px-[5%] py-4 md:py-8 lg:py-12 flex flex-col lg:flex-row gap-6 items-center'>
        <div className='text-center flex-1'>
          <p className='text-5xl font-semibold text-[#105504] mb-4'>Empowering Solar <br />Solutions</p>
          <p className='text-lg font-semibold text-[#105504] mb-4'>Use Solar energy to power your home your <br /> not depend on the national grid</p>
          <div className='flex flex-row gap-6 items-center justify-center'>
            <div onClick={()=>{setActivePage("solar");scrollToSolar()}} className='div-consult2 cursor-pointer relative bg-[#f1b210] py-1 pl-1 pr-8 rounded-sm'>
              <p className='bg-white px-2 py-1'>Request Quote</p>
              <img className='absolute top-[50%] -translate-y-[50%] right-2' src={quote} alt='quote-icon' />
            </div>
            <div className='div-consult cursor-pointer bg-[#f1b210] py-2 px-4 font-semibold rounded-lg'>
              Get Consultation
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <img className='w-full' src={heroImage} alt='hero image' />
        </div>
      </section>
      <section className='px-[5%] bg-[#105504] py-4 lg:py-6'>
        <p className='text-2xl font-semibold text-center text-[#f1b210] mb-4 lg:mb-8'>Our service</p>
        <div className='mb-4 flex flex-col md:flex-row justify-center gap-6 md:gap-10 px-[50px]'>
          <Service 
            children={<img src={solarIcon} alt="solar icon" />}
            serviceName="Solar Installation"
            serviceDesc="Our team of certified professionals has extensive experience in installing solar panels for various types of properties including residential, commercial and industry. We prioritize safety, efficiency and quality workmanship."
          />
          <Service 
            children={<img src={servicesIcon} alt='service-icon' />}
            serviceName={"Maintenance Services"}
            serviceDesc={"Schedule routine checks to access the condition of the panels, and electrical connections, inspections help prevent small issues  from becoming larger costlier repairs"}
          />
          <Service 
            children={<img src={calculatorIcon} alt='energy-icon' />}
            serviceName={"Energy Calculator"}
            serviceDesc={"Set up a system for logging production data sudden dips in performance can indicate dust accumulation, mechanical issues or shading problems."}
          />
        </div>
        <div className='text-end'>
            <a href="#" className='text-lg text-[#f1b210] font-semibold underline'>See More</a>
          </div>
      </section>
      <section className='px-[5%] pt-4 md:pt-6 lg:pt-8 pb-6 md:pb-8 lg:pb-12'>
        <p className='text-center text-2xl font-semibold mb-6 md:mb-8 lg:mb-10'>What our clients say about us</p>
        <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
          <Testimonials 
            content={"I was skeptical about using solar but Japs solar energy made process seamless. Their team guided me through every step from installation to maintenance."}
            children={<img src={client1} alt='image of client 1' />}
            name={"John Doe"}
            role={"CEO Shoprite"}
            bgDivColor={"bg-[#f1b210]"}
            bgIconColor={"text-[#105504]"}
          />
          <Testimonials 
            content={"Japs solar energy helped us transition to renewable energy significantly lowering our operational cost. Their professionalism and expertise impressed us"}
            children={<img src={client2} alt='image of client 2' />}
            name={"Jane Doe"}
            role={"Business owner"}
            bgDivColor={"bg-[#105504]"}
            bgIconColor={"text-[#f1b210]"}
          />
          <Testimonials 
            content={"As a consicious consumer, I sought a reliable solar provider. Japs solar energy exceeded expectations with their top-notch products and exceptional customer service"}
            children={<img src={client3} alt='image of client 3' />}
            name={"Sarah Taylor"}
            role={"Eco-warrior"}
            bgDivColor={"bg-[#f1b210]"}
            bgIconColor={"text-[#105504]"}
          />
        </div>
      </section>
      <section className='bg-[#105504] px-[5%] pt-4 md:pt-6 lg:pt-8 pb-8 sm:pb-10 md:pb-12 lg:pb-16'>
        <p className='text-white text-2xl font-semibold text-center mb-4 lg:mb-6'>Case Studies</p>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6'>
          <CaseStudy 
            children={<img className='w-full' src={caseStudy1} alt='image of case study 1' />}
            content={"Houses in Ikoyi estate are properly built and all houses in the estate have solar installation on their roof"}
          />
          <CaseStudy 
            children={<img className='w-full' src={caseStudy2} alt='image of case study 2' />}
            content={"Houses in Ikoyi estate are properly built and all houses in the estate have solar installation on their roof"}
          />
          <CaseStudy 
            children={<img className='w-full' src={caseStudy3} alt='image of case study 3' />}
            content={"Network providers use Solar installations to power their network mask in both rural and urban area"}
          />
          <CaseStudy 
            children={<img className='w-full' src={caseStudy4} alt='image of case study 4' />}
            content={"Houses in Ikoyi estate are properly built and all houses in the estate have solar installation on their roof"}
          />
          <CaseStudy 
            children={<img className='w-full' src={caseStudy5} alt='image of case study 5' />}
            content={"Houses in Ikoyi estate are properly built and all houses in the estate have solar installation on their roof"}
          />
          <CaseStudy 
            children={<img className='w-full' src={caseStudy6} alt='image of case study 6' />}
            content={"Houses in Ikoyi estate are properly built and all houses in the estate have solar installation on their roof"}
          />
        </div>
      </section>
      <section className='px-[5%] pt-4 lg:pt-8 sm:pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-16'>
        <div className='border-2 border-[#f1b210] px-2 md:px-4 py-6 md:py-8 lg:py-10'>
          <p className='text-center text-2xl text-[#105504] mb-4 font-semibold'>About Us</p>
          <p className='text-center text-lg text-[#105054] mb-4 font-semibold'>We are the people who light up the world,<br /> here are the leading roles who made uo the company structure</p>
          <div className='hidden sm:flex teams flex-row flex-wrap gap-x-4 sm:gap-x-4 md:gap-x-6 lg:gap-x-14 xl:gap-x-18 gap-y-6 md:gap-y-8 lg:gap-y-12 justify-center'>
            <Team 
              children={<img className='w-full' src={team1} alt="image of team memeber" />}
              role={"CEO"}
              name={"John Doe"}
            />
            <Team 
              children={<img  className='w-full' src={team2} alt="image of team memeber" />}
              role={"CFO"}
              name={"John Doe"}
            />
            <Team 
              children={<img className='w-full' src={team3} alt="image of team memeber" />}
              role={"MD"}
              name={"John Doe"}
            />
            <Team 
              children={<img className='w-full' src={team4} alt="image of team memeber" />}
              role={"Solar Installer"}
              name={"John Doe"}
            />
            <Team 
              children={<img className='w-full' src={team5} alt="image of team memeber" />}
              role={"Sales Rep"}
              name={"John Doe"}
            />
          </div>
          <div className='flex justify-center'>
          <Slider {...settings} className='block sm:hidden'>
          <Team 
              children={<img className='w-full' src={team1} alt="image of team memeber" />}
              role={"CEO"}
              name={"John Doe"}
            />
            <Team 
              children={<img  className='w-full' src={team2} alt="image of team memeber" />}
              role={"CFO"}
              name={"John Doe"}
            />
            <Team 
              children={<img className='w-full' src={team3} alt="image of team memeber" />}
              role={"MD"}
              name={"John Doe"}
            />
            <Team 
              children={<img className='w-full' src={team4} alt="image of team memeber" />}
              role={"Solar Installer"}
              name={"John Doe"}
            />
            <Team 
              children={<img className='w-full' src={team5} alt="image of team memeber" />}
              role={"Sales Rep"}
              name={"John Doe"}
            />
          </Slider>
          </div>
        </div>
        <div className='px-[5%] pt-4 md:pt-8 pb-12'>
          <p className='text-2xl text-center font-semibold mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 text-[#104504]'>Contact us</p>
          <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 justify-between items-center'>
            <div>
              <p className='text-base mb-6'>
                Have questions or need assistance?<br /> we're here to help! Reach out to us,<br /> 
                and our teams at japs solare Energy.
              </p>
              <button className='h-[40px] w-[140px] flex items-center justify-center font-semibold text-lg rounded-xl bg-[#f1b210] hover:bg-transparent hover:border hover:border-[#f1b210] transition-all duration-500'>
                Contact us
              </button>
            </div>
            <div className='flex flex-col md:flex-row gap-6 md:gap-[5%]'>
              <img className='md:w-[45%]' src={contact1} alt='image 1' />
              <img className='lg:-translate-y-[20%] md:w-[45%]' src={contact2} alt='image 2' /> 
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
