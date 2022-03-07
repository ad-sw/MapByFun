import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import FriendBtns from '../../src/components/AddDeleteFriendBtns';
import { useSelector, useDispatch } from "react-redux";
import UserFriendsDashboard from "../components/FriendRoutesDashboard";
import { getAllFriends } from '../store/friend';
import {getAllRoutes} from '../store/route'
import FriendRouteSearchForm from '../components/FriendRouteSearchbar';

function User() {
  const dispatch = useDispatch()
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  // const sessionUser = useSelector(state => state.session.user)
  const user_id = useSelector(state => state.session.user?.id);
  const [isLoaded, setIsLoaded] = useState(false)
  const profileUser = useSelector(state => state.friends[userId])
  const sessionUser = useSelector(state => state.session.user)
  const friendSession = useSelector(state => state.friends)

  useEffect(() => {
    (async () => {
        await dispatch(getAllFriends(sessionUser?.id));
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();
        setUser(user);
        setIsLoaded(true)
    })();
  }, [dispatch, sessionUser?.id, userId]);

  if (!user) {
    return null;
  }

  // if (!isLoaded) {
  //   return (
  //     <div id="loadingGif">
  //       <img src={"https://cdn.dribbble.com/users/1976516/screenshots/6860281/dribb.gif"} height="400px" width="600px" alt="loading"/>
  //       <div className="loadText">Loading</div>
  //      </div>
  //   );
  // }

  if (!isLoaded) {
    return (
    <div id="t">
        <video id="mediaContent" preload="none" muted="" loop="" playsinline="" autoplay="" src="https://cdn.dribbble.com/users/4187655/screenshots/8421375/media/eaa37c1d3e989e818ab5cd3748a09867.mp4">
        </video>
        <div className="loadText">Loading</div>
    </div>
    );
  }

  //way 1
  // let event = new Date(user.created_at);
  // event.getTimezoneOffset()
  // let date = JSON.stringify(event)
  // date = date.slice(1,11).split('-')/*.reverse().join("/")*/
  // date.push(date.shift())
  // date = date.join(',').replace(/\,/g, '/')

  let event = new Date(user?.created_at); //fri dec 31 2021
  let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)

  return (
        <>{isLoaded && (
          <>
          <div className="divCont">
            <div className="friendLinks2">
              <NavLink exact to={`/users/${user_id}/search`} activeClassName="link-active" className="links">My Friends</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink exact to={`/users/${user_id}/find`} activeClassName="link-active" className="links">Find Friends</NavLink>&nbsp;&nbsp;&nbsp;
              <NavLink exact to={`/users/${user_id}/discover`} activeClassName="link-active" className="links">All Users</NavLink>
            </div>
            <div className="routes-wrapper">
              <div className="userProfileInfo">
                <div className="textInfoUser">
                  <div><b>{user.first_name}&nbsp;{user.last_name}</b></div>
                    <div><i>Member Since</i>&nbsp;{date}</div>
                    <FriendBtns friend_id={Number(userId)} user_id={user_id}/>
                </div>
                <div><img className="userPic" src={user.profile_picture}/></div>
              </div>

              {userId in friendSession && (
              <div className="titleTry3">
                <hr className="testAlign4"></hr>
                  <FriendRouteSearchForm/>
                <hr className="testAlign4"></hr>
              </div>
              )}



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
