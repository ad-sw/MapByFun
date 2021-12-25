import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import {getFriendRoutes} from  '../../store/friend';
import FriendRouteReadModal from "../FriendRoutesReadAll";

export default function UserFriendsDashboard() {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch()
    const history = useHistory();
    const { userId }  = useParams();
    let friendId = userId
    const user_Id = useSelector(state => state.session.user.id)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
        })();
    }, [dispatch, user_Id, friendId]);

    return (<>
        {isLoaded && (
            <div>
                <h1 className='page-header'>User Dashboard Routes</h1>
                <FriendRouteReadModal userId={user_Id} friendId={friendId}/>
                <div className="routes-wrapper">
                </div>
            </div>
        )}
    </>
    )
}
