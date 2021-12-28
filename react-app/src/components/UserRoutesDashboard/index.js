import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory, useParams } from 'react-router-dom'
import {getAllRoutes} from  '../../store/route'
import UserRouteReadModal from "../UserRoutesReadAll";
import '../../../src/index.css'

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
            <div className="friendDashboardContainer">
                <h1 className='page-header'>My Routes</h1>
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
