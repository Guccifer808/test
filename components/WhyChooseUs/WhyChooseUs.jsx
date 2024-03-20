import React, { useEffect, useState } from 'react';
import SlickSlider from '../SlickSlider/SlickSlider';
import WhyChooseUsItem from './WhyChooseUsItem';

const WhyChooseUs = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
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
      // src: '/img/icon/choose_icon01.svg',
      src: '/img/payments/sber.png',
      alt: '',
      link: '/',
      title: 'Mobile payment make easy',
      description: '',
    },
    {
      // src: '/img/icon/choose_icon02.svg',
      src: '/img/payments/tinkoff.png',
      alt: '',
      link: '/',
      title: 'Lifetime free transaction',
      description: '',
    },
    {
      // src: '/img/icon/choose_icon03.svg',
      src: '/img/payments/alfa.png',
      alt: '',
      link: '/',
      title: <>Protect the identity</>,
      description: '',
    },
    {
      // src: '/img/icon/choose_icon04.svg',
      src: '/img/payments/raiffeisen.svg',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
    {
      // src: '/img/icon/choose_icon01.svg',
      src: '/img/payments/vtb.png',
      alt: '',
      link: '/',
      title: 'Lifetime free transaction',
      description: '',
    },
    {
      src: '/img/payments/sbp.png',
      alt: '',
      link: '/',
      title: <>Protect the identity</>,
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
    {
      src: '/img/payments/tether.png',
      alt: '',
      link: '/',
      title: '',
      description: '',
    },
  ];

  // const initalState = 0;
  // const [count, setCount] = useState(initalState);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((old) => (old == 9 ? 0 : old + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  // const toMultiply = 100 / slider_items.length;

  return (
    <section className='choose-area pb-50 pt-100'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-6'>
            <div className='section-title text-center mb-50'>
              <span className='sub-title'>Платёжные методы</span>
              <h2 className='title'>
                Удобные и <span>Безопасные</span> Опции Оплаты
              </h2>
            </div>
          </div>
        </div>

        <div className='row choose-active'>
          <SlickSlider settings={slickSettings}>
            {slider_items.map((item, index) => (
              <div key={index} className='col-lg-3'>
                <WhyChooseUsItem item={item} />
              </div>
            ))}
          </SlickSlider>
        </div>

        {/* <div className='slide-progressbar'>
          <div
            style={{
              // width: `${count * toMultiply}%`,
              backgroundSize: `${count * toMultiply}% 100%`,
            }}
            className='slide-filler'
          />
        </div> */}

        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
