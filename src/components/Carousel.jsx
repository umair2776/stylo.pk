import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation } from 'swiper/modules';

 const Carousel=()=> {
  return (
    <div className='swiper'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/files/1920x600_1_6e06b3be-7ae7-4ad8-8727-c5e537d55842.jpg?v=1719407055'/></SwiperSlide>
        <SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920x600_3_ceaef281-6e5e-4f05-972a-75854755e698.jpg?v=1708763008"/></SwiperSlide>
        <SwiperSlide><img src='https://stylo.pk/cdn/shop/files/1920x600_4_0cf79098-36b7-4822-b2f4-ebb96307a119.jpg?v=1708864452'/></SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Carousel;
