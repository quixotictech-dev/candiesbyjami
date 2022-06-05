import React from 'react';
import { Autoplay, EffectFade, Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

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
    crossfade: true
  }
};
const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.jpg',
];

export default function HeroSection() {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
    <div className="hero-section position-relative">
      <Swiper {...params}>
        {images.map((image, index) => (
          <SwiperSlide key={image}>
            <div
              className="hero-slide d-flex justify-content-end align-items-center flex-column font-color-white pt-xxl-5rem"
              style={{
                backgroundImage: `url("${image}")`
              }}
            >
              <div className="row-1 d-inline align-items-center">CARAMEL PERFECTED</div>
              <div className="row-2 d-inline align-items-center">
                  <Link href="/collection">
                    <a className="hero-btn bg-transparent border border-color-white h-56 px-5 font-color-white">
                      Shop Now
                    </a>
                  </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
