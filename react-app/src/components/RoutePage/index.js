import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import {oneRoute} from  '../../store/route'
import RouteDeleteModal from "../RouteDeleteModal";
import './RoutePage.css'

export default function RoutePage(){
    let dispatch = useDispatch();
    const {routeId} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    let {routes} = useSelector(state => state.routes); //why do currentRoutes: [] in route.js store & then currentRoute: routes, vs just desctructure routes here?
    let sessionUser = useSelector(state => state.session.user);
    const user_id = useSelector(state => state.session.user?.id);

    useEffect(() => {dispatch(oneRoute(routeId))}, [dispatch])

    return (<>{console.log(routes)}
            <div key={routes.id}  className="routePage">
                <h2 id="routeName">{routes.name}</h2>
                <p id="routeDescription">{routes.description}</p>

                <div className="CreateUpdateDeleteBtns">
                    {sessionUser?.id === routes.user_id &&
                    <RouteDeleteModal route={routes}/>}
                </div>
            </div></>
   );
}
