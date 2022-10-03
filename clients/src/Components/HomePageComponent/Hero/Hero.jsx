import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Slide1 from "../../../asstes/bannerImage/slideshow-1.png";
import Slide2 from "../../../asstes/bannerImage/slideshow-2.png";

const Hero = () => {
  return (
    <div>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            height: "80vh",
            width: "100%",
            backgroundImage: `url(${Slide1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="leftSide flex items-start container mx-auto flex-col">
            <h1 className="text-5xl font-bold">Lorem ipsum dolor.</h1>
            <p className="text-base text-gray-600 py-4">
              Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit.
              Temporibus, animi.<br></br> Lorem ipsum dolor sit amet.
            </p>
            <button
              type="button"
              className="uppercase text-lg font-semibold bg-orange-600 border-none px-4 py-2 rounded text-white hover:bg-orange-200 hover:text-gray-900 shadow-md transition-all duration-300"
            >
              Shop now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "80vh",
            width: "100%",
            backgroundImage: `url(${Slide2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="leftSide flex items-end container mx-auto flex-col">
            <div className="align text-right">
              <h1 className="text-5xl font-bold">Lorem ipsum dolor.</h1>
              <p className="text-base text-gray-600 py-4">
                Lorem ipsum dolor sit amet consectetur<br></br> adipisicing
                elit. Temporibus, animi.<br></br> Lorem ipsum dolor sit amet.
              </p>
              <button
                type="button"
                className="uppercase text-lg font-semibold bg-orange-600 border-none px-4 py-2 rounded text-white hover:bg-orange-200 hover:text-gray-900 shadow-md transition-all duration-300"
              >
                Shop now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
