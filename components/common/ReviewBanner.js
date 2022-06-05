import React from 'react';
import { Autoplay, EffectFade, Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const params = {
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
};
const images = [
  '/images/REVIEW-1.png',
  '/images/REVIEW-2.png',
  '/images/REVIEW-3.png',
];

export default function ReviewBanner() {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <div className="about-section">
      <Swiper {...params}>
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div
              className="about-slide d-flex align-items-center justify-content-center col-flex font-color-white"
              style={{
                backgroundImage: `url("${image}")`
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
