import React, { Fragment } from 'react';
import { cta } from '../data/cta';

import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <Fragment>
      {cta.map((item, index) => {
        return (
          <div key={index} className='my-5'>
            <div className='row featurette '>
              <div className={`col-md-7 ${item.order_1}`}>
                {item.title !== '' || item.byLine !== '' ? (
                  <h2 className='featurette-heading'>
                    {item.title !== '' ? item.title : null} <br />
                    {item.byLine !== '' ? (
                      <Link to={item.byline_link} className='cta-links'>
                        <h3>{item.byLine}</h3>
                      </Link>
                    ) : null}
                  </h2>
                ) : null}
                <p className='lead mb-3 d-flex justify-content-start'>{item.message}</p>
              </div>
              <div className={`col-md-5 ${item.order_2}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
                  width='350'
                  alt={item.alt}
                  className='rounded-circle'
                />
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default CTA;
