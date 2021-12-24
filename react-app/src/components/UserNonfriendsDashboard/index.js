import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNonFriends} from  '../../store/nonfriend';
import UserNonfriendsList from '../test/UserNonFriendsList';

export default function UserNonfriendsDashboard() {
  const dispatch = useDispatch()
  const { userId }  = useParams();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
      (async () => {
        await dispatch(getAllNonFriends(userId));
          setIsLoaded(true);
      })();
  }, [dispatch, userId]);

  return (<> {isLoaded && (
              <div>
                <h1>User List: </h1>
                <div><UserNonfriendsList user_id={+userId}/></div>
              </div>
              )}
          </>
  );
}
