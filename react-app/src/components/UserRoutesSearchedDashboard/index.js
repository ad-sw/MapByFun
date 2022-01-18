import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory, useParams } from 'react-router-dom'
import UserRouteReadModal from "../UserRoutesReadAll";

import '../../../src/index.css'

export default function RoutesDashboard(){
    const history = useHistory();
    const [term, setTerm] = useState('');
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)
    // const dispatch = useDispatch();

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

                <hr id="testHr"></hr>
                <table className='routes'>
                <thead>
                    <tr>
                    <th className='tt'>Route Name</th>
                    <th className='tt'>Created</th>
                    <th className='tt'>Activity</th>
                    <th className='tt'>Privacy</th>
                    <th className='tt'>Distance</th>
                    <th className='tt'>Options</th>
                    </tr>
                </thead>
                </table>
                    <center><UserRouteReadModal userId={sessionUser?.id}/></center>
                </div>
            </>
        )}
    </>
    )
}
