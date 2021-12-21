import {useSelector, useDispatch} from 'react-redux';
import {getAllRoutes} from '../../store/route';
import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import RouteDeleteModal from "../RouteDeleteModal";

function RouteModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getAllRoutes());
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser]);

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
        <div>
        <NavLink to={`/routes/${route.id}/edit`} exact={true} className="RouteEditBtn">
            Edit Route
        </NavLink>
        <RouteDeleteModal routeId={route.id}/>
        </div></>
            )
   })

    return (
        <div className="products">
            {test}
        </div>
    );
}

export default RouteModal;
