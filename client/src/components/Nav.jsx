import React from 'react';
import { Link } from 'react-router-dom';
import locationIcon from '../assets/location-icon.svg'
import phoneIcon from '../assets/phone-icon.svg'

const navList = [
   {
      anchor: '#about',
      text: 'About Us'
   },
   {
      anchor: '/team',
      text: 'Our masters'
   },
   {
      anchor: '/team',
      text: 'Portfolio'
   },
   {
      anchor: '/#testimonials',
      text: 'Testimonials'
   },
   {
      anchor: '/#contacts',
      text: 'Contacts'
   },
]

const Nav = () => {
   return (
      <nav className="header-navigation">
         <ul className="navigation-list">
            {navList.map((link, idx) =>
               <li key={idx}>
                  <a className='navigation-link' href={link.anchor}>{link.text}</a>
               </li>
            )}
         </ul>
         <div className="header-navigation_right">
            <div className="header-location">
               <div className="location-left">
                  <span>302 W 50th St, <br /> NY, NY 10019</span>
               </div>
               <a href="#">
                  <img src={locationIcon} alt="location" />
               </a>
            </div>
            <div className="header-phone">
               <div className='phone-left'>
                  <div className="number">8 (800) 000-00-00</div>
                  <div className="opening-hours">Daily from 9 to 20</div>
               </div>
               <a href="#">
                  <img src={phoneIcon} alt="phone" />
               </a>
            </div>
         </div>
      </nav>
   );
};

export default Nav;