import React from 'react';
import WhyChooseUsTwoItem from './WhyChooseUsTwoItem';

const WhyChooseUsTwo = () => {
  const items = [
    {
      src: '/img/icon/atm.svg',
      title: 'Через банкомат',
      desc: 'Для этого не нужно иметь карты тайского или РФ банков.',
      url: '/',
    },
    {
      src: '/img/icon/delivery.svg',
      title: 'Доставка курьером',
      desc: 'Курьер приезжает в течение 1 часа по указанному адресу',
      url: '/',
    },
    {
      src: '/img/icon/transfer.svg',
      title: 'Перевод на счёт',
      desc: 'Если у вас уже есть карта тайского банка или нужно произвести оплату за что-либо.',
      url: '/',
    },
  ];

  return (
    <section className='choose-area-two choose-bg pb-130'>
      <div className='container custom-container-four'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='section-title text-center mb-70'>
              <span className='sub-title'>why Choose us</span>
              <h2 className='title'>Why you choose our bigtech Token</h2>
            </div>
          </div>
        </div>

        <div className='row'>
          {items.map((x, index) => (
            <div key={index} className='col-lg-4 col-sm-6'>
              <WhyChooseUsTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsTwo;
