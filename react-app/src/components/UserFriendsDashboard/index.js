import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FriendBtns from '../AddDeleteFriendBtns';
import {getAllFriends} from  '../../store/friend'
import '../../../src/index.css'

function UserFriendsDashboard() {
  const dispatch = useDispatch()
  const user_id = useSelector(state => state.session.user.id);
  const [isLoaded, setIsLoaded] = useState(false)
  const {userId} = useParams()

  useEffect(() => {
      (async () => {
          await dispatch(getAllFriends(userId));
          setIsLoaded(true)
      })();
  }, [dispatch, userId]);

  const friendsGot = useSelector(state => Object.values(state.friends))
  const userComponents = friendsGot?.map(friend => {
    return (
      <div className="friendCard">
        <div className="soMany">
          <NavLink className="soMany" key={friend?.id} to={`/users/${friend?.id}`}>
            <div className="friendContent"></div>
            <div className="fullName">{friend?.first_name}&nbsp;{friend?.last_name}</div>
          </NavLink>
            <div className="friendBtn"><FriendBtns friend_id={Number(friend?.id)} user_id={user_id}/></div>
        </div>
      </div>
    )
  })

  return (<>{isLoaded && (
          <div className="topoBackground">
            <div className="friendLinks">
              <NavLink exact to={`/users/${user_id}/friends`} activeClassName="link-active" className="links">My Friends</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink  to={`/users/${user_id}/people`} activeClassName="link-active" className="links">Find Friends</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink exact to={`/users`} activeClassName="link-active3" className="links">All Users</NavLink>
            </div>
            <div className="titleTry">
              <h3 className="testAlign">Friends</h3>
              <hr className="testAlign2"></hr>
            </div>
            <div className="friendDashboardContainer">{userComponents}</div>
          </div>
            )}
          </>
  );
}

export default UserFriendsDashboard;
