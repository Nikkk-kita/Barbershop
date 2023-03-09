import React from 'react';
import logo from '../assets/logo.svg'
import Nav from './Nav';
import { Link } from 'react-router-dom';


const Header = () => {

   const toogleBurger = () => {
      const burger = document.querySelector('.header-burger')
      const nav = document.querySelector('.header-navigation')
      burger.classList.toggle('active')
      nav.classList.toggle('active')
   }
   return (
      <header className='header'>
         <div className="_container header-container">
            <Link to='/'>
               <div className="header-logo">
                  <img src={logo} alt="logo" />
                  <span>Cool Barber</span>
               </div>
            </Link>
            <Nav />
            <div onClick={() => toogleBurger()} className="header-burger">
               <span></span>
            </div>
         </div>
      </header>
   );
};

export default Header;