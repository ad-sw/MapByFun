import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory } from 'react-router-dom'
import {getAllRoutes} from  '../../store/route'
import "./Homepage.css"

export default function HomePage(){
    const dispatch = useDispatch()
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getAllRoutes());
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser])


    return (<> {isLoaded && (
                <div>
                <h1>My Home Page</h1>
                <NavLink to="/routes">Route Dashboard Placeholder</NavLink>
                </div>
                )}
            </>
            )
}
