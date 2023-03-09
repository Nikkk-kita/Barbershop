import React from 'react';
import { useSwiper } from 'swiper/react';
import rightArrow from '../assets/rightArrow.svg'

const SliderButtonNext = () => {
   const swiper = useSwiper()
   return (
      <button
         onClick={() => swiper.slideNext()}
         className='next-slide'
      >
         <img src={rightArrow} alt="right" />
      </button>
   );
};

export default SliderButtonNext;