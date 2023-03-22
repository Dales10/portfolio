import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import NavigationButtons from '../NavigationButtons';

type Props = {
  imagesUrl: string[];
};

const Slider = ({ imagesUrl }: Props) => {
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
        imagesUrl.map((imageUrl, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={imageUrl}
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