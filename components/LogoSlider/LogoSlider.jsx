'use client';
import Image from 'next/image';
import React, { Component } from 'react';
import Slider from 'react-slick';

// IMAGES DATA FOR CAROUSEL
// interface Data {
//   imgSrc: string;
// }

const data = [
  {
    imgSrc: '/img/payments/sber.png',
  },
  {
    imgSrc: '/img/payments/tinkoff.png',
  },
  {
    imgSrc: '/img/payments/alfa.png',
  },
  {
    imgSrc: '/img/payments/raiffeisen.svg',
  },
  {
    imgSrc: '/img/payments/vtb.png',
  },
  {
    imgSrc: '/img/payments/sbp.png',
  },
  {
    imgSrc: '/img/payments/mir.png',
  },
  {
    imgSrc: '/img/payments/visa.png',
  },
  {
    imgSrc: '/img/payments/mastercard.png',
  },
  {
    imgSrc: '/img/payments/tether.png',
  },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className='text-center bg-lightpink'>
        <div className='mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8'>
          <div>
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i}>
                  <Image
                    src={item.imgSrc}
                    alt={item.imgSrc}
                    height={50}
                    width={100}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
