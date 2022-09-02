import React from 'react'
import CustomWeekCards from '../CustomWeekCards'
import { useSelector } from 'react-redux';
import Loader from '../Loader';



export default function ThisWeekWeather() {
  const {weather,isDark} = useSelector(state => state.weather);


  if (!weather) {
    return <Loader />;
  }
  const { daily } = weather;

  return (
   <>
            <div className='w-full flex-wrap  py-10 flex items-center justify-between'>
              {daily.map((weather, index) =>{
                        let date = new Date(weather.dt * 1000);
                        const dayFormatter = Intl.DateTimeFormat([], {
                          weekday: "long",
                          timeZone: weather.timezone,
                        });
                return(
                  <CustomWeekCards key={index} desc={weather.weather[0].description} minWeather={weather.temp.min} maxWeather={weather.temp.max} hText={dayFormatter.format(date)} img={`/weatherIcons/${weather.weather[0].icon}.png`} />
                )
              })}
            </div>
   </> 
  )
}
