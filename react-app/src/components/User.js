import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import FriendBtns from '../../src/components/AddDeleteFriendBtns';
import { useSelector } from "react-redux";
import UserFriendsDashboard from "../components/FriendRoutesDashboard";

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const user_id = useSelector(state => state.session.user.id);
  const [isLoaded, setIsLoaded] = useState(false)
  const profileUser = useSelector(state => state.friends[userId])

  useEffect(() => {
  if (!userId) {
    return;
  }
  (async () => {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    setUser(user);
    setIsLoaded(true)
  })();
  }, [userId]);

  if (!user) {
    return null;
  }
  //way 1
  // let event = new Date(user.created_at);
  // event.getTimezoneOffset()
  // let date = JSON.stringify(event)
  // date = date.slice(1,11).split('-')/*.reverse().join("/")*/
  // date.push(date.shift())
  // date = date.join(',').replace(/\,/g, '/')

  let event = new Date(user?.created_at); //fri dec 31 2021
  let date = event.toLocaleDateString().slice(0,4) + event.toLocaleDateString().slice(6,8)

  return (
        <>{isLoaded && (
          <>
          <div className="divCont">
            <div className="friendLinks">
              <NavLink to={`/users/${sessionUser.id}/friends`} activeClassName="link-active" className="links">My Friends</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink to={`/users/${sessionUser.id}/people`} activeClassName="link-active" className="links">Find Friends</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink to={`/users`} activeClassName="link-active" className="links">All Users</NavLink>
            </div>
            <div className="routes-wrapper">
              <div className="userProfileInfo">
                <div className="textInfoUser">
                  <div><b>{user.first_name}&nbsp;{user.last_name}</b></div>
                    <div><i>Member Since</i>&nbsp;{date}</div>
                    <FriendBtns friend_id={Number(userId)} user_id={user_id}/>
                </div>
                <div className="userPic"></div>
              </div>
              <div id="te">
                <thead>
                <tr>
                <th className='ttt'>Route Name</th>
                <th className='ttt'>Created</th>
                <th className='ttt'>Activity</th>
                <th className='ttt'>Privacy</th>
                <th className='ttt'>Distance</th>
                <th className='ttt'>Options</th>
                </tr>
              </thead>
            </div>
              <UserFriendsDashboard/>
            </div>
            </div>
            </>
          )}
        </>
  );
}
export default User;
