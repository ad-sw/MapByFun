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
      <span key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.first_name}&nbsp;{user.last_name}</NavLink><FriendBtns user_id={sessionUser.id} friend_id={user.id}/>
      </span>
    );
  }});

  return (
    <>{isLoaded &&(
      <div className="friendDashboardContainer">
        <h1>User List: </h1>
        <div>{userComponents}</div>
      </div>
      )}
    </>
  );
}

export default UsersList;
