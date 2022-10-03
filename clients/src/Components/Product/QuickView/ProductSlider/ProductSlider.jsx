import React from "react";
import ContentZoom from "react-content-zoom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import pro1 from "../../../../asstes/product/1/qw/1.png";

const ProductSlider = () => {
  return (
    <div className="quickViewProductSlider">
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={2000}
          onAutoplay={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="w-full h-full transition-all ease-in-out">
              <ContentZoom
                zoomPercent={250}
                largeImageUrl={pro1}
                imageUrl={pro1}
                contentHeight={800}
                contentWidth={520}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default ProductSlider;
