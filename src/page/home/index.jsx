import React from 'react'
import Weather from '../../components/Weather'
import WeatherDetails from '../../components/WeatherDetails'

export default function Home() {
  return (
    <div className='w-full h-full md:h-full font-serif bg-[#f6f6f8] flex md:flex-row flex-col no-scrollbar'>
        <WeatherDetails />
        <Weather />
    </div>
  )
}
