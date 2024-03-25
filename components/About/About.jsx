import Link from 'next/link';
import React from 'react';
import verified from '../../public/img/icon/verified_badge.svg';
import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className='about-area-two'>
      <div className='container custom-container-four'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div
              className='about-img-two text-center wow fadeInLeft'
              data-wow-delay='.2s'
            >
              <img src={'/img/images/h2_about_img_3.png'} alt='' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div
              className='about-content-two wow fadeInRight'
              data-wow-delay='.2s'
            >
              <div className='section-title mb-30 '>
                <span className='sub-title '>Telegram-канал</span>
                <h2 className='title'>Репутация - то, чем мы дорожим</h2>
              </div>
              <p>
                Нас рекомендуют друзьям и знакомым, а также оставляют реальные
                отзывы в телеграм-канале сервиса
              </p>
              <div className='about-list'>
                <ul>
                  <li>
                    <i className='fas fa-check'></i>Единственный
                    верифицированный канал
                    <Image
                      src={verified}
                      alt='verified badge'
                      width={20}
                      heigh={20}
                      className='about-list-badge'
                    />
                  </li>
                  <li>
                    <i className='fas fa-check'></i>Тысячи позитивных отзывов
                  </li>
                </ul>
              </div>

              <Link
                href='https://t.me/fastmoneyphuket'
                className='btn '
                target='_blank'
              >
                Telegram-канал
              </Link>
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
