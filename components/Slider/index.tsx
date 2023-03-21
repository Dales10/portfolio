import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css/bundle';
import { MdArrowBackIos } from 'react-icons/md';
import 'swiper/css/effect-fade';
import NavigationButtons from '../NavigationButtons';

const imagesName = ['deinocheirus.jpg', 'wallpaper (1).jpg', 'wallpaper (2).jpg'];

const Slider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      navigation={{
        prevEl: '.prev',
        nextEl: '.next',
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect='fade'
      className="relative border-r border-zinc-900 cursor-grab"
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

      <NavigationButtons />
    </Swiper>
  );
}

export default Slider;