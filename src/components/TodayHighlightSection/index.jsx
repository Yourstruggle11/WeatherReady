import React from 'react'
import weatherPng from "../../assets/cloudy-and-rainy-4245603-3527451.png"
import humidityPng from "../../assets/humidity-sensor-5108622-4285827.png"
import CustomHighlightCards from '../CustomHighlightCards'

export default function TodayHighlightSection() {
  return (
    <>
        <div className='w-full flex-wrap  py-10 flex items-center justify-between'>
            <CustomHighlightCards measure="89%" hText='Humidity' img={humidityPng} />
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng} />
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng} />
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng} />
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng} />
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng} />
        </div>
    </>
  )
}
