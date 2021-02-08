import React, { Fragment } from 'react';

const Testimonial = () => {
  return (
    <Fragment>
      <hr className='featurette-divider' />
      <h2 className='testimonial-heading text-center'>Testimonials</h2>
      <div id='Testimonials' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li
            data-target='#Testimonials'
            data-slide-to='0'
            className='active'></li>
          <li data-target='#Testimonials' data-slide-to='1'></li>
          <li data-target='#Testimonials' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner testimonial'>
          <div className='carousel-item active '>
            <div className='container'>
              <div className='carousel-caption text-center'>
                <h2 className='my-1'>Super Talented</h2>
                <p>
                  The Lemon squares are to die for. This young lady is super
                  talented!!!!
                  <br /> - Lakiskus
                </p>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='container'>
              <div className='carousel-caption text-center'>
                <h2 className='my-2'>
                  <span role='img' aria-label='welovebananapuddingcupcakes'>
                    😍 🍌 🧁 😍
                  </span>
                </h2>
                <p>
                  If you like banana pudding, you’ll love her banana pudding
                  cupcakes. <br />- R. Campbell
                </p>
              </div>
            </div>
          </div>
          <div className='carousel-item '>
            <div className='container'>
              <div className='carousel-caption text-center'>
                <h2 className='my-2'>Best cupcakes...</h2>
                <p>
                  Sam’s S&amp;T has some of the best cupcakes that I have ever
                  tasted. <br /> - Mom
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#Testimonials'
          role='button'
          data-slide='prev'>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#Testimonials'
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

export default Testimonial;
