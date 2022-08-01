import React from "react";

export default function CustomWeekCards({ img,hText,weather, desc }) {
  return (
    <>
      <div className="flex justify-center max-w-[10rem] md:max-w-[15rem] ml-2 mb-5 max-h-[15rem]">
        <div className="rounded-lg shadow-lg bg-white">
          <h5 className="text-gray-900 text-center md:text-xl font-medium mb-2">
            {hText}
          </h5>
          <img
            className="rounded-t-lg h-1/2 w-full drop-shadow-2xl"
            src={img}
            alt="weatherPng"
          />
          <div className="p-0 md:p-6 text-center">
            <p className="text-slate-700 mb-2">
            {desc}
            </p>
            <h1 className="text-xl">{weather}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
