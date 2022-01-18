import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory, useParams } from 'react-router-dom'
import UserRouteReadModal from "../UserRoutesReadAll";
import RouteSearchForm from '../RouteSearchbar';
import {getAllRoutes, searchAllRoutes} from '../../store/route';
import '../../../src/index.css'

export default function RoutesDashboard(){
    const history = useHistory();
    const [term, setTerm] = useState('');
    const userId = useSelector(state => state.session.user?.id)
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
            await dispatch(getAllRoutes(userId))
            if (term.length > 0) {
                await dispatch(searchAllRoutes(userId, term));
                history.push(`/users/${userId}/search/${term}`);
            }
        })();
    }, [setIsLoaded, dispatch, userId, term, history]);

    return (<>
        {isLoaded && (
            <>
                <div className="routes-wrapper">
                <h3>MY ROUTES</h3>
                <hr></hr>

                <RouteSearchForm />
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
                    <center><UserRouteReadModal userId={userId}/></center>
                </div>
            </>
        )}
    </>
    )
}
