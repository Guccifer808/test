import React from 'react';
import RoadmapItem from './RoadmapItem';
import { useHorizontalScroll } from '@/lib/hooks/useHorizontalScroll';

const RoadmapTwo = () => {
  const roadmap_items = [
    {
      roadmapTitle: 'Сентябрь 2022',
      title: 'Выход на рынок',
      info: (
        <>
          Вышли на рынок Таиланда и начали предоставлять услуги по обмену на
          Пхукете
        </>
      ),
    },
    {
      roadmapTitle: 'Декабрь 2022',
      title: 'Расширение географии',
      info: (
        <>
          {' '}
          Расширили географию по всему Таиланду: Пхукет, Бангкок, Паттайя,
          Краби, Пханган
        </>
      ),
    },
    {
      roadmapTitle: 'Март 2023',
      title: 'Alpha Test',
      info: <>Начали предоставлять услуги по обмену в Турции, ОАЭ, Индонезии</>,
    },
    {
      roadmapTitle: 'Июнь 2023',
      title: 'Сеть партнерских офисов',
      info: <>Увеличили сеть партнёрских офисов в 30+ странах мира</>,
    },
    {
      roadmapTitle: 'Август 2023',
      title: 'Верификация в Telegram',
      info: (
        <>
          Получили синюю галочку от Telegram и стали единственным
          верифицированным сервисом обмена в телеграм{' '}
        </>
      ),
    },
    {
      roadmapTitle: 'Март 2024',
      title: 'Открытие offline пункта обмена',
      info: <>Запустили свой первый offline пункт обмена на Пхукете </>,
    },
    {
      roadmapTitle: 'Июнь 2023',
      title: 'Сеть партнерских офисов',
      info: <>Увеличили сеть партнёрских офисов в 30+ странах мира</>,
    },
  ];

  return (
    <section id='roadmap' className='roadmap-area-two pt-130 pb-100'>
      <div className='container custom-container-two'>
        <div className='row justify-content-center'>
          <div className='col-xl-6'>
            <div className='section-title section-title-two text-center mb-65'>
              <span className='sub-title'>roadmap</span>
              <h2 className='title'>
                Bigtech Strategy and <br />
                Project Plan
              </h2>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='roadmap-wrap-two'>
              {roadmap_items.map((x, index) => (
                <RoadmapItem key={index} item={x} />
              ))}
            </div>

            <div className='roadmap-wrap-two bottom'>
              {roadmap_items.map((x, index) => (
                <RoadmapItem key={index} item={x} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTwo;
