import React, { useState } from "react";
import "./SwiperHome.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { Pagination, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";
import imagesData from "images/data";

export default function SwiperHome() {
  const [idShow, setIdShow] = useState("");
  const handleShow = (data) => {
    setIdShow(data);
  };
  return (
    <>
      {imagesData &&
        imagesData.map((item, index) => {
          return (
            <>
              {idShow !== item.id && (
                <div
                  className="image-preview"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <motion.img
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    style={{
                      cursor: "pointer",
                      width: "30%",
                      height: "auto",
                    }}
                    src={item.image[0]}
                    alt=""
                    onClick={() => handleShow(item.id)}
                  />
                </div>
              )}
              <div
                className="swiper-container"
                style={{
                  width: idShow === item.id ? "100%" : 0,
                  height: idShow === item.id ? "750px" : 0,
                }}
              >
                <Swiper
                  key={index}
                  spaceBetween={10}
                  centeredSlides={false}
                  slidesPerView={"auto"}
                  grabCursor={true}
                  freeMode={true}
                  lazy={"true"}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, FreeMode]}
                  style={{
                    marginBottom: "1rem",
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                >
                  {item?.image.map((image, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img className="image-slide" src={image} alt="" />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </>
          );
        })}
    </>
  );
}
