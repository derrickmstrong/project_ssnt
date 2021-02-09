import React, { Component, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import JotformEmbed from 'react-jotform-embed';

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div className='container my-2'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Order Now - Sam's Sweet and Treats</title>
      </Helmet>
      <div className='drip'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/drip.svg`}
          alt='Chocolate Drip'
        />
      </div>
      <div className='order-body'>
        <h1>Order Now</h1>
        <JotformEmbed
          src='https://form.jotform.com/201154754968160'
          scrolling='true'
        />
      </div>
    </div>
  );
};

export default Order;
