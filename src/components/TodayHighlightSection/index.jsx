import React from 'react'
import { useSelector } from 'react-redux';
import weatherPng from "../../assets/cloudy-and-rainy-4245603-3527451.png"
import humidityPng from "../../assets/humidity-sensor-5108622-4285827.png"
import CustomHighlightCards from '../CustomHighlightCards'
import Loader from '../Loader';

export default function TodayHighlightSection() {
  const {weather} = useSelector(state => state.weather);

  if (!weather) {
    return <Loader />;
  }
  const { current } = weather;
  const formatter = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    timeZone: weather.timezone,
  });
  return (
    <>
        <div className='w-full flex-wrap py-10 flex items-center justify-between'>
            <CustomHighlightCards measure="89%" hText='Humidity' img={humidityPng} isSunsetDetailsAvailable={false} />
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng}  isSunsetDetailsAvailable={false}/>
            <CustomHighlightCards measure="45%" hText='Humidity' img={weatherPng}  isSunsetDetailsAvailable={true} />
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng}  isSunsetDetailsAvailable={false}/>
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng}  isSunsetDetailsAvailable={false}/>
            <CustomHighlightCards measure="89%" hText='Humidity' img={weatherPng}  isSunsetDetailsAvailable={false}/>
        </div>
    </>
  )
}
