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

  return (<>
      {isLoaded &&(
        <>
          <h1><center>All Users:</center></h1>
          <div className="friendDashboardContainer">{userComponents}</div>
        </>
      )}
    </>
  );
}

export default UsersList;
