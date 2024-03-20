import React from 'react';

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
              <div className='section-title section-title-two mb-15'>
                <span className='sub-title'>Telegram-канал</span>
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
                  </li>
                  <li>
                    <i className='fas fa-check'></i>Тысячи позитивных отзывов
                  </li>
                </ul>
              </div>

              <a
                href={'https://t.me/+E8eKDKmN0U5lOTYy'}
                download
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-two'
              >
                Telegram-канал Fast Money
              </a>
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
        <img
          src={'/img/images/about_shape02.png'}
          alt=''
          className='shape-two rotateme'
        />
      </div>
    </section>
  );
};

export default About;
