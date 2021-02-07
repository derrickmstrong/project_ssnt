import React, { Fragment } from 'react';
import { specials } from '../data/specials';

const Specials = () => {
  return (
    <Fragment>
      {specials.map((item, index) => {
        return item.month === new Date().getMonth() ? (
          <div className='row card col-11 ml-3 mb-3'>
            <div key={index} className='row no-gutters'>
              <div className='col-md-12'>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-text'>{item.body}</p>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </Fragment>
  );
};

export default Specials;
