import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FriendBtns from '../AddDeleteFriendBtns';
import {getAllFriends} from  '../../store/friend'
import '../../../src/index.css'

function UserFriendsDashboard() {
  const dispatch = useDispatch()
  const user_id = useSelector(state => state.session.user.id);
  const {userId} = useParams()

  useEffect(() => {
      (async () => {
          await dispatch(getAllFriends(userId));
      })();
  }, [dispatch, userId]);

  const friendsGot = useSelector(state => Object.values(state.friends))
  const userComponents = friendsGot?.map(friend => {
    return (
      <div className="friendCard">
              <div className="soMany">
                <NavLink key={friend?.id} to={`/users/${friend?.id}`} className="soMany">
                <div className="friendContent"></div>
                <div className="fullName">{friend?.first_name}&nbsp;{friend?.last_name}</div>
                </NavLink>
                <div className="friendBtn"><FriendBtns friend_id={Number(friend?.id)} user_id={user_id}/></div>
              </div>
      </div>
    )
  })

  return (<>
              {/* <div className="friendDashboardContainer"> */}
                <h1><center>Friend List: </center></h1>
                <div className="friendDashboardContainer">{userComponents}</div>
              {/* </div> */}
          </>
  );
}

export default UserFriendsDashboard;
