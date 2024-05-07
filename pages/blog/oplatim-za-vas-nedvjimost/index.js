import BackToBlogButton from '@/components/BackToBlogButton/BackToBlogButton';
import LayoutBlog from '@/layouts/LayoutBlog';
import Head from 'next/head';

const index = () => {
  return (
    <LayoutBlog>
      <Head>
        <title>
          FastMoney | Оплатим за вас недвижимость или аренду апартаментов
        </title>
        <meta
          name='description'
          content='Оплатим за вас недвижимость или аренду апартаментов'
        />
      </Head>
      <div className='blog-post-item blog-details-wrap'>
        <div className='blog-post-thumb'>
          <img src={'/img/blog/oplatim-za-vas-nedvjimost.webp'} alt='' />
        </div>
        <div className='blog-post-content'>
          <div className='blog-meta'>
            <ul>
              <li>
                <i className='far fa-user'></i>FastMoney
              </li>
              <li>
                <i className='far fa-clock'></i>03.05.2024
              </li>
            </ul>
          </div>
          <h2 className='title'>
            Оплатим за вас недвижимость или аренду апартаментов
          </h2>
          <p>
            За 2023 год иностранцы вложили свыше 73,16 млрд батов в покупку
            14.449 квартир в Таиланде
          </p>
          <div className='bd-approach-wrap'>
            <div className='row align-items-center'>
              <div className='bd-approach-content'>
                <h4 className='title'>🌏 Топ-5 Стран-Покупателей</h4>

                <ul>
                  <li>
                    <i className='fa fa-circle'></i>🇨🇳 Китай: 6.614 квартир
                    (45,8% от всех сделок)
                  </li>
                  <li>
                    <i className='fa fa-circle'></i>🇷🇺 Россия: 1.260 квартир
                    (8,7%)
                  </li>
                  <li>
                    <i className='fa fa-circle'></i>🇺🇸 США: 631 квартир (4,4%)
                  </li>
                  <li>
                    <i className='fa fa-circle'></i>🇲🇲 Мьянма: 564 квартир
                    (3,9%)
                  </li>
                  <li>
                    <i className='fa fa-circle'></i>🇹🇼 Тайвань: 532 квартиры
                    (3,7%)
                  </li>
                </ul>
                <p className='mt-4 mb-1'>
                  Рады быть причастными к тому, что помогли возглавить список
                  нашим соотечественникам в 2023 году😌 <br /> В 2024 мы уже
                  помогли оплатить более 10-ти объектов недвижимости и будем
                  рады помочь с выгодной конвертацией всем желающим!
                </p>
              </div>
            </div>
          </div>

          <div className='bd-technology-content'>
            <h2 className='title'>
              Для тех, кто впервые планирует покупать недвижимость расскажем
              почему с нами это можно сделать с наибольшим комфортом:
            </h2>
            <div className='row align-items-center'>
              <div className='bd-approach-content'>
                <ul>
                  <li>
                    <i className='fa fa-check'></i>Если вы находитесь в России,
                    то мы примем для конвертации наличные рубли или доллары и
                    зачислим на счет застройщика баты. Для этого достаточно
                    посетить наш офис в Москве
                  </li>
                  <li>
                    <i className='fa fa-check'></i>Мы за
                    клиентоориентированность, потому если вы пользуетесь,
                    например, только банком ВТБ мы подберем идентичный банк для
                    вашего перевода во избежании любых доп комиссий. Отсутствие
                    у вас счета в сбербанке не будет для нас проблемой
                  </li>
                  <li>
                    <i className='fa fa-check'></i> Нас не напугать суммами,
                    оплатим любые объемы хоть за 10 объектов сразу Остались
                    вопросы? Свяжитесь с нашим менеджером любым из способов,
                    предложенных на сайте
                  </li>
                </ul>
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
