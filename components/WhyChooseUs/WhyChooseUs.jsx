import React from 'react';
import SlickSlider from '../SlickSlider/SlickSlider';
import WhyChooseUsItem from './WhyChooseUsItem';

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: '/img/payments/sber.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      src: '/img/payments/tinkoff.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      src: '/img/payments/alfa.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      src: '/img/payments/raiffeisen.svg',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      src: '/img/payments/vtb.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      src: '/img/payments/sbp.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      src: '/img/payments/mir.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      src: '/img/payments/visa.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      src: '/img/payments/mastercard.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
  ];

  return (
    <section className='choose-area'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-6'>
            <div className='section-title text-center mb-50'>
              <span className='sub-title'>Любые российские карты</span>
              <h2 className='title'>
                Платёжные<span> методы</span>
              </h2>
            </div>
          </div>
        </div>

        <div className='row choose-active wow fadeInUp' data-wow-delay='.5s'>
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className='col-lg-3'>
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
