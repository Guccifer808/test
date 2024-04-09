import React from 'react';
import WhyChooseUsTwoItem from './WhyChooseUsTwoItem';

const WhyChooseUsTwo = () => {
  const items = [
    {
      src: '/img/icon/atm.svg',
      title: 'Через ATM - банкомат',
      desc: 'Снимайте наличные в любом месте с нашего тайского счета',
      url: '/',
    },
    {
      src: '/img/icon/delivery.svg',
      title: 'Доставка курьером',
      desc: 'Курьер доставит баты в течение 1 часа с момента обращения ',
      url: '/',
    },
    {
      src: '/img/icon/transfer.svg',
      title: 'Перевод на счёт',
      desc: 'Переведем безналичные баты на тайский счёт',
      url: '/',
    },
    {
      src: '/img/icon/transfer.svg',
      title: 'У нас нет потолка',
      desc: 'Мы не имеет верхней границы по суммам, меняйте любые объемы',
      url: '/',
    },
  ];

  return (
    <section className='choose-area-two choose-bg pb-130'>
      <div className='container custom-container-four'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center mb-70'>
              <span className='sub-title text-white'>Почему выбирают нас</span>
              <h2 className='title text-white'>
                Способы получения <span>бат</span>
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
