import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';

import NavigationButtons from '../NavigationButtons';

type Props = {
  files: Array<{
    type: string;
    url: string;
  }>;
};

const Slider = ({ files }: Props) => {
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
      effect='fade'
      className="border-r border-zinc-900 cursor-grab"
    >
      {
        files.map((file, index) => {
          return (
            <SwiperSlide key={index}>
              {
                file.type === 'img' && (
                  <img
                    src={file.url}
                    alt=''
                  />
                )
              }

              {
                file.type === 'video' && (
                  <video
                    src={file.url}
                    controls
                    autoPlay
                    className='pb-4 bg-background'
                  />
                )
              }
            </SwiperSlide>
          );
        })
      }

      <NavigationButtons />
    </Swiper>
  );
}

export default Slider;