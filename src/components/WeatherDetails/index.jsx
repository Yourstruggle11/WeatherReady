import React from 'react'
import TodayWeather from "../TodayWeather";

export default function WeatherDetails() {
  return (
    <>
        <div className='md:w-3/4 md:p-20 p-6 order-last md:order-first w-full h-full bg-[#f6f6f8] no-scrollbar'> 
          <div className='flex items-center justify-between w-full mb-5'>
              <p className='text-3xl '>Today</p>
              <div className='flex'>
                <span className='w-10 h-10  block font-bold cursor-pointer rounded-full bg-black text-white mr-5 flex items-center justify-center'>&deg; C</span>
                <span className='w-10 h-10  block font-bold cursor-pointer rounded-full bg-black text-white flex items-center justify-center'>&deg;F</span>
              </div>
          </div>

          <TodayWeather  />

          <div className='flex items-center justify-between w-full mb-5'>
              <p className='text-3xl '>Today's Highlights</p>
          </div>
      

        </div>
    </>

  )
}
