import React from 'react';
import LayoutBlog from '@/layouts/LayoutBlog';
import TelegramButton from '@/components/TelegramButton/TelegramButton';
import BackToBlogButton from '@/components/BackToBlogButton/BackToBlogButton';
import Head from 'next/head';

const index = () => {
  return (
    <LayoutBlog>
      <Head>
        <title>
          FastMoney | Меняйте рубли на наличные баты через АТМ за 5 минут!
        </title>
        <meta
          name='description'
          content='Меняйте рубли на наличные баты через АТМ за 5 минут!'
        />
      </Head>
      <div className='blog-post-item blog-details-wrap'>
        <div className='blog-post-thumb'>
          <img
            src={
              '/img/blog/menyaete-rubli-na-nalichnye-bat-cherez-atm-za-5-minut.webp'
            }
            alt=''
          />
        </div>
        <div className='blog-post-content'>
          <div className='blog-meta'>
            <ul>
              <li>
                <i className='far fa-user'></i>FastMoney
              </li>
              <li>
                <i className='far fa-clock'></i>01.05.2024
              </li>
            </ul>
          </div>
          <h2 className='title'>
            Меняйте рубли на наличные баты через АТМ за 5 минут!
          </h2>
          <p>
            С каждым годом пребывание в Таиланде становится комфортнее и это
            затрагивает все сферы, в том числе и обмен валюты Помимо привычной
            доставки курьером мы также осуществляем выдачу через Банкомат (АТМ).
            Для получения наличных бат через тайский банкомат вам не нужно иметь
            при себе русские или тайский карты
          </p>
          <div className='bd-approach-wrap'>
            <div className='row align-items-center'>
              <div className='bd-approach-content'>
                <h4 className='title'>
                  Для тех, кто ни разу не пользовался данной услугой, опишем
                  процесс
                </h4>

                <ul>
                  <li>
                    <i className='fas fa-check'></i>Мы договариваемся с вами о
                    сумме обмена и фиксируем курс
                  </li>
                  <li>
                    <i className='fas fa-check'></i>Менеджер помогает найти вам
                    ближайший подходящий АТМ
                  </li>
                  <li>
                    <i className='fas fa-check'></i>Вы делаете перевод на наши
                    реквизиты согласно сумме обмена
                  </li>
                  <li>
                    <i className='fas fa-check'></i>Менеджер отправляет вам
                    подробную инструкцию. Далее вы снимаете сумму с банкомата
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='bd-technology-content'>
            <h2 className='title'>
              Более подробно про дистанционную выдачу можно прочитать в постах в
              нашем телеграм-канале
            </h2>
            <p>
              Чтобы произвести обмен с доставкой или через банкомат, напишите
              нашему менеджеру и оставьте заявку с указанием суммы обмена в
              рублях
            </p>
            <TelegramButton
              buttons={[
                {
                  btnText: 'Читать в Telegram',
                  href: 'https://t.me/fm1ex/372',
                },
                {
                  btnText: 'Читать в Telegram',
                  href: 'https://t.me/fm1ex/319',
                },
              ]}
            />
          </div>
          <BackToBlogButton />
        </div>
      </div>
    </LayoutBlog>
  );
};

export default index;
