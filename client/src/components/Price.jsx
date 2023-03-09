import React from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'
import photo1 from '../assets/price1.jpg'
import photo2 from '../assets/price2.jpg'
import photo3 from '../assets/price3.jpg'
import photo4 from '../assets/price4.jpg'
const services = [
   {
      img: photo1,
      title: "Haircuts",
      prices: [
         {
            title: "Regular Haircut",
            time: "60",
            price: "20"
         },
         {
            title: "Haircut + Shave",
            time: "60",
            price: "19"
         },
         {
            title: "Haircut + Beard Trim",
            time: "60",
            price: "30"
         },
         {
            title: "Beard Trim",
            time: "60",
            price: "22"
         },
         {
            title: "Hair Tatoo",
            time: "60",
            price: "45"
         },
         {
            title: "Facial",
            time: "60",
            price: "15"
         },
      ]
   },
   {
      img: photo2,
      title: "Beard & Mo",
      prices: [
         {
            title: "Regular Haircut",
            time: "60",
            price: "20"
         },
         {
            title: "Haircut + Shave",
            time: "60",
            price: "19"
         },
         {
            title: "Haircut + Beard Trim",
            time: "60",
            price: "30"
         },
         {
            title: "Beard Trim",
            time: "60",
            price: "22"
         },
         {
            title: "Hair Tatoo",
            time: "60",
            price: "45"
         },
         {
            title: "Facial",
            time: "60",
            price: "15"
         },
      ]
   },
   {
      img: photo3,
      title: "Shaving",
      prices: [
         {
            title: "Regular Haircut",
            time: "60",
            price: "20"
         },
         {
            title: "Haircut + Shave",
            time: "60",
            price: "19"
         },
         {
            title: "Haircut + Beard Trim",
            time: "60",
            price: "30"
         },
         {
            title: "Beard Trim",
            time: "60",
            price: "22"
         },
         {
            title: "Hair Tatoo",
            time: "60",
            price: "45"
         },
         {
            title: "Facial",
            time: "60",
            price: "15"
         },
      ]
   },
   {
      img: photo4,
      title: "Waxing",
      prices: [
         {
            title: "Regular Haircut",
            time: "60",
            price: "20"
         },
         {
            title: "Haircut + Shave",
            time: "60",
            price: "19"
         },
         {
            title: "Haircut + Beard Trim",
            time: "60",
            price: "30"
         },
         {
            title: "Beard Trim",
            time: "60",
            price: "22"
         },
         {
            title: "Hair Tatoo",
            time: "60",
            price: "45"
         },
         {
            title: "Facial",
            time: "60",
            price: "15"
         },
      ]
   },
]

const Price = ({ isMobile }) => {
   return (
      <section className='price'>
         <div className="_container">
            <h2 className="_title">Our Price</h2>
            <h3 className="_sub-title">Subheading that reveals the details of the title and calls for the targeted action</h3>
            {isMobile ?
               <Swiper
                  className='price-items'
                  pagination={true}
                  modules={[Pagination, Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
               >
                  {services.map((service, idx) =>
                     <SwiperSlide key={idx * Math.random()} className='price-item'>
                        <div className="price-item_img">
                           <img src={service.img} alt="haircuts" />
                        </div>
                        <h3 className="price-item_title">{service.title}</h3>
                        <ul className='price-item_services price-item-services'>
                           {service.prices.map((service, idx) =>
                              <li key={idx}>
                                 <div className='price-item-services_title'>{service.title}</div>
                                 <div className="price-item-services_right">
                                    <div className="price-item-services_time">{service.time + " min"}</div>
                                    <div className="price-item-services_price">{"$" + service.price}</div>
                                 </div>
                              </li>
                           )}
                        </ul>
                     </SwiperSlide>
                  )}
               </Swiper>
               :
               <div className="price-items">
                  {services.map((service, idx) =>
                     <div key={idx} className="price-item">
                        <div className="price-item_img">
                           <img src={service.img} alt="haircuts" />
                        </div>
                        <h3 className="price-item_title">{service.title}</h3>
                        <ul className='price-item_services price-item-services'>
                           {service.prices.map((service, idx) =>
                              <li key={idx}>
                                 <div className='price-item-services_title'>{service.title}</div>
                                 <div className="price-item-services_right">
                                    <div className="price-item-services_time">{service.time + " min"}</div>
                                    <div className="price-item-services_price">{"$" + service.price}</div>
                                 </div>
                              </li>
                           )}
                        </ul>
                     </div>
                  )}
               </div>
            }

         </div>
      </section>
   );
};

export default Price;