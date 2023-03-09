import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import photo1 from '../assets/testimonials1.jpg'
import photo2 from '../assets/testimonials2.jpg'
import photo3 from '../assets/testimonials3.jpg'
import photo4 from '../assets/testimonials4.jpg'
import SliderButtonPrev from './SliderButtonPrev';
import SliderButtonNext from './SliderButtonNext';
import TestimonialPopup from './modals/TestimonialPopup';

const testimonials = [
   {
      photo: photo1,
      name: "Darrell Steward",
      testimonial: "Describe the feedback or end result the person received after interacting with you. What exactly did it give him. You can describe the result in numbers to be specific.",
   },
   {
      photo: photo2,
      name: "Marvin McKinney",
      testimonial: "Describe the feedback or end result the person received after interacting with you. What exactly did it give him. You can describe the result in numbers to be specific.",
   },
   {
      photo: photo3,
      name: "Ronald Richards",
      testimonial: "Describe the feedback or end result the person received after interacting with you. What exactly did it give him. You can describe the result in numbers to be specific.",
   },
   {
      photo: photo4,
      name: "Cody Fisher",
      testimonial: "Describe the feedback or end result the person received after interacting with you. What exactly did it give him. You can describe the result in numbers to be specific.",
   },
]

const Testimonials = ({ isTablet, isMobile }) => {
   const [arrowIsShow, setArrowIsShow] = useState(testimonials.map(e => e = false))
   const handleClick = (idx) => {
      setArrowIsShow([...arrowIsShow.slice(0, idx), !arrowIsShow[idx], ...arrowIsShow.slice(idx + 1)])
   }
   return (
      <section className='testimonials'>
         <div className="_container">
            <h2 className="_title">Testimonials</h2>
            <h3 className="_sub-title">Подзаголовок, который раскрывает подробности заголовка и призывает сделать целевое действие</h3>
            <Swiper className="slider"
               modules={[Navigation, Pagination, Autoplay]}
               pagination={true}
               autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
               }}
               spaceBetween={20}
               slidesPerView={
                  isMobile ? 1 : (isTablet ? 3 : 4)
               }
               loop={true}
            >
               {testimonials.map((testimonial, idx) =>
                  <SwiperSlide key={idx} className="slider-item">
                     <div className="slider-item_img">
                        <img src={testimonial.photo} alt="" />
                     </div>
                     <h4 className="slider-item_title">{testimonial.name}</h4>
                     <div className="slider-item_description">
                        {testimonial.testimonial}
                     </div>
                     <button
                        className="slider-item_button"
                        onClick={() => handleClick(idx)}
                     >
                        Read full testimonial
                     </button>
                     <TestimonialPopup testimonial={testimonial} show={arrowIsShow[idx]} handleClose={() => handleClick(idx)} />
                  </SwiperSlide>
               )}
               {!isTablet ? <>
                  <SliderButtonPrev />
                  <SliderButtonNext />
               </>
                  : ""
               }
            </Swiper>
         </div>
      </section>
   );
};

export default Testimonials;