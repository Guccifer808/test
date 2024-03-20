import React from 'react';
import FaqItem from './FaqItem';

const Faq = () => {
  const faq_items = [
    {
      id: 'headingOne',
      controls: 'collapseOne',
      expanded: true,
      btnClass: '',
      contentClass: 'show',
      title: 'Как оставить заявку на обмен?',
      details: `Написать нашему менеджеру по контактам указанным на сайте, либо контактам указанным в телеграм канале. Также вы можете оставить заявку на сайте в разделе выше.`,
    },
    {
      id: 'headingTwo',
      controls: 'collapseTwo',
      expanded: false,
      btnClass: 'collapsed',
      contentClass: '',
      title: 'Могу ли я поменять наличные рубли на бат или другие валюты?',
      details: `Мы не производим обмен наличных рублей на бат. Специализация нашего сервиса - обмен безналичных рублей на бат, а также криптовалют на бат, евро, доллар.`,
    },
    {
      id: 'headingThree',
      controls: 'collapseThree',
      expanded: false,
      btnClass: 'collapsed',
      contentClass: '',
      title: 'Как происходит обмен?',
      details: `Порядок действий следующий: вы договариваетесь с менеджером о курсе и сумме обмена -> присылаете локацию и удобное для вас время -> курьер приезжает на адрес с наличными, после чего вы делаете перевод.`,
    },
    {
      id: 'headingFour',
      controls: 'collapseFour',
      expanded: false,
      btnClass: 'collapsed',
      contentClass: '',
      title: 'Что значит обмен через банкомат?',
      details: `Обмен через банкомат - удобная особенность Таиланда. Чтобы снять сумму с тайского банкомата карта не требуется. Достаточно получить инструкцию и следовать ей. Подробней в видео в нашем телеграм канале. Кстати, подобная система действует и на Бали!`,
    },
    {
      id: 'headingFive',
      controls: 'collapseFive',
      expanded: false,
      btnClass: 'collapsed',
      contentClass: '',
      title: 'В каких странах вы работаете?',
      details: `Если кратко, то почти во всех. Разница лишь в суммах и комиссиях. В зависимости от типа услуги наша комиссия составляет от 1.5 до 7%. Комиссии при обычном обмене 2-3%, при обмене суммы под недвижимость в Таиланде и перестановках - от 1.5%, при оплате по инвойсу до 7%.`,
    },
    {
      id: 'headingSix',
      controls: 'collapseSix',
      expanded: false,
      btnClass: 'collapsed',
      contentClass: '',
      title:
        'Какой курс обмена является наиболее выгодным: обмен в вашем сервисе безнал рублей на бат или обмен с карты union pay на бат?',
      details: `Однозначный ответ - выгодней через наш сервис. Почему? Все просто: Когда вы меняете безнал рубли на бат через нас, вы получаете наличные по курсу исходя из формулы: закупочный курс + 3.
При обмене через карту union pay курс устанавливает РФ банк, которому принадлежит карта + тайский банкомат берет с вас комиссию за снятие, итого конечный курс получается на 1-1.5% хуже нашего. То есть при обмене с нами 100.000₽ вы экономите от 1000 до 1500₽. Это не говоря о том, что выпуск карт union pay стоит зачастую от 5000₽, а мы бесплатные, да еще и с удобной доставкой :)`,
    },
    {
      id: 'headingSeven',
      controls: 'collapseSeven',
      expanded: false,
      btnClass: 'collapsed',
      contentClass: '',
      title:
        'С каких карт РФ я могу сделать перевод и будет ли разница в курсе?',
      details: `Перевод можно сделать с любого РФ банка. Мы предоставим тот банк, на который вам будет удобней всего сделать перевод. Курс обмена не меняется.`,
    },
    {
      id: 'headingEight',
      controls: 'collapseEight',
      expanded: false,
      btnClass: 'collapsed',
      contentClass: '',
      title: 'Есть ли у вас партнерская программа?',
      details: `В данный момент мы сотрудничаем на партнерских условиях с турагентами и риелторами. Условия оговариваются индивидуально. По данному вопросу можно обратиться на любой из контактов, указанных на нашем сайте.`,
    },
  ];

  return (
    <section id='faq' className='faq-area'>
      <div className='container custom-container-four'>
        <div className='faq-shape-wrap'>
          <img src={'/img/images/faq_shape01.png'} alt='' className='img-one' />
          <img
            src={'/img/images/faq_shape_p.png'}
            alt=''
            className='img-two'
            // className='img-two rotateme'
          />
          <img
            src={'/img/images/faq_shape03.png'}
            alt=''
            className='img-three'
          />
        </div>

        <div className='row'>
          <div className='col-lg-12'>
            <div className='section-title section-title-two text-center mb-60'>
              <h2 className='title'>FAQ</h2>
            </div>

            <div className='faq-wrap wow fadeInUp' data-wow-delay='.2s'>
              <div className='accordion' id='accordionExample'>
                {faq_items.map((x, index) => (
                  <FaqItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
