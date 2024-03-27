import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import styles from './bannerTwo.module.css';
import Link from 'next/link';
import CurrencyProvider from '@/context/CurrencyContext';
import Calculator from '../Calculator/Calculator';

const BannerTwo = () => {
  const result = 100;

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
              <CurrencyProvider>
                <Calculator />
              </CurrencyProvider>
              {/* <div className={styles.body}>
                <div className={styles.container}>
                  <h2>Обменять рубли на баты</h2>
                  <form>
                    <div className={styles.amount}>
                      <p>Сума</p>
                      <input type='text' value='1' />
                    </div>
                    <div className={styles.convertBox}>
                      <div className={styles.from}>
                        <p>Выберите валюту</p>
                        <div className={styles.selectInput}>
                          <img src='/img/icon/ru.png' />

                          <select></select>
                        </div>
                      </div>
                      <div className={styles.reverse}>
                        <i className='fas fa-exchange-alt'></i>
                      </div>
                      <div className={styles.too}>
                        <div className={styles.selectInput}>
                          <img src='/img/icon/th.png' />
                          
                        </div>
                      </div>
                      <div className={styles.result}>
                        Вы получите: ฿{result}
                      </div>

                      <div className=' d-flex menu-style-two'>
                        <div className='d-flex  flex-md-row justify-content-center align-items-center gap-1 gap-sm-3'>
                          <div className='header-btn'>
                            <a className='btn'>Telegram</a>
                          </div>
                          <div className='header-btn '>
                            <a className='btn'>WhatsApp</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
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
      {/* <div className='banner-scroll'>
        <span>Scroll down</span>
        <Link
          href='#about'
          data-target='#about'
          onClick={() => handleClickScroll('about')}
        >
          <Image
            src={'/img/icon/scroll_icon.svg'}
            alt=''
            width={24}
            height={24}
          />
        </Link>
      </div> */}
    </section>
  );
};

export default BannerTwo;
