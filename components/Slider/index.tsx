import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

const imagesName = ['deinocheirus.jpg', 'wallpaper (1).jpg', 'wallpaper (2).jpg'];

const Slider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="border-r border-zinc-900 cursor-grab"
    >
      {
        imagesName.map((imageName, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={`/${imageName}`}
                className='w-full h-auto'
                alt=''
              />
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
}

export default Slider;