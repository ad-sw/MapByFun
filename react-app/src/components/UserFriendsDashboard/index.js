import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getAllFriends} from  '../../store/friend'

function UserFriendsDashboard() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      (async () => {
          await dispatch(getAllFriends(sessionUser.id));
          setIsLoaded(true)
      })();
  }, [dispatch, sessionUser]);

  const friendsGot = useSelector(state => Object.values(state.friends))
  const userComponents = friendsGot?.map(friend => {
    return (<>
          <NavLink key={friend.id} to={`/users/${sessionUser.id}/friends/${friend.id}/routes`}>
            <div className="route-dash">
              <div className="route-dash-info" >
                  <div>Name: {friend.first_name}&nbsp;{friend.last_name}</div>
              </div>
            </div>
          </NavLink>
      </>
    )
  })

  return (<> {isLoaded && (
              <div>
                <h1>Friend List: </h1>
                <div>{userComponents}</div>
              </div>)}
          </>
  );
}

export default UserFriendsDashboard;
