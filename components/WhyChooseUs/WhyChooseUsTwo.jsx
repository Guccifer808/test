import React from 'react';
import WhyChooseUsTwoItem from './WhyChooseUsTwoItem';

const WhyChooseUsTwo = () => {
  const items = [
    {
      // src: '/img/icon/atm.svg',
      src: '/img/icon/1.png',
      title: 'Через ATM - банкомат',
      desc: 'Снимайте наличные в любом месте с нашего тайского счета',
      url: '/',
    },
    {
      // src: '/img/icon/delivery.svg',
      src: '/img/icon/2.png',
      title: 'Доставка курьером',
      desc: 'Курьер доставит баты в течение 1 часа с момента обращения ',
      url: '/',
    },
    {
      // src: '/img/icon/transfer.svg',
      src: '/img/icon/3.png',
      title: 'Перевод на счёт',
      desc: 'Переведем безналичные баты на тайский счёт',
      url: '/',
    },
    {
      // src: '/img/icon/transfer.svg',
      src: '/img/icon/4.png',
      title: 'Без лимитов',
      desc: 'Меняем любые объемы без верхней границы',
      url: '/',
    },
  ];

  return (
    <section className='choose-area-two choose-bg pb-120'>
      <div className='container custom-container-four'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center mb-60'>
              <span className='sub-title text-white'>Почему выбирают нас</span>
              <h2 className='title text-white'>
                Способы получения<span> бат </span>
              </h2>
            </div>
          </div>
        </div>

        <div className='row '>
          {items.map((x, index) => (
            <div key={index} className='col-lg-3 col-sm-6'>
              <WhyChooseUsTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsTwo;
