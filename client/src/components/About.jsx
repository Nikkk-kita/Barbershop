import React from 'react';
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
const photos = [photo1, photo2, photo3, photo4, photo5, photo6]

const About = () => {
   return (
      <section className='about' id='about'>
         <div className="_container">
            <h2 className="_title">About Us</h2>
            <h3 className="_sub-title">
               Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            </h3>
            <div className="about-photos">
               {photos.map((photo, idx) =>
                  <div key={idx} className={`about-photos_photo ${'photo' + (idx + 1)}`}>
                     <img src={photo} alt="" />
                  </div>

               )}
            </div>
            <div className="about-buttons">
               <div className="about-buttons_button">
                  <button className="about-buttons_masters _button"><span>Our masters and their masterpieces</span></button>
               </div>
               <div className="about-buttons_button">
                  <button className="about-buttons_instagram">Our Instagram</button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;