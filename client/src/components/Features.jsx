import React from 'react';
import features1 from '../assets/features1.svg'
import features2 from '../assets/features2.svg'
import features3 from '../assets/features3.svg'

const featuresItems = [
   {
      icon: features1,
      title: 'Briefly describe the benefit',
      description: 'Long text, in two lines, for clarity and detail'
   },
   {
      icon: features2,
      title: 'Briefly describe the benefit',
      description: 'Long text, in two lines, for clarity and detail'
   },
   {
      icon: features3,
      title: 'Briefly describe the benefit',
      description: 'Long text, in two lines, for clarity and detail'
   },
]

const Features = () => {
   return (
      <section className='features'>
         <div className="_container">
            <div className="features-items">
               {featuresItems.map((item, idx) =>
                  <div key={idx} className="features-item">
                     <div className="features-item_icon">
                        <img src={item.icon} alt="#" />
                     </div>
                     <div className="features-item_text">
                        <div className="features-item_title">{item.title}</div>
                        <div className="features-item_description">{item.description}</div>
                     </div>
                  </div>
               )}

            </div>
         </div>
      </section>
   );
};

export default Features;