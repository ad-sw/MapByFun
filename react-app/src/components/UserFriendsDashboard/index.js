import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FriendBtns from '../AddDeleteFriendBtns';
import {getAllFriends} from  '../../store/friend'

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
    return (<>
          <NavLink key={friend?.id} to={`/users/${friend?.id}`}>
            <div className="route-dash">
              <div className="route-dash-info" >
                  <div>Name: {friend?.first_name}&nbsp;{friend?.last_name}</div>
              </div>
            </div>

          </NavLink>
          <FriendBtns friend_id={Number(friend?.id)} user_id={user_id}/>
      </>
    )
  })

  return (<>
              <div>
                <h1>Friend List: </h1>
                <div>{userComponents}</div>
              </div>
          </>
  );
}

export default UserFriendsDashboard;
