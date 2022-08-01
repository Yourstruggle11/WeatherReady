import React from 'react'
import CustomWeekCards from '../CustomWeekCards'
// import weatherPng from "../../assets/cloudy-and-rainy-4245603-3527451.png"
import humidityPng from "../../assets/humidity-sensor-5108622-4285827.png"



export default function ThisWeekWeather() {


  return (
   <>
            <div className='w-full flex-wrap  py-10 flex items-center justify-between'>
              <CustomWeekCards desc="Heavy Intensity Rain" weather="34 &deg;" hText='Humidity' img={humidityPng} />  
              <CustomWeekCards desc="Heavy Intensity Rain" weather="34 &deg;" hText='Humidity' img={humidityPng} />  
              <CustomWeekCards desc="Heavy Intensity Rain" weather="34 &deg;" hText='Humidity' img={humidityPng} />  
              <CustomWeekCards desc="Heavy Intensity Rain" weather="34 &deg;" hText='Humidity' img={humidityPng} />  
              <CustomWeekCards desc="Heavy Intensity Rain" weather="34 &deg;" hText='Humidity' img={humidityPng} />  
              <CustomWeekCards desc="Heavy Intensity Rain" weather="34 &deg;" hText='Humidity' img={humidityPng} />  
              <CustomWeekCards desc="Heavy Intensity Rain" weather="34 &deg;" hText='Humidity' img={humidityPng} />  
              <CustomWeekCards desc="Heavy Intensity Rain" weather="34 &deg;" hText='Humidity' img={humidityPng} />  
            </div>
   </> 
  )
}
