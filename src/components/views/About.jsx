import React from 'react';
import { Helmet } from 'react-helmet';

// import { blog } from '../../data/blog';

const About = () => {
  return (
    <div className='container my-2'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About - Sam's Sweet and Treats</title>
      </Helmet>
      <div className='drip'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/drip.svg`}
          alt='Chocolate
        Drip'
        />
      </div>
      <div className='row meet-sam-body'>
        <div className='col-md-4 text-center'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/about.jpg`}
            width='350'
            height='350'
            alt=''
            className='img-fluid rounded-circle'
          />
        </div>
        <div className='col-md-8'>
          <h1>Meet Sam</h1>
          <p className='bio'>
            Always intrigued by desserts and the details of a cake, I have had
            the dream of baking and designing cakes; a dream I have only share
            with a selected few. But, how can one go into a baking business not
            baking on a normal basis and have never touched fondant? Invest in
            classes!!! Taking Wilton classes at JoAnn Craft Store is where the
            fun began. My biggest test was baking my niece’s birthday cake in
            2016 (Monster High Cake). The cake tasted as good as it looked and
            at that moment, I knew this is what I was called to do. Even with
            working a full time job, I learned how to balance the two (banking
            and baking) and still get the job done. In November 2017, I took the
            Cottage Food Course in order to bake from home and received my
            certificate in December 2017. With the help and support of friends
            and family, I have committed myself to building my brand: A brand of
            bringing a smile and happiness to everyone who loves desserts. So,
            welcome to Sam’s Sweets &amp; Treats, where we bring you “A Taste of
            Happiness”.
          </p>
        </div>
        {/* <div className='row col-11 ml-1'>
          <h2>My Journey</h2>
          <p className='bio'>
            Baking is certainly my passion but with that comes some good days
            and well let's face it - EPIC FAILS. Follow me as I take you on my
            journey in the wonderful world of baking!
          </p>
          {blog.length > 0
            ? blog.map((item) => {
                return (
                  <div key={item.id} className='col-6 bio'>
                    <div
                      className='card bg-light mb-3'
                      style={{ maxWidth: '35rem' }}>
                      <div className='card-header'>{item.date}</div>
                      <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <p className='card-text text-truncate'>{item.body}</p>
                      </div>
                      <div className='blog-link'>
                        <button
                          className='btn btn-blueberry m-3 float-right'
                          to='/'
                          data-toggle='modal'
                          data-target={`#${item.id}Modal`}>
                          Read More
                        </button>
                      </div>
                    </div>

                    
                    <div
                      class='modal fade '
                      id={`${item.id}Modal`}
                      tabindex='-1'
                      aria-labelledby={`${item.id}ModalLabel`}
                      aria-hidden='true'>
                      <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                        <div class='modal-content'>
                          <div class='modal-header'>
                            <h5 class='modal-title' id={`${item.id}ModalLabel`}>
                              {item.title}
                            </h5>
                            <button
                              type='button'
                              class='close'
                              data-dismiss='modal'
                              aria-label='Close'>
                              <span aria-hidden='true'>&times;</span>
                            </button>
                          </div>
                          <div class='modal-body'>{item.body}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div> */}
      </div>
    </div>
  );
};

export default About;
