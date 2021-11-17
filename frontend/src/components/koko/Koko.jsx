import React from 'react';
import KokoFriendship from './KokoFriendship';

const Koko = (props) => {
  return <div className="koko-container">
    <div className="koko-cat">
      <div className="ear"></div>
      <div className="eye"></div>
      <div className="mouth"></div>
      <div className="nose"></div>
      <div className="tail">
        <div className="tail-segment"></div>
      </div>
      <div className="body"></div>
    </div>
    <KokoFriendship />
  </div>
}

export default Koko;
