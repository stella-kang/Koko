import React from 'react';
import Koko from './Koko';
import KokoFriendship from './KokoFriendship';

const KokoCard = () => {
  return (
    <div className="koko-card-container">
      <div classname="koko-bg">
        <Koko />
      </div>
      <KokoFriendship />
    </div>
  )
}

export default KokoCard;
