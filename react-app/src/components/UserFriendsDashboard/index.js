import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import RemoveFriend from '../DeleteFriend';
import {getAllFriends} from  '../../store/friend'
import {getAllUsers} from '../../store/user'

function UserFriendsDashboard() {
  const dispatch = useDispatch()
  const user_id = useSelector(state => state.session.user.id);
  const [isLoaded, setIsLoaded] = useState(false)
  const {userId} = useParams()

  useEffect(() => {
      (async () => {
          await dispatch(getAllFriends(userId));
          // await dispatch(getAllUsers());
          setIsLoaded(true)
      })();
  }, [dispatch, userId]);

  // console.log(useSelector(state => Object.values(state.friends)), 'useSelector on state')
  const friendsGot = useSelector(state => Object.values(state.friends))
  // console.log(friendsGot,'this is friends got')
  const userComponents = friendsGot?.map(friend => {
    return (<>
          {/* {console.log(friend, 'this is friend')} */}
          <NavLink key={friend?.id} to={`/users/${userId}/friends/${friend?.id}/routes`}>
            <div className="route-dash">
              <div className="route-dash-info" >
                  <div>Name: {friend?.first_name}&nbsp;{friend?.last_name}</div>
              </div>
            </div>

          </NavLink>
          <RemoveFriend friend_id={Number(friend?.id)} user_id={user_id}/>
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
