import React from "react";
import { Navigation, Pagination,  A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CustomCard from "../CustomCard";
import { useSelector } from "react-redux";
import Loader from "../Loader";




export default function TodayWeather() {
  const {weather} = useSelector(state => state.weather);

  if (!weather) {
    return (
      <div className="flex  flex-col w-full items-center justify-center h-screen">
        <Loader />
        <h1>Loading...</h1>
      </div>
    );
  }

  const {hourly} = weather

  console.log('====================================');
  console.log(hourly);
  console.log('====================================');

  return (
    <Swiper
        className="h-[18rem] mb-5"
        modules={[Navigation, Pagination,  A11y]}
        navigation
        // pagination={{ clickable: true }}
        spaceBetween={20}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            0: {
            slidesPerView: 2,
            },
            700: {
            slidesPerView: 3,
            },
            1200: {
            slidesPerView: 4,
            },
        }}
    >

      {hourly.map((hour, index) => {
        return (
          <SwiperSlide key={index}>
            <CustomCard
              time={hour.dt}
              temp={hour.temp}
              icon={hour.weather[0].icon}
              description={hour.weather[0].description}
              timezone={weather.timezone}
            />
          </SwiperSlide>
        );
      }
        
      )}
    </Swiper>
  );
}
