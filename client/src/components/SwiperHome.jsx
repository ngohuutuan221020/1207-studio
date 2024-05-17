import React, { useEffect, useState } from "react";
import "./SwiperHome.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";

import { useMediaQuery } from "@mui/material";

//   { id: 77, images: 5 },
//   { id: 76, images: 5 },
//   { id: 75, images: 5 },
//   { id: 74, images: 3 },
//   { id: 73, images: 3 },
//   { id: 72, images: 4 },
//   { id: 71, images: 2 },
//   { id: 70, images: 3 },
//   { id: 69, images: 7 },
//   { id: 68, images: 8 },
//   { id: 67, images: 8 },
//   { id: 66, images: 8 },
//   { id: 65, images: 7 },
//   { id: 64, images: 7 },
//   { id: 63, images: 7 },
//   { id: 62, images: 28 },
//   { id: 61, images: 26 },
//   { id: 60, images: 12 },
//   { id: 59, images: 6 },
//   { id: 58, images: 6 },
//   { id: 57, images: 16 },
//   { id: 56, images: 16 },
//   { id: 55, images: 20 },
//   { id: 54, images: 5 },
//   { id: 53, images: 9 },
//   { id: 52, images: 5 },
//   { id: 51, images: 16 },
//   { id: 50, images: 11 },
//   { id: 49, images: 12 },
//   { id: 48, images: 7 },
//   { id: 47, images: 7 },
//   { id: 46, images: 5 },
//   { id: 45, images: 5 },
//   { id: 44, images: 5 },
//   { id: 43, images: 4 },
//   { id: 42, images: 7 },
//   { id: 41, images: 18 },
//   { id: 40, images: 11 },
//   { id: 39, images: 2 },
//   { id: 38, images: 2 },
//   { id: 37, images: 8 },
//   { id: 36, images: 8 },
//   { id: 35, images: 3 },
//   { id: 34, images: 10 },
//   { id: 33, images: 12 },
//   { id: 32, images: 10 },
//   { id: 31, images: 8 },
//   { id: 30, images: 6 },
//   { id: 29, images: 3 },
//   { id: 28, images: 7 },
//   { id: 27, images: 13 },
//   // { id: 26, images: 10 },
//   // { id: 25, images: 10 },
//   // { id: 24, images: 10 },
//   // { id: 23, images: 10 },
//   // { id: 22, images: 10 },
//   // { id: 21, images: 10 },
//   // { id: 20, images: 10 },
//   // { id: 19, images: 10 },
//   // { id: 18, images: 10 },
//   // { id: 17, images: 10 },
//   // { id: 16, images: 10 },
//   // { id: 15, images: 10 },
//   // { id: 14, images: 10 },
//   // { id: 13, images: 10 },
//   // { id: 12, images: 10 },
//   // { id: 11, images: 10 },
//   // { id: 10, images: 10 },
//   // { id: 9, images: 10 },
//   // { id: 8, images: 10 },
//   // { id: 7, images: 10 },
//   // { id: 6, images: 10 },
//   // { id: 5, images: 10 },
//   // { id: 4, images: 10 },
//   // { id: 3, images: 10 },
//   // { id: 2, images: 10 },
//   // { id: 1, images: 10 },
//   // { id: 0, images: 10 },
// ];

export default function SwiperHome() {
  const url = "https://ngohuutuan221020.github.io/API-1207/listImage.json";
  const [imagesData, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

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
