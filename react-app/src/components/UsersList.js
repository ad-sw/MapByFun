import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import FriendBtns from '../components/AddDeleteFriendBtns';
import '../../src/index.css'

function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
      setIsLoaded(true)
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    if (user.id !== sessionUser.id) {
    return (
      <div className="friendCard">
        <div className="soMany">
          <NavLink className="soMany" to={`/users/${user.id}`}>
            <div className="friendContent"></div>
            <div className="fullName">{user.first_name}&nbsp;{user.last_name}</div>
          </NavLink>
            <div className="friendBtn"><FriendBtns user_id={sessionUser.id} friend_id={user.id}/></div>
        </div>
      </div>
    );
  }});

  if (!isLoaded) {
    return (
      <div id="loadingGif">
            <img src={"https://cdn.dribbble.com/users/1976516/screenshots/6860281/dribb.gif"} height="400px" width="600px" alt="loading"/>
            <div className="loadText">Loading</div>
        </div>
    );
  }

  return (<>
      {isLoaded &&(
        <>
        <div className="topoBackground">
          <div className="friendLinks">
            <NavLink to={`/users/${sessionUser.id}/friends`} activeClassName="link-active" className="links">My Friends</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={`/users/${sessionUser.id}/people`} activeClassName="link-active" className="links">Find Friends</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to={`/users`} activeClassName="link-active" className="links">All Users</NavLink>
          </div>
          <div className="titleTry">
          <h3 className="testAlign">All Users</h3>
          <hr className="testAlign2"></hr>
          </div>
          <div className="friendDashboardContainer">{userComponents}</div>
        </div>
        </>
      )}
    </>
  );
}

export default UsersList;
