import React from "react";

export default function CustomHighlightCards({ img,hText,measure,isSunsetDetailsAvailable,sunrise,sunset }) {
    return (
      <>
        {isSunsetDetailsAvailable ? (
          <>
            <div className="flex flex-col justify-center w-[10rem] md:w-[20rem] ml-2 mb-5 h-[15rem]">
              <div className="rounded-3xl	h-full w-full shadow-lg bg-white dark:bg-slate-900 dark:text-white">
                <div className="w-full h-1/2 flex items-center justify-center">
                  <img src="/weatherIcons/sunrise.png" className="mr-5" width={50} alt="" />
                  <div>
                    {sunrise}<br/>
                    <span>Sunrise</span>
                  </div>
                </div>
                <div className="w-full h-1/2 flex items-center justify-center">
                  <img src="/weatherIcons/sunset.png" className="mr-5" width={50} alt="" />
                  <div>
                    {sunset}<br/>
                    <span>Sunrise</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center w-[10rem] md:w-[20rem] ml-2 mb-5 h-[15rem] ">
              <div className="rounded-3xl	 shadow-lg bg-white dark:bg-slate-900 dark:text-white">
                <h5 className="text-gray-900 text-center md:text-xl font-medium mb-2 dark:text-gray-300">
                  {hText}
                </h5>
                <img
                  className="rounded-t-lg h-1/2 w-screen drop-shadow-2xl"
                  src={img}
                  alt="weatherPng"
                />
                <div className="p-0 md:p-6 text-center">
                  <h1 className="text-3xl">{measure}</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
}
