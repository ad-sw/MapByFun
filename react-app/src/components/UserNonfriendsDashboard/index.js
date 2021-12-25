import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNonFriends} from  '../../store/nonfriend';
import FriendBtns from '../AddDeleteFriendBtns';

export default function UserNonfriendsDashboard() {
  const dispatch = useDispatch()
  const { userId }  = useParams();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      (async () => {
          await dispatch(getAllNonFriends(userId));
          // await dispatch(getAllFriends(userId));
          setIsLoaded(true)
      })();
  }, [dispatch, userId]);

  const sessionUser = useSelector(state => state.session.user)
  let nonFriendList = useSelector(state => state.nonFriends)
  let nonFriendsList = Object.values(nonFriendList)

  const userComponents = nonFriendsList?.map(user => {
    if (user.id !== sessionUser.id) {
    return (<> {isLoaded && (
      <NavLink key={user?.id} to={`/users/${user?.id}`}>
        <div className="route-dash">
          <div className="route-dash-info" >
              <div>Name: {user?.first_name}&nbsp;{user?.last_name}</div>
              <FriendBtns friend_id={user?.id} user_id={+userId}/>
          </div>
        </div>
      </NavLink>)}
  </>
)
}})
return (<>{isLoaded && (
    <div>
        <h1>Nonfriend List: </h1>
        <div>{userComponents}</div>
    </div>
    )}
</>
);
}
