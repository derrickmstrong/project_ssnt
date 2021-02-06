import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../Hero';
import Featured from '../Featured';
import CTA from '../Cta';
import Testimonial from '../Testimonial';

const Home = () => {
  return (
    <div className='mb-5'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home - Sam's Sweet and Treats</title>
      </Helmet>
      <Hero />
      <div className='container marketing'>
        <Featured />
        <CTA />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
