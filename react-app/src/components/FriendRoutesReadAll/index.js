import {useSelector, useDispatch} from 'react-redux';
import {getFriendRoutes} from '../../store/friend';
import {useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';

export default function FriendRouteReadModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false)
    const { userId, friendId }  = useParams();

    useEffect(() => {
        (async () => {
            await dispatch(getFriendRoutes(userId, friendId));
            setIsLoaded(true)
        })();
    }, [dispatch, userId, friendId]);

    console.log(useSelector(state => state), 'dashinfo');
    const dashRoutes = useSelector(state => Object.values(state.friends))

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

    return (<> {isLoaded && (
                <div className="routes">
                    {test}
                </div>)}
            </>
    );
}
