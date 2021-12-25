import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

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
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.first_name}&nbsp;{user.last_name}</NavLink>
      </li>
    );
  }});

  return (
    <>{isLoaded &&(
      <div>
        <h1>User List: </h1>
        <ul>{userComponents}</ul>
      </div>
      )}
    </>
  );
}

export default UsersList;
