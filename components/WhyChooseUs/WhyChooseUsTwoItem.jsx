import Link from 'next/link';
import React from 'react';

const WhyChooseUsTwoItem = (props) => {
  return (
    <div
      className='choose-item-two wow fadeInUp align-items-center justify-content-center d-flex flex-column'
      data-wow-delay='.2s'
    >
      <div className='choose-icon-two'>
        <img src={props.item.src} alt={props.item.title} />
      </div>
      <div className='choose-content align-items-center justify-content-center d-flex flex-column text-center'>
        <h2 className='title'>
          <Link href={props.item.url}>{props.item.title}</Link>
        </h2>
        <p className='text-center '>{props.item.desc}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsTwoItem;
