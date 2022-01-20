import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNonFriends} from  '../../store/nonfriend';
import { getAllFriends } from '../../store/friend';
import FriendBtns from '../AddDeleteFriendBtns';
import '../../../src/index.css'
import NonfriendSearchForm from '../NonfriendSearchbar';

export default function UserNonfriendsDashboard() {
  const dispatch = useDispatch()
  const { userId }  = useParams();
  const user_id = useSelector(state => state.session.user?.id);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      (async () => {
          // await dispatch(getAllFriends(userId));
          await dispatch(getAllNonFriends(userId));
          setIsLoaded(true)
      })();
  }, [dispatch, userId]);

  const nonFriendsGot = useSelector(state => Object.values(state.nonFriends.searchedNonFriends || state.nonFriends))

  const userComponents = nonFriendsGot?.map(user => {
    if (user.id !== user_id) {
      return (<> {isLoaded && (
        <div className="friendCard">
          <div className="soMany">
            <NavLink className="soMany" key={user?.id} to={`/users/${user?.id}`}>
              <div className="friendContent"></div>
              <div className="fullName">{user?.first_name}&nbsp;{user?.last_name}</div>
            </NavLink>
              <div className="friendBtn"><FriendBtns user_id={userId} friend_id={user?.id} /></div>
          </div>
        </div>
        )}
      </>)
      }
    }
  )

  if (!isLoaded) {
    return (
      <div id="loadingGif">
            <img src={"https://cdn.dribbble.com/users/1976516/screenshots/6860281/dribb.gif"} height="400px" width="600px" alt="loading"/>
            <div className="loadText">Loading</div>
        </div>
    );
  }

  return (<>
      {isLoaded && (
      <div className="topoBackground">
          <div className="friendLinks">
            <NavLink exact to={`/users/${user_id}/find`} activeClassName="link-active" className="links">My Friends</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink exact to={`/users/${user_id}/discover`} activeClassName="link-active" className="links">Find Friends</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink exact to={`/users/${user_id}/search`} activeClassName="link-active" className="links">All Users</NavLink>
          </div>

          <div className="titleTry">
            <h3 id="testAlign3">Search Users by First or Last Name:</h3>
              <NonfriendSearchForm />
            <hr className="testAlign2"></hr>
          </div>

          <div className="titleTry">
          <h3 className="testAlign">Users</h3>
          </div>

          <div className="friendDashboardContainer">{userComponents}</div>
      </div>
      )}
  </>
  );
}
