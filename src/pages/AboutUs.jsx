import React from 'react'
import image1 from "../assets/aboutus1.png"
import image2 from "../assets/aboutus2.png"
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"
import team4 from "../assets/team4.png"
import team5 from "../assets/team5.png"
import Team from "../components/Team"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function AboutUs() {

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
            pageName={"about-us"}
        />
        <main className='py-6 lg:py-10'>
        <p className='px-[5%] text-2xl font-semibold text-center text-[#105504] mb-6 lg:mb-10'>Japs Solar Energy <br /> lighting up the world with solar</p>
        <section className='px-[5%] flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-6 lg:mb-10'>
            <div className='flex-1 rounded-lg bg-[#105504] text-white py-6 lg:py-10 px-4 lg:px-6 text-lg lg:text-xl font-semibold flex flex-col gap-6 md:gap-8 lg:gap-10'>
                <p>
                    At Japs Solar Energy, we are dedicated to 
                    providing clean, sustainable energy solutions
                    that power homes, businesses, and communities.
                </p>
                <p>
                    Our mission is to make solar energy accessible 
                    and affordable to everyone, contributing to a 
                    greener future while helping our clients reduce 
                    their energy costs.
                </p>
            </div>
            <div className='flex-1'>
                <img className='w-full h-full' src={image1} alt='' />
            </div>
        </section>
        <p className='px-[5%] flex justify-center items-center text-xl md:text-2xl font-semibold text-center text-[#105504] mb-6 lg:mb-10'>
            <p className='md:w-[475px]'>
                These are people that light up your world
                Our goal is simple, to shine the light and
                power the world with solar.
            </p>  
        </p>
        <section className='teams px-[5%] teams hidden sm:flex flex-row flex-wrap gap-x-4 sm:gap-x-4 md:gap-x-6 lg:gap-x-14 xl:gap-x-18 gap-y-6 md:gap-y-8 lg:gap-y-12 justify-center mb-6 lg:mb-10'>
            <Team 
                children={<img className='w-full' src={team1} alt="image of team memeber" />}
                role={"Chief Executive officer"}
                name={"John Doe"}
            />
            <Team 
                children={<img className='w-full' src={team2} alt="image of team memeber" />}
                role={"Chief Finance officer"}
                name={"John Doe"}
            />
            <Team 
                children={<img className='w-full' src={team3} alt="image of team memeber" />}
                role={"Managing Director"}
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
        </section>
        <div className='flex justify-center'>
        <Slider {...settings}>
            <Team 
                children={<img className='w-full' src={team1} alt="image of team memeber" />}
                role={"Chief Executive officer"}
                name={"John Doe"}
            />
            <Team 
                children={<img className='w-full' src={team2} alt="image of team memeber" />}
                role={"Chief Finance officer"}
                name={"John Doe"}
            />
            <Team 
                children={<img className='w-full' src={team3} alt="image of team memeber" />}
                role={"Managing Director"}
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
        <section className='py-8 lg:py-10 bg-[#efddaa] flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 xl:gap-20 justify-center items-center'>
            <div className='flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 text-[#105504] font-semibold text-center text-lg'>
                <p>
                    You can locate us easily<br />
                    on our address below
                </p>
                <p>
                    Chop c12 global plaza<br /> 
                    wuse Abuja, Nigeria
                </p>
            </div>
            <div>
                <img src={image2} alt='image' />
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}
