import React from 'react';
import { useMediaQuery } from 'react-responsive'
import About from '../components/About';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Price from '../components/Price';
import Testimonials from '../components/Testimonials';
import MyForm from '../components/MyForm'

const Main = () => {
   const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
   const isMobile = useMediaQuery({ query: '(max-width: 576px)' })
   return (
      <div >
         <Hero />
         <Features />
         <About />
         <Testimonials isTablet={isTablet} isMobile={isMobile} />
         <Price isMobile={isMobile} />
         <MyForm />
      </div>
   );
};

export default Main;