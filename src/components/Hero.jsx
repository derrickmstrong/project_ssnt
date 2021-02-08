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
              src={`${process.env.PUBLIC_URL}/assets/hero_menu2.png`}
              alt=''
              srcset=''
            />
            <div className='container'>
              <div className='carousel-caption text-left'>
                <h1>Welcome to SS&amp;T</h1>
                {/* <p>
                  Enjoy our delicious desserts. 
                </p> */}
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
            <img
              src={`${process.env.PUBLIC_URL}/assets/hero_about3.png`}
              alt=''
              srcset=''
            />
            <div className='container'>
              <div className='carousel-caption text-left'>
                <h1>Meet Sam</h1>
                {/* <p>
                  Welcome to Sam’s Sweets &amp; Treats, where we bring you “A
                  Taste of Happiness”.
                </p> */}
                <p>
                  <Link
                    className='btn btn-lg btn-blueberry'
                    to='about'
                    role='button'>
                    Learn Her Story
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/hero_gallery2.png`}
              alt=''
              srcset=''
            />
            <div className='container'>
              <div className='carousel-caption text-left'>
                <h1>We <span role='img' aria-label='heart'>❤️</span> Desserts</h1>
                {/* <p>
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Donec id elit non mi porta gravida at eget metus. Nullam id
                  dolor id nibh ultricies vehicula ut id elit.
                </p> */}
                <p>
                  <Link
                    className='btn btn-lg btn-blueberry'
                    to='gallery'
                    role='button'>
                    Browse Gallery
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
