import React from 'react'
import weatherPng from "../../assets/cloudy-and-rainy-4245603-3527451.png"


export default function CustomCard() {
  return (
    <div class="flex justify-center max-w-[15rem] max-h-[15rem]">
    <div class="rounded-lg shadow-lg bg-white">
      <a href="#!">
        <img
          class="rounded-t-lg h-1/2 w-full drop-shadow-2xl"
          src={weatherPng}
          alt="weatherPng"
        />
      </a>
      <div class="p-6 text-center">
        <h5 class="text-gray-900 text-xl font-medium mb-2">Monday, <span className="text-slate-700">9:00 PM</span></h5>
        <p class="text-slate-700 mb-2">
        Heavy Intensity Rain
        </p>
        <h1 className="text-2xl">60 &deg;</h1>
      </div>
    </div>
  </div>
  )
}
