import Link from 'next/link';
import React from 'react';
import verified from '../../public/img/icon/verified_badge.svg';
import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className='about-area-two'>
      <div className='container custom-container-four'>
        <div className='row align-items-center'>
          <div className='col-lg-6 d-none d-md-block'>
            <div
              className='about-img-two text-center wow fadeInLeft'
              data-wow-delay='.5s'
            >
              <img
                src={'/img/images/mockup.png'}
                alt='FastMoney'
                loading='lazy'
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div
              className='about-content-two wow fadeInRight'
              data-wow-delay='.5s'
            >
              <div className='section-title mb-30 text-md-left '>
                <span className='sub-title'>
                  Репутация - то, чем мы дорожим
                </span>
                <h2 className='title'>
                  Репутация и <span> гарантии</span>
                </h2>
              </div>
              <div className='col-lg-6 d-md-none'>
                <div
                  className='about-img-two wow fadeInLeft'
                  data-wow-delay='.2s'
                >
                  <img
                    src={'/img/images/mockup.png'}
                    alt='FastMoney'
                    loading='lazy'
                  />
                </div>
              </div>
              <p className='text-left'>
                Мы имеем не только лицензию банка Таиланда, но и верификацию в
                telegram на нашем канале - синюю галочку справа от названия
              </p>
              <div className='about-list align-items-center d-flex justify-content-start w-100'>
                <ul>
                  <li>
                    <i className='fas fa-check'></i>
                    <span>
                      Наш официальный telegram-канал имеет синюю галочку! <br />
                      Так вы можете отличить наш канал от каналов копий{' '}
                      <Image
                        src={verified}
                        alt='verified badge'
                        width={18}
                        heigh={18}
                      />
                    </span>
                  </li>
                  <li>
                    <i className='fas fa-check'></i>Тысячи отзывов от клиентов
                  </li>
                  <li>
                    <i className='fas fa-check'></i>Актуальные данные по всем
                    услугам
                  </li>
                </ul>
              </div>
              <div className='text-center text-md-left'>
                <Link
                  href='https://t.me/fastmoneyphuket'
                  className='btn '
                  target='_blank'
                >
                  Telegram-канал <i className='fab fa-telegram-plane'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='about-shape-wrap'>
        <img
          src={'/img/images/about_shape01.png'}
          alt=''
          className='shape-one'
        />
      </div>
    </section>
  );
};

export default About;
