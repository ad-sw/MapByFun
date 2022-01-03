import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNonFriends} from  '../../store/nonfriend';
import FriendBtns from '../AddDeleteFriendBtns';
import '../../../src/index.css'

export default function UserNonfriendsDashboard() {
  const dispatch = useDispatch()
  const { userId }  = useParams();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      (async () => {
          await dispatch(getAllNonFriends(userId));
          setIsLoaded(true)
      })();
  }, [dispatch, userId, setIsLoaded]);

  const sessionUser = useSelector(state => state.session.user)
  let nonFriendList = useSelector(state => state.nonFriends)
  let nonFriendsList = Object.values(nonFriendList)

  const userComponents = nonFriendsList?.map(user => {
    if (user.id !== sessionUser.id) {
    return (<> {isLoaded && (
      <div className="friendCard">
        <div className="soMany">
          <NavLink className="soMany" key={user.id} to={`/users/${user.id}`}>
            <div className="friendContent"></div>
            <div className="fullName">{user.first_name}&nbsp;{user.last_name}</div>
          </NavLink>
            <div className="friendBtn"><FriendBtns friend_id={user.id} user_id={+userId}/></div>
        </div>
      </div>
      )}
    </>
  )
  }})

  if (!isLoaded) {
    return (
      <div id="loadingGif">
            <img src={"https://cdn.dribbble.com/users/1976516/screenshots/6860281/dribb.gif"} height="400px" width="600px" alt="loading"/>
            <div className="loadText">Loading</div>
        </div>
    );
  }

  return (<>
      <>
      <div className="topoBackground">
          <div className="friendLinks">
            <NavLink to={`/users/${userId}/friends`} activeClassName="link-active" className="links">My Friends</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={`/users/${userId}/people`} activeClassName="link-active" className="links">Find Friends</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={`/users`}>All Users</NavLink>
          </div>
          <div className="titleTry">
            <h4 className="testAlign">Search MapByFun by Name:</h4>
            <hr className="testAlign2"></hr>
          </div>
          <div className="friendDashboardContainer">{userComponents}</div>
        </div>
      </>

  </>
  );
  }
