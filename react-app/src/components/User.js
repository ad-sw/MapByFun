import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FriendBtns from '../../src/components/AddDeleteFriendBtns';
import { useSelector } from "react-redux";
import UserFriendsDashboard from "../components/FriendRoutesDashboard";

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const user_id = useSelector(state => state.session.user.id);
  const [isLoaded, setIsLoaded] = useState(false)

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

  return (
        <>{isLoaded && (
            <div className="friendDashboardContainer">
              <h1>User Profile</h1>
              <div>{user.first_name}&nbsp;{user.last_name}</div>
              <div><i>Member Since</i> {user.created_at}</div>
              <FriendBtns friend_id={Number(userId)} user_id={user_id}/>
              <UserFriendsDashboard/>
            </div>
            )}
        </>
  );
}
export default User;
