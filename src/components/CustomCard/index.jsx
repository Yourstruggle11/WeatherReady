import React from 'react'
import Temperature from '../Temperature/Temperature'


export default function CustomCard({
  time,
  temp,
  icon,
  description,
  timezone
}) {

  const date = new Date(time * 1000);
  const formatter = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    timeZone: timezone,
  });
  const dayFormatter = Intl.DateTimeFormat([], {
    weekday: "long",
    timeZone: timezone,
  });

  return (
    <div className="flex justify-center max-w-[15rem] max-h-[15rem]">
    <div className="rounded-lg w-full shadow-lg bg-white flex flex-col items-center">
        <img
          className="rounded-t-lg h-[7rem] w-[12rem] drop-shadow-2xl"
          src={`/weatherIcons/${icon}.png`}
          alt="weatherPng"
        />
      <div className="p-0 md:p-6 text-center">
        <h5 className="text-gray-700 text-l md:text-xl font-medium mb-2">{dayFormatter.format(date)}, <span className="text-stone-900">{formatter.format(date)}</span></h5>
        <p className="text-slate-700 mb-2">
        {description}
        </p>
        <h1 className="text-2xl"> <Temperature temperature={temp} /> &deg;</h1>
      </div>
    </div>
  </div>
  )
}
