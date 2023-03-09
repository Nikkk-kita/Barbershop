import React from 'react';
import InputMask from 'react-input-mask'

const MyForm = () => {
   return (
      <section className='form'>
         <div className="_container form-container">
            <div className="form-block">
               <h3 className=" form-title">
                  Get in consultation with our expert barbers
               </h3>
               <h5 className="form-sub-title">Expand Call-to-Action Details</h5>
               <div className="form-group">
                  <div className="form-inputs">
                     <InputMask
                        type="phone"
                        mask='+1 (999) 999-99-99'
                        placeholder='+1 (___) ___-__-__'
                     />
                     <input type="email" placeholder='Email' />
                  </div>
                  <div className="form-button">
                     <button className='_button submit-button'><span>Book now</span></button>
                  </div>
               </div>
               <div className="checkbox-block">
                  <input type="checkbox" />
                  <label className="checkbox-block_text">
                     By clicking on the button, you agree to the <a href='#'>terms of processing personal data</a>
                  </label>
               </div>
            </div>
         </div>

      </section>
   );
};

export default MyForm;