import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Fragment>
      <div id='myCarousel' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li
            data-target='#myCarousel'
            data-slide-to='0'
            className='active'></li>
          <li data-target='#myCarousel' data-slide-to='1'></li>
          <li data-target='#myCarousel' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/hero_menu.png`}
              alt=''
              srcset=''
            />
            <div className='container'>
              <div className='carousel-caption text-left'>
                <h1>Example headline.</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <Link
                    className='btn btn-lg btn-blueberry'
                    to='full-menu'
                    role='button'>
                    See Our Menu
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <svg
              className='bd-placeholder-img'
              width='100%'
              height='100%'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='xMidYMid slice'
              focusable='false'
              role='img'>
              <rect width='100%' height='100%' fill='#777' />
            </svg>
            <div className='container'>
              <div className='carousel-caption text-left'>
                <h1>Meet Sam</h1>
                <p>
                  Welcome to Sam’s Sweets &amp; Treats, where we bring you “A
                  Taste of Happiness”.
                </p>
                <p>
                  <Link
                    className='btn btn-lg btn-blueberry'
                    to='about'
                    role='button'>
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/hero_gallery.png`}
              alt=''
              srcset=''
            />
            <div className='container'>
              <div className='carousel-caption text-left'>
                <h1>Cakes, Cookies, and So Much More</h1>
                <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p>
                <p>
                  <Link
                    className='btn btn-lg btn-blueberry'
                    to='gallery'
                    role='button'>
                    Browse gallery
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#myCarousel'
          role='button'
          data-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#myCarousel'
          role='button'
          data-slide='next'>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Hero;
