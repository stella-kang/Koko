import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, updateExp } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.session.user
});

const mDTP = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  updateExp: userId => dispatch(updateExp(userId))
});

const KokoFriendship = ({currentUser, fetchCurrentUser}) => {

  useEffect(() => {
      fetchCurrentUser();
    }, [fetchCurrentUser]
  )

  const xpToLevel = currentUser.friendshipLvl * 5
  const completed = (currentUser.friendshipExp / xpToLevel) * 100

  const titles = {
    1: "Acquaintances",
    2: "Friends",
    3: "Close Pals",
    4: "Best Buddies",
    5: "Best Friends Forever"
  }

  const quotes = {
    1: "Anything is possible when you have the right people to support you. Koko will be here to support you!",
    2: "Life was meant for good friends and great adventures. Koko is happy to be your friend!",
    3: `A good friend is like a four-leaf clover: hard to find and lucky to have. Koko feels lucky to be friends with ${currentUser.username}!`,
    4: "There's nothing like a really loyal, dependable, good friend. Nothing. Koko is happy that the two of you are such good friends.",
    5: `Truly great friends are hard to find, difficult to leave and impossible to forget. Koko will always be friends with ${currentUser.username}.`

  }

  const kokoCurrentExp = {
    width: `${completed}%`,
    backgroundColor: 'orange',
    textAlign: 'center',
    borderRadius: 'inherit',
    lineHeight: '24px',
    transition: 'width 1s'
  }

  return (
    <div className="koko-friendship-container">
      <div className="koko-exp-container">
        <div className="koko-heart-container">
          <img src="https://raw.githubusercontent.com/stella-kang/Koko/14439b203d82972a43ab6e4df684cb3a3e07ede9/frontend/src/assets/heart.svg" />
        </div>
        <div className="koko-current-exp-bar">
          <div className="koko-current-exp" style={kokoCurrentExp}>
            {currentUser.friendshipExp} / {xpToLevel}
          </div>
        </div>
      </div>
      <div className="koko-level">
        <h2>Level { currentUser.friendshipLvl }</h2>
        <span className="koko-friend-status">You and Koko are currently {titles[currentUser.friendshipLvl]}.</span>
        <span className="koko-quote">{quotes[currentUser.friendshipLvl]}</span>
      </div>
    </div>
  )
};

export default connect(mSTP, mDTP)(KokoFriendship);
