import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

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
            <button>Add</button>
            <button>Unfriend</button>
        </>
  );
}
export default User;
