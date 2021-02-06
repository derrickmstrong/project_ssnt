import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const BestSellers = () => {
  return (
    <div>
      <hr className='featurette-divider' />
      <div className='row d-flex justify-content-center'>
        <h2 className='best_sellers-heading mb-5 col-12 text-center'>
          Fan Favorites
        </h2>
        {products.map((item, index) => {
          return item.isBestSeller ? (
            <div key={index} className='col-lg-2 text-center'>
              <Link to={item.link}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
                  alt=''
                  width='100'
                />
              </Link>
              <p>
                {item.title} <br />
                {/* <span className='prev-price'>{item.prev_price}</span>{' '} */}
                <span className='current-price'>{item.current_price}</span>
              </p>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default BestSellers;
