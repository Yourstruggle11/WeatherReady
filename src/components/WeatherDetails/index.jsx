import React from 'react'
import { useDispatch } from 'react-redux';
import Footer from '../Footer';
import ThisWeekWeather from '../ThisWeekWeather';
import TodayHighlightSection from '../TodayHighlightSection';
import TodayWeather from "../TodayWeather";

export default function WeatherDetails() {
  const [unit,setUnit] = React.useState(true);
  const dispatch = useDispatch();
  return (
    <>
        <div className='md:w-3/4 md:p-20 p-6 order-last md:order-first w-full h-full bg-[#f6f6f8] no-scrollbar'> 
          <div className='flex items-center justify-between w-full mb-5'>
              <p className='text-3xl '>Today</p>
              <div className='flex'>
                <span
                  onClick={() => {
                    dispatch({ type: "UNIT", payload: "C" });
                    setUnit(!unit); 
                  }}
                className={unit ? 'w-10 h-10  block font-bold cursor-pointer rounded-full bg-black text-white mr-5 flex items-center justify-center' : 'w-10 h-10  block font-bold cursor-pointer rounded-full bg-white text-black mr-5 flex items-center justify-center'} >&deg; C</span>
                <span
                  onClick={() => {
                    dispatch({ type: "UNIT", payload: "F" });
                    setUnit(!unit); 
                  }}
                  className={!unit ? 'w-10 h-10  block font-bold cursor-pointer rounded-full bg-black text-white mr-5 flex items-center justify-center' : 'w-10 h-10  block font-bold cursor-pointer rounded-full bg-white text-black mr-5 flex items-center justify-center'}>&deg;F</span>
              </div>
          </div>


          <TodayWeather  />

          {/* TODAY HIGHLIGHT SECTION START HERE */}
          <div className='flex items-center justify-between w-full mb-5'>
              <p className='text-3xl '>Today's Highlights</p>
          </div>

          <TodayHighlightSection />

          {/* TODAY HIGHLIGHT SECTION END HERE */}



          <div className='flex items-center justify-between w-full mb-5'>
              <p className='text-3xl '>This Week</p>
          </div>

          <ThisWeekWeather />

          <Footer />
        </div>
    </>

  )
}
