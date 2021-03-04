import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import BackToTop from 'react-back-to-top-button';

const Footer = () => {
  return (
    <Fragment>
      <footer className='container'>
        <p className='float-right'>
          <BackToTop
            showOnScrollUp
            showAt={100}
            speed={1500}
            easing='easeInOutQuint'
            style={{ fontSize: '1.5em', marginRight: '40px' }}>
            <button className='btn btn-blueberry'>Back to top</button>
          </BackToTop>
        </p>
        <p>
          &copy; 2015-{new Date().getFullYear()} Sam's Sweets &amp; Treats
          &middot;{' '}
          <span className=''>
            <a
              href='https://www.facebook.com/samsweetstreats'
              target='_blank'
              rel='noopener noreferrer'>
              Facebook
            </a>{' '}
            &middot;{' '}
            <a
              href='https://www.instagram.com/samsweetstreats/'
              target='_blank'
              rel='noopener noreferrer'>
              Instagram
            </a>
          </span>{' '}
          {/* &middot; <Link to='/'>FAQ</Link> &middot; <Link to='/'>Terms</Link> */}
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
