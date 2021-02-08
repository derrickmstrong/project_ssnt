import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Featured = () => {
  return (
    <Fragment>
      <div className='row'>
        {products.map((item, index) => {
          return item.isFeatured ? (
            <div key={index} className='col-lg-4'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
                width='200'
                height='200'
                alt=''
                className='img-fluid rounded-50'
              />
              <h2>{item.title.toUpperCase()}</h2>
              {/* <p >
                {item.specialty_flavors
                  ? `SPECIALTY:${item.specialty_flavors}`
                  : item.flavors
                  ? `CLASSIC: ${item.flavors}`
                  : null}
              </p> */}
              <p>
                <Link
                  className='btn btn-brownie'
                  to={`order`}
                  role='button'>
                  Order Now
                </Link>
              </p>
            </div>
          ) : null;
        })}
      </div>
    </Fragment>
  );
};

export default Featured;
