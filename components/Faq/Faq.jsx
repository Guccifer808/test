import React from 'react';
import FaqItem from './FaqItem';
import { faqSectionData } from '@/lib/constants/faqSectionData';

const Faq = () => {
  return (
    <section id='faq' className='faq-area '>
      <div className='container custom-container-four'>
        <div className='faq-shape-wrap'>
          <img
            src={'/img/images/faq_shape03.png'}
            alt=''
            className='img-three'
          />
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-title section-title-two text-center mb-30'>
              <h2 className='title'>FAQ</h2>
            </div>

            <div className='faq-wrap wow fadeInUp' data-wow-delay='.2s'>
              <div className='accordion' id='accordionExample'>
                {faqSectionData.map((x, index) => (
                  <FaqItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
