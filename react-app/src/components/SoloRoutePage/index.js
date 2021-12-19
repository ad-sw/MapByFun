import React, { useEffect, useState } from "react";
import { Modal } from '../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'
import {oneRoute} from  '../../store/route'
import RouteDeleteModal from "../RouteDeleteModal";
import './SoloRoutePage.css'

export default function RoutePage(){
    let dispatch = useDispatch();
    const {routeId} = useParams();
    const history = useHistory()
    let {currentRoute: routes} = useSelector(state => state.routes);
    const user_id = useSelector(state => state.session.user?.id);

    useEffect(() => {dispatch(oneRoute(routeId))}, [dispatch])

    return (<>
            <div key={routes.id}  className="routePage">
                <h2 id="routeName">{routes.name}</h2>
                <p id="routeActivity">{routes.activity}</p>
                <p id="routeDescription">{routes.description}</p>
                <p id="routeDate">{routes.created_at}</p>

                <button className="editRouteBtn" onClick={(e) => {
                    e.preventDefault();
                    history.push(`/routes/${routes.id}/edit`);
                    }}>
                    Edit Route
                </button>
                <RouteDeleteModal routeId={routeId}/>
            </div>
            </>
   );
}
