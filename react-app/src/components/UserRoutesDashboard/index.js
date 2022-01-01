import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory, useParams } from 'react-router-dom'
import UserRouteReadModal from "../UserRoutesReadAll";
import '../../../src/index.css'

export default function RoutesDashboard(){
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
        })();
    }, [setIsLoaded]);

    return (<>
        {isLoaded && (
            <>
                <div className="routes-wrapper">
                <h3>MY ROUTES</h3>
                <hr></hr>
                    <button className="createRouteBtn" onClick={(e) => {
                        e.preventDefault();
                        history.push('/routes/new');
                        }}>Create a Route</button>
                <hr></hr>
                    <center><UserRouteReadModal userId={sessionUser?.id}/></center>
                </div>
            </>
        )}
    </>
    )
}
