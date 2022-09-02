import React from 'react'
import { useSelector } from 'react-redux';
import humidityPng from "../../assets/humidity-sensor-5108622-4285827.png"
import CustomHighlightCards from '../CustomHighlightCards'
import Loader from '../Loader';

export default function TodayHighlightSection() {
  const {weather,isDark} = useSelector(state => state.weather);


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
            <CustomHighlightCards measure={current.humidity+"%"} hText='Humidity' img={humidityPng} isSunsetDetailsAvailable={false} />
            <CustomHighlightCards measure={current.wind_speed.toFixed(1) + "m/s"} hText='Wind Speed' img={`/weatherIcons/wind-${isDark ? "night" : "day"}.png`}  isSunsetDetailsAvailable={false}/>
            <CustomHighlightCards sunrise={formatter.format(new Date(current.sunrise * 1000))} sunset={formatter.format(new Date(current.sunset * 1000))} isSunsetDetailsAvailable={true} />
            <CustomHighlightCards measure={current.clouds + "%"} hText='Clouds' img={"/weatherIcons/clouds.png"}  isSunsetDetailsAvailable={false}/>
            <CustomHighlightCards measure={current.uvi} hText='UV Index' img={"/weatherIcons/uv.png"}  isSunsetDetailsAvailable={false}/>
            <CustomHighlightCards measure={current.pressure + " hPa"} hText='Pressure' img={"/weatherIcons/pressure.png"}  isSunsetDetailsAvailable={false}/>
        </div>
    </>
  )
}
