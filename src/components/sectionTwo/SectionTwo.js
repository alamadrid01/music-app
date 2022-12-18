import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./sectionTwo.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper";
import { User } from "../../App";

function SectionTwo() {
  const { playlist, setCurrentSong } = useContext(User);
  return (
    <div>
      <div className="sectionTwo">
        <div className="newReleases">
          <h2>Popular Releases</h2>
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
            {playlist.map((files) => (
                <div key={files.audio} className="whole">
                  <div className="a" >
                    <SwiperSlide>
                      <Link to={`/songs/${files.id}`} onCLick={setCurrentSong(files)}>
                        <div className="swiperContainer">
                          <img src={files.cover} alt="pictures" />
                          <span>{files.artist}</span>
                        </div>
                      </Link>
                    </SwiperSlide>
                  </div>
                </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
