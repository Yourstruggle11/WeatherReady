import React from 'react'
import Weather from '../../components/Weather'
import WeatherDetails from '../../components/WeatherDetails'

export default function Home() {
  return (
    <div className='w-full h-screen bg-[#f6f6f8] flex'>
        <WeatherDetails />
        <Weather />
    </div>
  )
}
