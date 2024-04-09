import { scrollToTop } from '@/lib/helpers';
import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
  return (
    <footer>
      <div className='footer-area'>
        <div className='container'>
          <div className='footer-scroll-wrap'>
            <button
              className='scroll-to-target'
              data-target='html'
              onClick={scrollToTop}
            >
              <i className='fas fa-arrow-up'></i>
            </button>
          </div>
          <div className='footer-top'>
            <div className='row'>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div
                  className='footer-widget wow fadeInUp justify-content-center justify-content-md-start d-flex flex-column'
                  data-wow-delay='.2s'
                >
                  <div className='d-flex justify-content-center justify-content-md-start'>
                    <Link href='/' className='f-logo '>
                      <img src={'/img/logo/fm_logo.svg'} alt='FastMoney Logo' />
                    </Link>
                  </div>
                  <div className='footer-content '>
                    <p className=''>
                      Надежный сервис обмена валюты без лишних хлопот и скрытых
                      комиссий. Быстро, выгодно, безопасно
                    </p>
                    <ul className='footer-social justify-content-center justify-content-md-start'>
                      <li>
                        <a
                          href='https://t.me/+E8eKDKmN0U5lOTYy'
                          target='_blank'
                        >
                          <i className='fab fa-telegram-plane'></i>
                        </a>
                      </li>
                      <li>
                        <a href='https://wa.me/79520042864' target='_blank'>
                          <i className='fab fa-whatsapp'></i>
                        </a>
                      </li>
                      <li>
                        <a href='https://instagram.com/1mfast' target='_blank'>
                          <i className='fab fa-instagram'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-5 col-sm-6'>
                <div
                  className='footer-widget wow fadeInUp text-center'
                  data-wow-delay='.4s'
                >
                  <h4 className='fw-title'>Меню</h4>
                  <div className='footer-link'>
                    <ul>
                      <li>
                        <Link href='#header'>Калькулятор</Link>
                      </li>
                      <li>
                        <Link href='#about'>О Нас</Link>
                      </li>
                      <li>
                        <Link href='#roadmap'>Roadmap</Link>
                      </li>
                      <li>
                        <Link href='#faq'>FAQ</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-5 col-sm-6 text-center'>
                <div
                  className='footer-widget wow fadeInUp'
                  data-wow-delay='.4s'
                >
                  <h4 className='fw-title'>Адрес</h4>
                  <div className='footer-link text-white '>
                    <ul>
                      <li>
                        106, Cherngtalay, 14, Tambon Choeng Thale, Phuket, 83110
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-bottom'>
            <div className='row align-items-center'>
              <div className='col-lg-6'>
                <div className='copyright-text'>
                  <p>&copy; FastMoney </p>
                </div>
                <div className='footer-menu d-sm-none d-block'>
                  <ul>
                    <li>
                      <Link href='/privacy-policy' target='_blank'>
                        Политика конфиденциальности
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-6 d-none d-sm-block'>
                <div className='footer-menu'>
                  <ul>
                    <li>
                      <Link href='/privacy-policy' target='_blank'>
                        Политика конфиденциальности
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
