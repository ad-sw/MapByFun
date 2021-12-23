import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getFriendRoutes} from  '../../store/friend';
import FriendRouteReadModal from "../FriendRoutesReadAll";

export default function UserFriendsDashboard() {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch()
    const history = useHistory();
    const { userId, friendId }  = useParams();
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getFriendRoutes(userId, friendId));
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser, userId, friendId]);

    return (<>
        {isLoaded && (
            <div>
                <div className='page-header'>Dashboard Routes</div>
                <FriendRouteReadModal userId={userId} friendId={friendId}/>
                <div className="routes-wrapper">
                </div>
            </div>
        )}
    </>
    )
}
