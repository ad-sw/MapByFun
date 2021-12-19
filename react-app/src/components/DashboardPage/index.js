import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory } from 'react-router-dom'
import {getAllRoutes} from  '../../store/route'
import RouteEditPage from "../RouteEditPage";
import RouteDeleteModal from "../RouteDeleteModal";
import "./DashboardPage.css"

export default function DashboardPage(){
    const dispatch = useDispatch()
    const history = useHistory();

    let routes = useSelector(state => state.routes.routes)
    const dashInfo = routes?.map((route) =>
    <>
    <NavLink key={route?.id} to={`/routes/${route.id}`}>
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
      <div className="navbtn">
        Edit Route
      </div>
    </NavLink>
    <RouteDeleteModal routeId={route.id}/>
    </div>
    </>
    )

    useEffect(()=>{
        dispatch(getAllRoutes())},
        [dispatch]
    )

    return <div>
    <div className='page-header'>Dashboard Routes</div>
    <div className="routes-wrapper">
        {dashInfo}
        <button className="createRouteBtn" onClick={(e) => {
        e.preventDefault();
        history.push('/routes/new');
        }}>
          Create Route
      </button>
    </div>
    </div>
}
