import React from 'react';
import Calculator from '../Calculator/Calculator';

const BannerTwo = () => {
  return (
    <section className='banner-area-two'>
      <div className='banner-bg-two'></div>
      <div className='container custom-container-four'>
        <div className='row justify-content-center'>
          <div className='col-lg-12'>
            <div className='banner-content text-center'>
              <h2 className='title wow fadeInDown' data-wow-delay='.2s'>
                Сервис по обмену валют в Таиланде
              </h2>
              {/* <img src={'/img/banner/banner_img.png'} alt='img' /> */}
            </div>
            <div className='banner-calc-wrap wow fadeInUp' data-wow-delay='.2s'>
              <Calculator />
            </div>
          </div>
        </div>
      </div>
      <div className='banner-social-wrap'>
        <ul>
          <li>
            <a
              href='https://t.me/+E8eKDKmN0U5lOTYy'
              className='banner-social-link'
              target='_blank'
            >
              <i className='fab fa-telegram'></i>
            </a>
          </li>

          <li>
            <a
              href='https://wa.me/79520042864'
              className='banner-social-link'
              target='_blank'
            >
              <i className='fab fa-whatsapp'></i>
            </a>
          </li>

          <li>
            <a
              href='https://instagram.com/1mfast'
              className='banner-social-link'
              target='_blank'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BannerTwo;
