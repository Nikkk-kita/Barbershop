import React from 'react';

const Hero = () => {
   return (
      <section className='hero'>
         <div className="_container hero-container">
            <div className="bg">
               <div className="hero-top">
                  <h1 className="hero-top_title">Men’s Barbershop in The Middle East</h1>
                  <div className="hero-top_right">
                     <div className="rate-block">
                        <div className="rate">
                           THE HIGHEST RATED
                        </div>
                     </div>
                     <div className="description">
                        Text that is placed at the bottom<br /> of the heading to reveal details
                     </div>
                  </div>
               </div>
               <div className="hero-bottom">
                  <button className='hero-bottom_button _button'>
                     <span>Book now</span>
                  </button>
               </div>
            </div>
         </div>

      </section>
   );
};

export default Hero;