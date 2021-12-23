import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddFriend from '../../src/components/AddFriend';
import RemoveFriend from '../../src/components/DeleteFriend';
import { useSelector } from "react-redux";

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const user_id = useSelector(state => state.session.user.id);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
        <>
            <div>{user.first_name}&nbsp;{user.last_name}</div>
            <div><i>Member Since</i> {user.created_at}</div>
            <AddFriend friend_id={Number(userId)} user_id={user_id}/>
            <RemoveFriend friend_id={Number(userId)} user_id={user_id}/>
        </>
  );
}
export default User;
