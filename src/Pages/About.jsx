import React from 'react'
import TopBanner from '../Components/TopBanner'
import trip from '../assets/trip.gif'
import time from '../assets/fire-time.gif'
import price from '../assets/best-price.gif'

const About = () => {
  return (
    <div>
     <TopBanner text='About'/>
     <div className='max-w-7xl mx-auto my-10'>
      <div className='flex flex-col md:flex-row px-4 md:px-0 gap-4'>
        <div className='flex-1'>
          <div className='relative'>
            <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600" alt="travel" className='rounded-lg'/>
            <div className='absolute bottom-[45%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg'>
              HOW WE ARE THE <br /> BEST FOR TRAVEL!
            </div>
          
          </div>
          <h1 className='md:text-4xl font-bold mt-6 mb-4 text-3xl'>What exactly do we offer!</h1>
          <p className='text-gray-500'>At VoyAger, we redefine travel by offering unforgettable experiences tailored to your dreams. Our commitment to excellence ensures seamless planning, unmatched affordability, and exclusive packages designed for every traveler. From exotic destinations to hidden gems, we curate journeys filled with adventure, culture, and relaxation. With our 24/7 customer support and dedicated travel experts, you’ll never feel lost or unprepared. Trust us to handle the details, from flights and accommodations to guided tours and local insights. VoyAger values your time, making each moment of your journey worthwhile. Our top-notch services, combined with innovative tools and user-friendly platforms, guarantee convenience and satisfaction. Let VoyAger take you beyond the ordinary and into the extraordinary, where memories are crafted and destinations become unforgettable stories. With us, travel isn’t just a trip; it’s a lifetime experience! Your adventure begins with VoyAger.</p>
        </div>
        <div className='flex-1'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={trip} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>50+ Destination</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
          <div className='bg-white p-6 my-4 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={price} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Best Price</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex flex-col md:flex-row items-start mb-4'>
              <img src={time} alt="" className='w-20'/>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Super Fast Booking</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>We offer the best travel experiences with personalized services and unbeatable prices.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About