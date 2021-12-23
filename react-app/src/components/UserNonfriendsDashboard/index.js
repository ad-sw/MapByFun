import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNonFriends } from  '../../store/friend'

function UserNonfriendsDashboard() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      (async () => {
          await dispatch(getAllNonFriends(sessionUser.id));
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
                <h1>User List: </h1>
                <div>{userComponents}</div>
              </div>)}
          </>
  );
}

export default UserNonfriendsDashboard;
