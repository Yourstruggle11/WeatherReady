import React from "react";
import weactherPic from "../../assets/cloud-3321877-2775240.png";
import Loader from "../Loader";
import Temperature from "../Temperature/Temperature";
import { useSelector } from "react-redux";

import { WeatherLogic } from "./Weather.logic";

function Weather() {
  const { city, country, weather, unit } = useSelector(
    (state) => state.weather
  );
  const { GetCurrentLocationWeather } = WeatherLogic();

  if (!weather) {
    return <Loader />;
  }

  const { current } = weather;
  const date = new Date(weather.current.dt * 1000);
  const formatter = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    timeZone: weather.timezone,
  });
  const dayFormatter = Intl.DateTimeFormat([], {
    weekday: "long",
    timeZone: weather.timezone,
  });

  return (
    <>
      <div className="md:w-1/4 w-full md:fixed right-0 h-screen bg-white flex p-10 flex-col">
        <div className="w-full mb-10">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block outline-none focus:outline-none p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search For your city..."
              required
            />
            <button
              onClick={GetCurrentLocationWeather}
              className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 outline-none focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="max-h-60 flex items-center justify-center">
          <img src={weactherPic} alt="weatherPic" className="drop-shadow-2xl" />
        </div>
        <div className=" max-h-40 mb-5">
          <p className="text-8xl mb-2">
            {<Temperature temperature={current.temp} />} &deg;{unit}
          </p>
          <p className="text-1xl text-slate-700">
            Feels like {<Temperature temperature={current.feels_like} />} °
            {unit}
          </p>
          <h1 className="text-2xl">{current.weather[0].description}</h1>
        </div>
        <span className="bg-black block h-[0.5px] mb-5" />
        <p className="text-3xl mb-5">
          {dayFormatter.format(date)},{" "}
          <span className="text-neutral-700	">{formatter.format(date)}</span>{" "}
        </p>
        <p className="text-3xl flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>{" "}
          {city}, {country}
        </p>
      </div>
    </>
  );
}

export default Weather;
