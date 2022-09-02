import React from "react";
import Temperature from "../Temperature/Temperature";

export default function CustomWeekCards({ img,hText,minWeather, maxWeather, desc }) {
  return (
    <>
      <div className="flex justify-center max-w-[10rem] md:max-w-[15rem] ml-2 mb-5 md:max-h-[15rem] min-h-[17rem]">
        <div className="rounded-lg shadow-lg bg-white dark:bg-slate-900 dark:text-white">
          <h5 className="text-gray-900 text-center md:text-xl font-medium mb-2">
            {hText}
          </h5>
          <img
            className="rounded-t-lg h-1/2 w-full drop-shadow-2xl"
            src={img}
            alt="weatherPng"
          />
          <div className="p-0 md:p-6 text-center">
            <p className="text-slate-700 mb-2 dark:text-white">
            {desc}
            </p>
            <h1 className="text-xl text-black dark:text-white">
                <Temperature temperature={maxWeather} /> &deg;
                <span className="ml-2 text-slate-500 dark:slate-300">
                  <Temperature temperature={minWeather} /> &deg;
                </span>
              </h1>
          </div>
        </div>
      </div>
    </>
  );
}
