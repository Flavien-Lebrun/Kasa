import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Carousel = ({ pictures }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        bulletClass: 'custom-bullet',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '/' + pictures.length + '</span>';
        },
      }}
    >
      {pictures.map((picture, index) => (
        <SwiperSlide key={index}>
          <img src={picture} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
