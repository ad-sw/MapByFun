import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getAllFriends, getFriendRoutes} from  '../../store/friend'

function UserFriendsDashboard() {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch()
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)
  console.log(sessionUser.friends, 'this is session friends')
  console.log(sessionUser.friends[2], 'this is session user friends id')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      (async () => {
          await dispatch(getAllFriends(sessionUser.id));
          setIsLoaded(true)
      })();
  }, [dispatch, sessionUser]);

  // const userComponents = users.map((user) => {
  //   return (
  //     <li key={user.id}>
  //       <NavLink to={`/users/${user.id}/friends`}>{user.first_name} {user.last_name}</NavLink>
  //     </li>
  //   );
  // });
  const friendsGot = useSelector(state => Object.values(state.friends))
  console.log(friendsGot, 'friends of user')
  const userComponents = friendsGot?.map(friend => {
    return (<>
          <NavLink key={friend.id} to={`/users/${sessionUser.id}/friends/${friend.id}/routes`}>
          <div className="route-dash">
            <div className="route-dash-info" >
                <div>Name: {friend.first_name}&nbsp;{friend.last_name}</div>
                {/* <div>Routes: {friend.routes}</div> */}
            </div>
          </div>
          </NavLink>
          <div>
          {/* <NavLink to={`/routes/${route.id}/edit`} exact={true} className="RouteEditBtn">
          Edit Route
          </NavLink> */}
          </div></>
    )
  })

  return (
    <>
      <h1>Friend List: </h1>
      <div>{userComponents}</div>
    </>
  );
}

export default UserFriendsDashboard;
