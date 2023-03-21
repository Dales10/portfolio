import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const imagesName = ['deinocheirus.jpg', 'wallpaper (1).jpg', 'wallpaper (2).jpg']

const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2000,
        }}
        className="mySwiper"
      >
        {
          imagesName.map((imageName, index) => {
            return (
              <SwiperSlide key={index} className='w-full'>
                <Image
                  src={`/${imageName}`}
                  width={500}
                  height={500}
                  alt=''
                />
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </>
  );
}

export default Slider;
