import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const PriceList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <Fragment>
      {products.map((item, index) => {
        return item.isSpecialty !== true ? (
          <div className='row card col-11 ml-3 mb-3'>
            <div key={index} className='row no-gutters'>
              <div className='col-md-12'>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>
                    {item.sq8_price && item.classic_price ? (
                      <>
                        {item.rd6_title}
                        <br />
                        {item.rd6_price}
                        <br />
                        <br />
                        {item.rd8_title}
                        <br />
                        {item.rd8_price}
                        <br />
                        <br />
                        {item.rd10_title}
                        <br />
                        {item.rd10_price}
                        <br />
                        <br />
                        {item.rd12_title}
                        <br />
                        {item.rd12_price}
                        <br />
                        <br />
                        {item.sq6_title}
                        <br />
                        {item.sq6_price}
                        <br />
                        <br />
                        {item.sq8_title}
                        <br />
                        {item.sq8_price}
                        <br />
                        <br />
                        {item.sq10_title}
                        <br />
                        {item.sq10_price}
                        <br />
                        <br />
                        {item.sq12_title}
                        <br />
                        {item.sq12_price}
                        <br />
                      </>
                    ) : item.classic_price ? (
                      <>
                        Classic: {item.classic_price} <br />
                        Specialty: {item.specialty_price}
                      </>
                    ) : (
                      item.current_price
                    )}
                  </p>
                  <p className='card-text'>
                    {item.current_price === 'Ask for a quote' ? (
                      <a
                        href='mailto:orders@samsweetsandtreats.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ textDecoration: 'none' }}>
                        <small className='text-muted'>Request Quote Now</small>
                      </a>
                    ) : item.current_price === 'Schedule an appointment' ? (
                      <a
                        href='mailto:orders@samsweetsandtreats.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ textDecoration: 'none' }}>
                        <small className='text-muted'>Schedule Now</small>
                      </a>
                    ) : (
                      <Link to={`order`} style={{ textDecoration: 'none' }}>
                        <small className='text-muted'>Order Now</small>
                      </Link>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </Fragment>
  );
};

export default PriceList;
