import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <footer className='container'>
        <p className='float-right'>
          <Link to='/'>Back to top</Link>
        </p>
        <p>
          &copy; 2015-{new Date().getFullYear()} Sam's Sweets &amp; Treats
          &middot; <Link to='/'>FAQ</Link> &middot;{' '}
          <Link to='/'>Terms</Link>
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
