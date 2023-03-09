import React from 'react';
import Modal from 'react-bootstrap/Modal';

const TestimonialPopup = ({ testimonial, show, handleClose }) => {
   return (
      <Modal
         show={show}
         onHide={handleClose}
         className='my-modal'
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header className='my-modal-header' closeButton>
            <Modal.Title className='my-modal-title' id="contained-modal-title-vcenter">
               {testimonial.name}
            </Modal.Title>
         </Modal.Header>
         <Modal.Body className='my-modal-body'>
            <div className="my-modal-top">
               <div className="my-modal-top_img">
                  <img src={testimonial.photo} alt="#" />
               </div>
               <div className="my-modal-top_description">
                  <ul className='description-list'>
                     <li>
                        - Высказывания автора или достяжения
                     </li>
                     <li>
                        - Высказывания автора или достяжения
                     </li>
                     <li>
                        - Высказывания автора или достяжения
                     </li>
                  </ul>
               </div>
            </div>
            <div className="my-modal-bottom">
               <p className="my-modal-bottom_text">{testimonial.testimonial}</p>
            </div>
         </Modal.Body>
      </Modal>
   );
};

export default TestimonialPopup;