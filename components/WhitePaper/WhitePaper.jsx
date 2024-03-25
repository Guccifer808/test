import React from 'react';
import Link from 'next/link';

const WhitePaper = () => {
  return (
    <section className='document-area pt-60'>
      <div className='container '>
        <div className='row justify-content-center'>
          <div className='col-lg-7 order-2 order-lg-0'>
            <div
              className='document-img text-center wow fadeInUp'
              data-wow-delay='.2s'
            >
              <img src={'/img/images/document_img.png'} alt='' />
            </div>
          </div>

          <div className='col-lg-5 col-md-7'>
            <div
              className='document-content mt-50 wow fadeInRight'
              data-wow-delay='.2s'
            >
              <div className='section-title mb-60 text-center'>
                <span className='sub-title text-white'>Финансовые Решения</span>
                <h2 className='title text-white '>
                  C нами вы <span> сможете</span>
                </h2>
              </div>
              <div className='row align-items-center justify-content-center d-flex flex-column'>
                <ul className='document-list row'>
                  <li>
                    Поменять безналичные рубли или USDT на наличные/безналичные
                    баты
                  </li>
                  <li>
                    Оплатить инвойс, работаем с юр. лицами для оплаты товаров и
                    услуг
                  </li>
                  <li>Оплатить недвижимость в Таиланде</li>
                </ul>
              </div>
              {/* <div className='d-flex justify-content-center align-center '> */}
              <Link href='/' className='btn'>
                Telegram-Канал
              </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
