import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import { blog } from '../../data/blog';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div className='container my-2'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Thank You for Ordering - Sam's Sweet and Treats</title>
      </Helmet>
      <div className='drip'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/drip.svg`}
          alt='Chocolate
        Drip'
        />
      </div>
      <div className='row thank-you-body'>
        <div className='col-md-12 thank-you'>
          <h1>Thank You</h1>
          <p>We appreciate you choosing Sam's Sweets and Treats!</p>
          <p>
            We will review your order information and contact you within 48 hrs.
            to provide a final quote and confirm your information (if required).
          </p>
          <p>Have a great day!</p> <p>😍🍰🎂🍪😍</p>{' '}
          <p>
            Your Friendly Neighborhood Baker,
            <br />
            Sam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
