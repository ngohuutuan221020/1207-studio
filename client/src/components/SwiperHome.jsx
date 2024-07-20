import React, { useState, useCallback, useMemo } from "react";
import { Buffer } from "buffer";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./SwiperHome.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import imageNull from "../assets/3.jpg";
import { Pagination, FreeMode } from "swiper/modules";
import { motion } from "framer-motion";

import { useMediaQuery } from "@mui/material";

import { getProjectId } from "service";
import { useSelector } from "react-redux";

const SwiperHome = React.memo(() => {
  // const [dataProject, setDataProject] = useState([]);
  const [dataImage, setDataImage] = useState([]);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [idShow, setIdShow] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [idHeight, setHeight] = useState("");
  const cache = useMemo(() => ({}), []);

  const handleImageLoad = useCallback(async (event, dataId) => {
    // Xử lý logic của bạn ở đây
  }, []);

  const handleShow = useCallback(
    async (data, event) => {
      if (cache[data]) {
        setDataImage(cache[data]);
        setIdShow(data);
        setHeight(event.target.clientHeight);
      } else {
        let dataImage = await getProjectId(data);
        cache[data] = dataImage.data.data;
        setDataImage(dataImage.data.data);
        setIdShow(data);
        setHeight(event.target.clientHeight);
      }
    },
    [cache]
  );

  // const handleGetAllProject = useCallback(async () => {
  //   try {
  //     const response = await getAllProject();
  //     if (response.status === 200) {
  //       setDataProject(response.data.data);
  //     }
  //   } catch (error) {
  //     console.error("UploadProject ~ error:", error);
  //   }
  // }, []);

  const dataProject = useSelector((state) => state.global.dataProject);

  // useEffect(() => {
  //   handleGetAllProject();
  // }, [handleGetAllProject]);

  return (
    <>
      {dataProject &&
        dataProject.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {idShow !== item.id && (
                <div
                  id={item.id}
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
                    onLoad={(event) => handleImageLoad(event, item.id)}
                    style={{
                      cursor: "pointer",
                      width: "30%",
                      height: "auto",
                    }}
                    src={
                      item?.thumbnail === null
                        ? imageNull
                        : new Buffer.from(item?.thumbnail, "base64").toString(
                            "binary"
                          )
                    }
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
                        height: idShow === item.id ? "300px" : 0,
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
                  lazy={{ loadPrevNext: true }}
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
                  {dataImage &&
                    dataImage.map((data, index) => {
                      let imageURL = new Buffer.from(
                        data?.image,
                        "base64"
                      ).toString("binary");
                      return (
                        <SwiperSlide key={index}>
                          <LazyLoadImage
                            className="image-slide"
                            src={imageURL}
                            alt=""
                          />
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
});

export default SwiperHome;
