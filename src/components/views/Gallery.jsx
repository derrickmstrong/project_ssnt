import React from 'react';
import { Helmet } from 'react-helmet';

import PhotoGallery from 'react-grid-gallery';

import { images } from '../../data/images';

const Gallery = () => {
  return (
    <div className='container my-2'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Gallery - Sam's Sweet and Treats</title>
      </Helmet>
      <div className='drip'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/drip.svg`}
          alt='Chocolate
        Drip'
        />
      </div>
      <div className='gallery-body'>
        <h1>Gallery</h1>
        <PhotoGallery images={images} />
      </div>
    </div>
  );
};

export default Gallery;
