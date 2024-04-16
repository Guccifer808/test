import React from 'react';
import Calculator from '../Calculator/Calculator';

const BannerTwo = () => {
  return (
    <section className='banner-area-two'>
      <div className='banner-bg-two'></div>
      <div className='container custom-container-two d-flex align-items-center justify-content-center'>
        <div className='row justify-content-center '>
          <div className='col-lg-12 d-sm-flex align-items-start '>
            <div className='banner-content text-center m-1'>
              <h2 className='title wow fadeInDown pt-4' data-wow-delay='.8s'>
                FastMoney Exchange <br />
              </h2>
              <h3
                className='banner-sub-title wow fadeInDown'
                data-wow-delay='.8s'
              >
                Простой и безопасный обмен <br />
                рублей на наличный бат
              </h3>
            </div>
            <div className='banner-calc-wrap wow fadeInUp' data-wow-delay='.8s'>
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
              <i className='fab fa-telegram-plane'></i>
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
