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

const KokoFriendship = ({updateExp, currentUser, fetchCurrentUser}) => {

    useEffect(() => {
        fetchCurrentUser();
      }, [fetchCurrentUser]
    )

    return (
      <div>
      <div>{currentUser.friendshipLvl}</div>
      <div>{currentUser.friendshipExp}</div>
    </div>
  )
};

export default connect(mSTP, mDTP)(KokoFriendship);
