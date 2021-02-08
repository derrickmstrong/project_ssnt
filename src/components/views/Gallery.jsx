import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import PhotoGallery from 'react-grid-gallery';

import { images } from '../../data/images';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);
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
      <div className='row gallery-body'>
        <div className='col-md-12'>
          <h1>Gallery</h1>
          <PhotoGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
