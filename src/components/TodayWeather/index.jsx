import React from "react";
import { Navigation, Pagination,  A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CustomCard from "../CustomCard";




export default function TodayWeather() {
  return (
    <Swiper
        className="h-[18rem]"
        modules={[Navigation, Pagination,  A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
      <SwiperSlide>
        <CustomCard />
      </SwiperSlide>
      <SwiperSlide>
        <CustomCard />
      </SwiperSlide>
      <SwiperSlide>
        <CustomCard />
      </SwiperSlide>
      <SwiperSlide>
        <CustomCard />
      </SwiperSlide>
      <SwiperSlide>
        <CustomCard />
      </SwiperSlide>

    </Swiper>
  );
}
