import React, { useState } from 'react';
import FaqItem from './FaqItem';
import { faqSectionData } from '@/lib/constants/faqSectionData';

const Faq = () => {
  const [showAll, setShowAll] = useState(false);
  const initialFaqCount = 3;

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <section id='faq' className='faq-area'>
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

            <div className='faq-wrap wow fadeInUp ' data-wow-delay='.5s'>
              <div className='accordion' id='accordionFaq'>
                {faqSectionData
                  .slice(0, showAll ? faqSectionData.length : initialFaqCount)
                  .map((x, index) => (
                    <FaqItem key={index} item={x} />
                  ))}
                {faqSectionData.length > initialFaqCount && (
                  <button
                    className='btn mx-auto d-flex mt-5'
                    onClick={handleShowMore}
                  >
                    {showAll ? (
                      <div className='d-flex align-items-center gap-2'>
                        Свернуть
                        <i class='fas fa-angle-up '></i>
                      </div>
                    ) : (
                      <div className='d-flex align-items-center gap-2'>
                        Показать все
                        <i class='fas fa-angle-down '></i>
                      </div>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
