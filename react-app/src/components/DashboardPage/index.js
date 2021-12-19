import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink, useHistory } from 'react-router-dom'
import {getAllRoutes} from  '../../store/route'
import "./DashboardPage.css"

export default function DashboardPage(){
    const dispatch = useDispatch()
    const history = useHistory();

    let routes = useSelector(state => state.routes.routes)
    const dashInfo = routes?.map((route, idx) =>
    <NavLink key={route?.id} to={`/routes/${route.id}`}>
        <div className="route-dash">
            <div className="route-dash-info" >
                <div className="name">{route.name}</div>
                <div>Activity: {route.activity}</div>
                <div>Description: {route.description}</div>
                <div>Created: {route.created_at}</div>
            </div>
            <div>
            </div>
        </div>
    </NavLink>
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
        // dispatch(deleteProduct(product.id));
        history.push('/routes/new');
        }}>
          Create Product
      </button>
    </div>
    </div>
}
