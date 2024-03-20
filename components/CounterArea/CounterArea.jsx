import React, { useState, useEffect, useRef } from 'react';
import CounterAreaItem from './CounterAreaItem';
import useCounter from '@/lib/hooks/useCounter';

const CounterArea = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterAreaRef = useRef(null);

  useEffect(() => {
    const observerSupported = 'IntersectionObserver' in window;

    if (!observerSupported) {
      console.log('Intersection Observer not supported');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0 } // Trigger when any part of the element is visible
    );

    if (counterAreaRef.current) {
      observer.observe(counterAreaRef.current);
    }

    return () => {
      if (counterAreaRef.current) {
        observer.unobserve(counterAreaRef.current);
      }
    };
  }, []);

  const amount = useCounter(19500, 20000, 500, isVisible);
  const amountReviews = useCounter(800, 1000, 200, isVisible);
  const amountPartners = useCounter(1, 7, 7, isVisible);

  return (
    <section className='counter-area' ref={counterAreaRef}>
      <div className='container custom-container-four'>
        <div className='counter-inner'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6'>
              <CounterAreaItem
                icon={'/img/icon/counter_icon01.svg'}
                amount={amount}
                title='Более 20000 клиентов'
              />
            </div>

            <div className='col-lg-4 col-sm-6'>
              <CounterAreaItem
                icon={'/img/icon/counter_icon01.svg'}
                amount={amountReviews}
                title='Более 1000 отзывов'
              />
            </div>

            <div className='col-lg-4 col-sm-6'>
              <CounterAreaItem
                icon={'/img/icon/counter_icon01.svg'}
                amount={amountPartners}
                title='Cеть офисов в 7 странах'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterArea;
