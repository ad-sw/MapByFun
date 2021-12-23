import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory, useParams } from 'react-router-dom'
import {getAllRoutes} from  '../../store/route'
import "./RoutesDashboard.css"
import UserRouteReadModal from "../UserRoutesReadAll";

export default function RoutesDashboard(){
    const dispatch = useDispatch()
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser]);

    return (<>
        {isLoaded && (
            <div>
                <div className='page-header'>Dashboard Routes</div>
                <UserRouteReadModal userId={sessionUser?.id}/>
                <div className="routes-wrapper">
                <button className="createRouteBtn" onClick={(e) => {
                e.preventDefault();
                history.push('/routes/new');
                }}>
                Create Route
                </button>
                </div>
            </div>
        )}
    </>
    )
}
