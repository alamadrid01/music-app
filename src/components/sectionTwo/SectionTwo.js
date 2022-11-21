import React from "react";
import "./sectionTwo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eight,
  nineth,
  tenth,
} from "./assets";

function SectionTwo() {
  const data = [
    {
      title: "New Releases",
      one: {
        picture: first,
        name: "Life in bubble",
      },
      two: {
        picture: second,
        name: "Legends",
      },
      three: {
        picture: third,
        name: "Limits",
      },
      four: {
        picture: fourth,
        name: "Come and go",
      },
      five: {
        picture: fifth,
        name: "Hearth break",
      },
      six: {
        picture: sixth,
        name: "Love and Hate you",
      },
      seven: {
        picture: seventh,
        name: "Hearth break",
      },
      eight: {
        picture: eight,
        name: "Smoke with me",
      },
      nine: {
        picture: nineth,
        name: "Lean with me",
      },
      ten: {
        picture: tenth,
        name: "Drugs coming",
      },
      
    },
    {
      title: "Popular Releases",
      one: {
        picture: first,
        name: "Time flies",
      },
      two: {
        picture: second,
        name: "Life in bubble",
      },
      three: {
        picture: first,
        name: "Time flies",
      },
      four: {
        picture: second,
        name: "Life in bubble",
      },
      five: {
        picture: first,
        name: "Time flies",
      },
      six: {
        picture: second,
        name: "Life in bubble",
      },
      seven: {
        picture: first,
        name: "Time flies",
      },
      eight: {
        picture: second,
        name: "Life in bubble",
      },
      nine: {
        picture: first,
        name: "Time flies",
      },
      ten: {
        picture: second,
        name: "Life in bubble",
      },
    
    },
  ];
  return (
    <div>
      <div className="sectionTwo">
        <div className="newReleases">
          {data.map((files) => (
            <>
            <h2>{files.title}</h2>
            <Swiper
              className="mySwiper"
              slidesPerView={6}
              spaceBetween={10}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
            >
              <div className="whole" key={files.title}>
                <div className="a">
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.one.picture} alt="pictures" />
                      <span>{files.one.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.two.picture} alt="pictures" />
                      <span>{files.two.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.three.picture} alt="pictures" />
                      <span>{files.three.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.four.picture} alt="pictures" />
                      <span>{files.four.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.five.picture} alt="pictures" />
                      <span>{files.five.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.six.picture} alt="pictures" />
                      <span>{files.six.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.seven.picture} alt="pictures" />
                      <span>{files.seven.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.eight.picture} alt="pictures" />
                      <span>{files.eight.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.nine.picture} alt="pictures" />
                      <span>{files.nine.name}</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiperContainer">
                      <img src={files.ten.picture} alt="pictures" />
                      <span>{files.ten.name}</span>
                    </div>
                  </SwiperSlide>
                </div>
              </div>
            </Swiper>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
