import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Cat1 from "../../../asstes/category/1.png";
import Cat2 from "../../../asstes/category/2.png";
import Cat3 from "../../../asstes/category/3.png";

const Category = () => {
  return (
    <section className="dark:bg-gray-900 w-full border-b-2 border-b-gray-100 dark:border-b-gray-800">
      <div className="categroy container mx-auto py-6">
        <h1 className="text-3xl text-gray-900 dark:text-white text-center pb-12 pt-4 font-bold">
          I'm looking for..
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
        >
          <SwiperSlide
            style={{ width: "420px" }}
            className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl dark:text-white"
          >
            <div className="singlebox flex flex-col justify-center items-center">
              <img src={Cat1} alt="" srcset="" />
              <h1 className="uppercase font-semibold text-base">Shirt</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "420px" }}
            className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl dark:text-white"
          >
            <div className="singlebox flex flex-col justify-center items-center">
              <img src={Cat2} alt="" srcset="" />
              <h1 className="uppercase font-semibold text-base">Pants</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{ width: "420px" }}
            className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl dark:text-white"
          >
            <div className="singlebox flex flex-col justify-center items-center">
              <img src={Cat3} alt="" srcset="" />
              <h1 className="uppercase font-semibold text-base">Shirt</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
