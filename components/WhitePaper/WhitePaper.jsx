import React from 'react';
import Link from 'next/link';

const WhitePaper = () => {
  return (
    <section className='document-area '>
      <div className='container '>
        <div className='row justify-content-center'>
          <div className='col-lg-7 order-2 order-lg-0'>
            <div
              className='document-img text-center wow fadeInLeft'
              data-wow-delay='.5s'
            >
              <img
                src={'/img/images/mockup4.png'}
                alt='FastMoney mockup'
                loading='lazy'
              />
            </div>
          </div>

          <div className='col-lg-5 col-md-7 order-1 order-lg-2'>
            <div
              className='document-content mt-50 wow fadeInRight'
              data-wow-delay='.5s'
            >
              <div className='section-title mb-60 text-center'>
                <span className='sub-title text-white'>Финансовые Решения</span>
                <h2 className='title text-white '>
                  C нами вы <span> сможете</span>
                </h2>
              </div>
              <div
                className='document-img-mob text-center wow fadeInUp mb-5'
                data-wow-delay='.2s'
              >
                <img
                  src={'/img/images/mockup4.png'}
                  alt='FastMoney mockup'
                  loading='lazy'
                />
              </div>
              <div className='about-list align-items-center d-flex justify-content-center'>
                <ul className='document-list row '>
                  <li>
                    <i className='fas fa-check'></i>Обменять безналичные рубли и
                    USDT на наличный и безналичный бат
                  </li>
                  <li>
                    <i className='fas fa-check'></i>Оплатить invoice за услуги и
                    товары, сделать бронирование и оплаты
                  </li>
                  <li>
                    {' '}
                    <i className='fas fa-check'></i>Оплатить любую недвижимость
                    в Таиланде
                  </li>
                </ul>
              </div>
              {/* </div> */}
              <h3 className='title text-center mb-4'>Связаться с нами:</h3>
              <div className='d-flex justify-content-center  align-items-center gap-3 '>
                <Link
                  href='https://t.me/fastmoneyphuket'
                  className='btn btn-tg btn-rounded'
                  target='_blank'
                >
                  <i
                    className='fab fa-telegram-plane'
                    style={{ fontSize: 15 }}
                  ></i>
                </Link>
                <Link
                  href='https://wa.me/79520042864'
                  className='btn btn-wa btn-rounded'
                  target='_blank'
                >
                  <i className='fab fa-whatsapp' style={{ fontSize: 15 }}></i>
                </Link>
                <Link
                  href='https://t.me/fastmoneyphuket'
                  className='btn btn-ig btn-rounded'
                  target='_blank'
                >
                  <i className='fab fa-instagram' style={{ fontSize: 15 }}></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
