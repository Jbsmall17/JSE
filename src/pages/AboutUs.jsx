import React from 'react'
import image1 from "../assets/aboutus1.png"
import image2 from "../assets/aboutus2.png"
import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"
import team4 from "../assets/team4.png"
import team5 from "../assets/team5.png"
import Team from "../components/Team"

export default function AboutUs() {
  return (
    <main className='py-10'>
        <p className='px-[5%] text-2xl font-semibold text-center text-[#105504] mb-10'>Japs Solar Energy <br /> lighting up the world with solar</p>
        <section className='px-[5%] flex flex-row gap-16 mb-10'>
            <div className='flex-1 rounded-lg bg-[#105504] text-white py-10 px-6 text-xl font-semibold flex flex-col justify-between'>
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
                <img src={image1} alt='' />
            </div>
        </section>
        <p className='px-[5%] text-2xl font-semibold text-center text-[#105504] mb-10'>
            These are people that light up your world<br />
            our goal is simple, to shine the light and<br />
            power the world with solar.  
        </p>
        <section className='px-[5%] teams flex flex-row flex-wrap gap-x-20 gap-y-12 justify-center mb-10'>
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
        <p className='text-2xl font-semibold text-center text-[#105504] mb-10'>
            Map Integration
        </p>
        <section className='py-10 bg-[#efddaa] flex flex-row gap-20 justify-center items-center'>
            <div className='flex flex-col gap-12 text-[#105504] font-semibold text-center text-lg'>
                <p>
                    You can locate us easily<br />
                    on our address below
                </p>
                <p>
                    XYZ New Virgina Arena,<br />
                    Lagos Nigeria
                </p>
            </div>
            <div>
                <img src={image2} alt='image' />
            </div>
        </section>
    </main>
  )
}
