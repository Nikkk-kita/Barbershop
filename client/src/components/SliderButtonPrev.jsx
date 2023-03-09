import React from 'react';
import { useSwiper } from 'swiper/react';
import leftArrow from '../assets/leftArrow.svg'

const SliderButtonPrev = () => {
   const swiper = useSwiper()

   return (
      <button
         onClick={() => swiper.slidePrev()}
         className='prev-slide'
      >
         <img src={leftArrow} alt="left" />
      </button >
   );
};

export default SliderButtonPrev;