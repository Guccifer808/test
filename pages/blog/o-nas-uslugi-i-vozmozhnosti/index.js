import React from 'react';
import LayoutBlog from '@/layouts/LayoutBlog';
import BackToBlogButton from '@/components/BackToBlogButton/BackToBlogButton';
import Head from 'next/head';

const index = () => {
  return (
    <LayoutBlog>
      <Head>
        <title>FastMoney | О нас: услуги и возможности</title>
        <meta name='description' content='О нас: услуги и возможности' />
      </Head>
      <div className='blog-post-item blog-details-wrap'>
        <div className='blog-post-thumb'>
          <img src={'/img/blog/o-nas-uslugi-i-vozmozhnosti.webp'} alt='' />
        </div>
        <div className='blog-post-content'>
          <div className='blog-meta'>
            <ul>
              <li>
                <i className='far fa-user'></i>FastMoney
              </li>
              <li>
                <i className='far fa-clock'></i>28.04.2024
              </li>
            </ul>
          </div>
          <h2 className='title'>О нас: услуги и возможности</h2>
          <p>
            Мы - Fast Money Exchange, являемся одним из ведущих сервисов,
            позволяющих беспрепятственно для физ и юр лиц производить любые
            операции за рубежом <span>в условиях санкций</span>
          </p>
          <div className='bd-approach-wrap'>
            <div className='row align-items-center'>
              <div className='bd-approach-content'>
                <h4 className='title'>Наша специализация</h4>

                <ul>
                  <li>
                    <i className='fas fa-check'></i>Помогаем совершать
                    международные платежи и получать валюту без ограничений в 30
                    странах мира.
                  </li>
                </ul>
              </div>
              <div className='row align-items-center'>
                <div className='bd-approach-content'>
                  <h4 className='title'>С нами вы получите</h4>

                  <ul>
                    <li>
                      <i className='fas fa-check'></i>Команду профессионалов в
                      сфере финансов, которые в режиме 24/7 предоставят лучшее
                      решение на рынке по вашей задаче
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <BackToBlogButton />
        </div>
      </div>
    </LayoutBlog>
  );
};

export default index;
