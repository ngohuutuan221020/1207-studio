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

import { useMediaQuery } from "@mui/material";

export default function SwiperHome() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [idShow, setIdShow] = useState("");
  const [idHeight, setHeight] = useState("");
  const handleShow = (data, event) => {
    setIdShow(data);
    setHeight(event.target.clientHeight);
  };
  return (
    <>
      {imagesData &&
        imagesData.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {idShow !== item.id && (
                <div
                  className="image-preview"
                  style={{
                    paddingBottom: isMobile ? "0.5rem" : null,
                    textAlign: "center",
                  }}
                >
                  <motion.img
                    initial={{ scale: 0.7 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      cursor: "pointer",
                      width: "30%",
                      height: "auto",
                    }}
                    src={item.image[0]}
                    alt=""
                    onClick={(event) => handleShow(item.id, event)}
                  />
                </div>
              )}
              <div
                className="swiper-container"
                style={
                  isMobile
                    ? {
                        width: "100%",
                        display: idShow === item.id ? "block" : "none",
                        height:
                          idShow === item.id
                            ? isMobile
                              ? "300px"
                              : idHeight
                            : 0,
                        marginLeft: idShow === item.id ? 0 : "50%",
                      }
                    : {
                        width: idShow === item.id ? "100%" : 0,
                        height: idShow === item.id ? "750px" : 0,
                        marginLeft: idShow === item.id ? 0 : "50%",
                      }
                }
              >
                <Swiper
                  spaceBetween={10}
                  centeredSlides={false}
                  slidesPerView={"auto"}
                  grabCursor={true}
                  freeMode={true}
                  lazy={"true"}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[isMobile ? FreeMode : Pagination, FreeMode]}
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
            </React.Fragment>
          );
        })}
    </>
  );
}
