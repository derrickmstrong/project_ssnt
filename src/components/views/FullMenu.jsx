import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { products } from '../../data/products';

const FullMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <div className='container mt-2'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Full Menu - Sam's Sweet and Treats</title>
      </Helmet>
      <div className='drip'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/drip.svg`}
          alt='Chocolate
        Drip'
        />
      </div>
      <div className='full-menu-body'>
        <h1>Full Menu</h1>
        <h2 id='sweet'>Sweets</h2>
        <div className='mb-2'>
          {products.map((item, index) => {
            return item.type === 'sweet' && !item.isSpecialty ? (
              <div key={index} className='row mb-5'>
                <div className='col-md-8 '>
                  <p className='full-menu-title'>{item.title}</p>
                  {item.snippet !== '' ? (
                    <>
                      <p>
                        <em>{item.snippet}</em>
                      </p>
                    </>
                  ) : null}
                </div>
                <div className='col-md-4 full-menu-price'>
                  {item.classic_price === undefined ? (
                    <><strong>{item.current_price}</strong></>
                  ) : (
                    <div className="mb-3">
                      <strong>Classic: {item.classic_price}</strong> <br />
                      <strong>Specialty: {item.specialty_price}</strong>
                    </div>
                  )}
                </div>
                <div className='col-md-8 full-menu-description'>
                  {item.description === '' &&
                  item.specialty_flavors !== undefined ? (
                    <>
                      <p className='mb-3'>
                        <strong>Classic Cake Flavors:</strong> {item.flavors}
                      </p>
                      <p>
                        <strong>Specialty Cake Flavors:</strong>{' '}
                        {item.specialty_flavors}
                      </p>
                    </>
                  ) : item.flavors !== '' ? (
                    <>
                      <strong>Flavors:</strong> {item.flavors}
                    </>
                  ) : null}
                </div>
              </div>
            ) : null;
          })}
        </div>
        <h2 id='treat'>Treats</h2>
        <div className='mb-2'>
          {products.map((item, index) => {
            return item.type === 'treat' && !item.isSpecialty ? (
              <div key={index} className='row mb-5'>
                <div className='col-md-8 full-menu-title'>{item.title}</div>
                <div className='col-md-4 full-menu-price'>
                  <strong>{item.current_price}</strong>
                </div>
                <div className='col-md-8 full-menu-description'>
                  {item.snippet !== '' ? (
                    <>
                      <p><em>{item.snippet}</em></p>
                    </>
                  ) : null}
                  {item.description === '' && item.flavors !== undefined ? (
                    <>
                      <strong>Flavors:</strong> {item.flavors}
                    </>
                  ) : (
                    `${item.description}`
                  )}
                </div>
              </div>
            ) : null;
          })}
        </div>
        <h2 id='specialty'>Specialty</h2>
        <div>
          {products.map((item, index) => {
            return item.isSpecialty ? (
              <div key={index} className='row mb-5'>
                <div className='col-md-4 full-menu-title'>{item.title}</div>

                <div className='col-md-8 full-menu-description'>
                  {item.description}
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
