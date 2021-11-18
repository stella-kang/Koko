import React from 'react';
import { withRouter } from 'react-router-dom';

const Koko = ({ location }) => {
  return (
    <div
      className={`koko-container ${
        location.pathname.includes('home') ? null : 'scaled'
      }`}
    >
      <div className='koko-cat'>
        <div className='ear'></div>
        <div className='eye'></div>
        <div className='mouth'></div>
        <div className='nose'></div>
        <div className='tail'>
          <div className='tail-segment'></div>
        </div>
        <div className='body'></div>
      </div>
    </div>
  );
};

export default withRouter(Koko);
