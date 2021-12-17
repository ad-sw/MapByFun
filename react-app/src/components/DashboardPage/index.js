import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import {allRoutes} from  '../../store/route'
import "./DashboardPage.css"


export default function DashboardPage(){
    const dispatch = useDispatch()
    let routes = useSelector(state => state.routes)
    console.log(routes, 'test')
    console.log(useSelector(state => state.session.user.routes), 'hiiii')
    // console.log(useSelector(state => state.routes), 'testing')
    console.log(routes, "test")
    // console.log(Object.entries(routes), 'test')
    // const dashInfo = Object.values(routes).map((route, idx) =>
    // <NavLink key={idx} to={`/routes/${route.id}`}>
    //     <div className="route-dash">
    //         <div className="route-dash-info" >
    //             <div className="name">{route.name}</div>
    //             <div>Description: ${route.description}</div>
    //             {/* <div>Created: ${route.created_at}</div> */}
    //             {/* <div>Activity: ${route.activity}</div> */}
    //             <div>By {route.user}</div>
    //         </div>
    //         <div>
    //         </div>
    //     </div>
    // </NavLink>
    // ).reverse()

    useEffect(()=>{
        dispatch(allRoutes())},
        [dispatch]
    )

    return <div>
    <div className='page-header'>Dashboard Routes</div>
    <div className="routes-wrapper">
        {/* {dashInfo} */}
    </div>
    </div>
}
