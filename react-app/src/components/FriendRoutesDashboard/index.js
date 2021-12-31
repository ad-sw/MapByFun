import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FriendRouteReadModal from "../FriendRoutesReadAll";
import './FriendRoutesDashboard.css';

export default function UserFriendsDashboard() {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch()
    const history = useHistory();
    const { userId }  = useParams();
    let friendId = userId
    const user_Id = useSelector(state => state.session.user.id)
    const [isLoaded, setIsLoaded] = useState(false)
    const profileUser = useSelector(state => state.friends[userId])
    console.log(profileUser, 'test')

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
        })();
    }, [dispatch, user_Id, friendId]);

    return (<>
        {isLoaded && (
            <div className="outes-wrapper">
                <h3>User Dashboard Routes</h3>
                <FriendRouteReadModal userId={user_Id} friendId={friendId}/>
                {/* <div className="routes-wrapper"> */}
                {/* </div> */}
            </div>
        )}
    </>
    )
}
