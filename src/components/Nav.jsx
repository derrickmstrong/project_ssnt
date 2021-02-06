import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Specials from './Specials';
import PriceList from './PriceList';

const Nav = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <Link class='navbar-brand' to={'/'}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            width='35px'
            alt=''
          />
        </Link>
        <Link className='navbar-brand' to={'/'}>
          Sam's Sweet &amp; Treats
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to={`about`}>
                About
              </Link>
            </li>
            <li class='nav-item dropdown'>
              <Link
                class='nav-link dropdown-toggle'
                data-toggle='dropdown'
                to='/menu'
                role='button'
                aria-haspopup='true'
                aria-expanded='false'>
                Full Menu
              </Link>
              <div class='dropdown-menu'>
                <Link class='dropdown-item' to={`full-menu`}>
                  Desserts
                </Link>
                <div class='dropdown-divider'></div>
                <span
                  className='price-list dropdown-item'
                  to='/'
                  data-toggle='modal'
                  data-target='#pricelistModal'>
                  Price List
                </span>
                <span
                  className='specials dropdown-item'
                  to='/'
                  data-toggle='modal'
                  data-target='#specialsModal'>
                  Specials
                </span>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`order`}>
                Order Now
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={`gallery`}>
                Gallery
              </Link>
            </li>

            <li className='nav-item'>
              <span
                className='nav-link contact'
                to='/'
                data-toggle='modal'
                data-target='#contactModal'>
                Contact
              </span>
            </li>
          </ul>
          <span className='social'>
            <a
              href='https://www.facebook.com/samsweetstreats'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fb.png`}
                width='35px'
                alt=''
                className='mr-2'
              />
            </a>
            <a
              href='https://www.instagram.com/samsweetstreats/'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/ig.png`}
                width='35px'
                alt=''
                className='mr-2'
              />
            </a>
          </span>
        </div>
      </nav>

      {/* Contact Modal  */}
      <div
        class='modal fade'
        id='contactModal'
        tabindex='-1'
        aria-labelledby='contactModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='contactModalLabel'>
                Contact
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              Email:{' '}
              <a
                href='mailto:order@samsweetsandtreats.com'
                target='_blank'
                rel='noopener noreferrer'>
                <small className=''>order@samsweetsandtreats.com</small>
              </a>
              <br /><br />
              Phone: 205-XXX-XXXX<br /><br />
              Social: 
              <span className=''>
                <a
                  href='https://www.facebook.com/samsweetstreats'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/fb.png`}
                    width='35px'
                    alt=''
                    className='mr-2'
                  />
                </a>
                <a
                  href='https://www.instagram.com/samsweetstreats/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/ig.png`}
                    width='35px'
                    alt=''
                    className='mr-2'
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Specials Modal  */}
      <div
        class='modal fade'
        id='specialsModal'
        tabindex='-1'
        aria-labelledby='specialsModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='specialsModalLabel'>
                This Month's Specials
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <Specials />
            </div>
          </div>
        </div>
      </div>

      {/* Specialty Modal  */}
      <div
        class='modal fade'
        id='specialtyModal'
        tabindex='-1'
        aria-labelledby='specialtyModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='specialtyModalLabel'>
                Specialty Cupcake/Cakes
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <Specials />
            </div>
          </div>
        </div>
      </div>

      {/* Price List Modal  */}
      <div
        class='modal fade'
        id='pricelistModal'
        tabindex='-1'
        aria-labelledby='pricelistModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='pricelistModalLabel'>
                Price List
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <PriceList />
              <p>
                Note: All toppers, icing images and accessories are an extra
                charge. Ask for a quote for detailed pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Nav;
