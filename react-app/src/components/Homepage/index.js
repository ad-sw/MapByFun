import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import {getAllRoutes} from  '../../store/route'
import {getAllFriends} from '../../store/friend'
import "./Homepage.css"

export default function HomePage(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            // await dispatch(getAllRoutes(sessionUser.id));
            // await dispatch(getAllFriends(sessionUser.id));
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser])

    return (<> {isLoaded && (
                <div>
                    <h1>My Home Page</h1>
                    <div><NavLink to={`/users/${sessionUser.id}/routes`}>Route Dashboard Placeholder</NavLink></div>
                    <div><NavLink to={`/users/${sessionUser.id}/friends`}>Friends Dashboard Placeholder</NavLink></div>
                    <div><NavLink to={`/users/${sessionUser.id}/people`} exact={true}>All Users (to friend) Dashboard Placeholder</NavLink></div>
                </div>
                )}
            </>
            )
}
