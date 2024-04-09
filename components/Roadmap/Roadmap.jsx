import React from 'react';
import RoadmapItem from './RoadmapItem';

const Roadmap = () => {
  const roadmap_items = [
    {
      roadmapTitle: 'Сентябрь 2022',
      title: 'Пхукет',
      info: 'Вышли на рынок Таиланда и начали предоставлять услуги по обмену на Пхукете',
    },
    {
      roadmapTitle: 'Декабрь 2022',
      title: 'От Пхукета до Пхангана',
      info: 'Расширили географию по всему Таиланду: Пхукет, Бангкок, Паттайя, Краби, Пханган',
    },

    {
      roadmapTitle: 'Март 2023',
      title: 'Глобальное развитие',
      info: 'Начали предоставлять услуги по обмену в Турции, ОАЭ, Индонезии',
    },

    {
      roadmapTitle: 'Июнь 2023',
      title: 'Мировая сеть партнёров',
      info: 'Увеличили сеть партнёрских офисов в 30+ странах мира',
    },
    {
      roadmapTitle: 'Август 2023',
      title: 'Telegram Верификация',
      info: 'Получили синюю галочку от Telegram и стали единственным верифицированным сервисом обмена в телеграм',
    },
    {
      roadmapTitle: 'Сентябрь 2023',
      title: 'Расширение услуг для бизнеса',
      info: 'Начали работу с юр лицами. Открыли возможность оплаты инвойсов для клиентов. А также стали работать с Китаем, проводить отправки и прием на Alipay, WeChat',
    },
    {
      roadmapTitle: 'Март 2024',
      title: 'Offline пункт обмена',
      info: 'Запустили свой первый offline пункт обмена на Пхукете',
    },
  ];

  return (
    <section id='roadmap' className='roadmap-area pt-130 pb-130 area-bg-top'>
      <div className='container custom-container-two'>
        <div className='row justify-content-center'>
          <div className='col-xl-5 col-lg-8'>
            <div className='section-title text-center mb-60'>
              <span className='sub-title text-white'>FastMoney's Roadmap</span>
              <h2 className='title text-white'>
                Наш Путь <span>Развития</span>
              </h2>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div
              className='bt-roadmap_x bt-roadmap-scrollbar'
              // ref={scrollRef}
              style={{ overflow: 'auto' }}
            >
              <div className='bt-roadmap-wrap '>
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
