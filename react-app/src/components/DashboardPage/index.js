import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory } from 'react-router-dom'
import {getAllRoutes} from  '../../store/route'
// import RouteEditPage from "../RouteEditPage";
import "./DashboardPage.css"
import RouteModal from "../RouteReadAll";
export default function DashboardPage(){
    const dispatch = useDispatch()
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getAllRoutes());
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser]);


    return (<>
        {isLoaded && (
            <div>
                <div className='page-header'>Dashboard Routes</div>
                <RouteModal />
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
