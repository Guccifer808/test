import React from 'react';
import PageLoader from '../components/PageLoader/PageLoader';
import HeaderTwo from '../components/Header/HeaderTwo';
import FooterOne from '../components/Footer/FooterOne';

const LayoutTwo = (props) => {
  return (
    <div>
      <PageLoader />

      <HeaderTwo />

      {props.children}

      <FooterOne />
    </div>
  );
};

export default LayoutTwo;
