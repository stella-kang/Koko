import React from 'react';
import { Link } from 'react-router-dom';
import Koko from './Koko';
import KokoFriendship from './KokoFriendship';

const KokoCard = () => {
  return (
    <div className="koko-card-container">
      <div classname="koko-bg">
        <Koko />
      </div>
      <KokoFriendship />
      <div className="card-separator"></div>
      <Link to='/day'>See History</Link>
    </div>
  )
}

export default KokoCard;
