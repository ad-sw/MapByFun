import React, { useEffect, useState } from "react";
import { Modal } from '../context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'
import {getOneRoute, getAllRoutes} from  '../../store/route'
import RouteDeleteModal from "../RouteDeleteModal";
import CommentCreateModal from '../CommentCreateModal';
import CommentDeleteModal from '../CommentDeleteModal';
import './SoloRoutePage.css';
import CommentEditModal from "../CommentEditModal";

export default function RoutePage(){
    let dispatch = useDispatch();
    const {routeId} = useParams();
    const history = useHistory()
    let {currentRoute: routes} = useSelector(state => state.routes);
    // const user_id = useSelector(state => state.session.user?.id);
    // console.log(useSelector(state => state.routes.currentRoute.comments), 'this is test');
    useEffect(() => {dispatch(getOneRoute(routeId))}, [dispatch])

    let currentRouteComments = useSelector(state => state?.routes?.currentRoute?.comments)
    let commentss = currentRouteComments?.map((comment) =>
    <>
        <div className="commentContent">
            {comment[0]}
        </div>
        <CommentDeleteModal comment_id={comment[1]} route_id={routeId}/>
        <CommentEditModal comment_id={comment[1]} route_id={routeId}/>
    </>
    )
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
                <CommentCreateModal routeId={routeId}/>
                {commentss}
            </div>
            </>
   );
}
