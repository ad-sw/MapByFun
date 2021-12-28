import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory, useParams } from 'react-router-dom'
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
            <>
                <h1><center>My Routes</center></h1>
                <div className="routes-wrapper">
                    <button className="createRouteBtn" onClick={(e) => {
                        e.preventDefault();
                        history.push('/routes/new');
                        }}>Create Route</button>
                    <center><UserRouteReadModal userId={sessionUser?.id}/></center>
                </div>
            </>
        )}
    </>
    )
}
