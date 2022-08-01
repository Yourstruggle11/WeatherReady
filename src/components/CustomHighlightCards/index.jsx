import React from "react";

export default function CustomHighlightCards({ img,hText,measure }) {
  return (
    <>
      <div className="flex justify-center max-w-[20rem] ml-2 mb-5 max-h-[15rem]">
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
            <h1 className="text-3xl">{measure}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
