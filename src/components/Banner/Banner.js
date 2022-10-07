import React from "react";
import "./Banner.css"
// Banner Images
import img1 from "../../banner/slider-1.png";
import img2 from "../../banner/slider-2.png";
import img3 from "../../banner/slider-3.gif";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



const data = [
  {
    image: img1,
    title: "Upto 10% off on Book product",
  },
  {
    image: img2,
    title: "Upto 10% off on Book product",
  },
  {
    image: img3,
    title: "Upto 20% off on our course",
  },
];

const Banner = () => {
  return (
    <div className="hero_Banner  ">
      <Swiper
        navigation={false}
        loop={true}
        autoplay={true}
        pagination={{ clickable: true }}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper my-auto"
        style={{ "--swiper-theme-color": "#27AE61" }}
      >
        {data.map((bnrData) => (
          <SwiperSlide >
          <div className="banner_single" 
            style={{
            backgroundImage: `url(${bnrData.image})`,
            backgroundSize: "content",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat", }}>
              <div className="container mx-auto">
                <div>
                  <div className="banner__text">
                    <h3
                      data-aos="fade-left"
                      data-aos-delay="150"
                      data-aos-duration="700"
                    >
                      {bnrData.title}  
                    </h3>
                    <h5
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                    >
                      This is perfect to place to gain your knowledge and skill!
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

           
          
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;