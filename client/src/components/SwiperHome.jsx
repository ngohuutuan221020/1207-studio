import React, { useState } from "react";
import "./SwiperHome.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";

import { useMediaQuery } from "@mui/material";

import FetchData from "./FetchData";

export default function SwiperHome() {
  const imagesData = FetchData();

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
        imagesData?.map((item) => {
          return (
            <React.Fragment key={item?.id}>
              {idShow !== item?.id && (
                <div
                  id={item?.id}
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
                    src={`https://www.1207studio.com/images/1207/${item?.id}/1.jpg`}
                    alt=""
                    onClick={(event) => handleShow(item?.id, event)}
                  />
                </div>
              )}
              <div
                className="swiper-container"
                style={
                  isMobile
                    ? {
                        width: "100%",
                        display: idShow === item?.id ? "block" : "none",
                        height:
                          idShow === item?.id
                            ? isMobile
                              ? "300px"
                              : idHeight
                            : 0,
                        marginLeft: idShow === item?.id ? 0 : "50%",
                      }
                    : {
                        width: idShow === item?.id ? "100%" : 0,
                        height: idShow === item?.id ? "750px" : 0,
                        marginLeft: idShow === item?.id ? 0 : "50%",
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
                  {Array.from({ length: item.images }).map((_, index) => {
                    let numImage = index + 1;
                    let imageURL = `https://www.1207studio.com/images/1207/${item?.id}/${numImage}.jpg`;
                    return (
                      <SwiperSlide key={index}>
                        <img className="image-slide" src={imageURL} alt="" />
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
