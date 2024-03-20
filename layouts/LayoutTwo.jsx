import React from 'react';
import PageLoader from '../components/PageLoader/PageLoader';
import cn from 'classnames';
import HeaderTwo from '../components/Header/HeaderTwo';
import FooterOne from '../components/Footer/FooterOne';

const LayoutTwo = (props) => {
  return (
    <div className={cn('white-background')}>
      <PageLoader />

      <HeaderTwo />

      {props.children}

      <FooterOne />
    </div>
  );
};

export default LayoutTwo;
