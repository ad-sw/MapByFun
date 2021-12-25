import {useSelector, useDispatch} from 'react-redux';
import {getFriendRoutes} from '../../store/route';
import {useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function FriendRouteReadModal({userId, friendId}) {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(getFriendRoutes(userId, friendId));
            // setIsLoaded(true)
        })();
    }, [dispatch, userId, friendId]);

    const dashRoutes = useSelector(state => Object.values(state.routes))

    const test = dashRoutes?.map(route => {
        return (<>
                <NavLink key={route.id} to={`/routes/${route.id}`}>
                    <div className="route-dash">
                        <div className="route-dash-info" >
                            <div className="name">{route.name}</div>
                            <div>Activity: {route.activity}</div>
                            <div>Description: {route.description}</div>
                            <div>Created: {route.created_at}</div>
                        </div>
                    </div>
                </NavLink>
                </>
                )
            })

    return (<>
                <div className="routes">
                    {test}
                </div>
            </>
    );
}
