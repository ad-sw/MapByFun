import React, { useEffect, useState } from "react";
import { Modal } from '../Context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'
import {getOneRoute} from  '../../store/route'
import { getAllRouteComments } from "../../store/comment";
import RouteDeleteModal from "../RouteDeleteModal";
import CommentCreateModal from '../CommentCreateModal';
import CommentDeleteModal from '../CommentDeleteModal';
import './SoloRoutePage.css';
import CommentEditModal from "../CommentEditModal";

export default function RoutePage(){
    let dispatch = useDispatch();
    const {routeId} = useParams();
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        (async () => {
            await dispatch(getOneRoute(routeId));
            await dispatch(getAllRouteComments(routeId));
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser])

    const route = useSelector(state => state.routes[routeId])

    let currentRouteComments = useSelector(state => Object.values(state?.comments))
    let commentss = currentRouteComments?.map((comment) =>
    <>
        <div className="commentContent">
            {comment?.content}
        </div>
        {sessionUser.id === route?.user_id && (
        <>
        <CommentDeleteModal commentId={comment?.id} routeId={routeId}/>
        <CommentEditModal commentId={comment?.id} routeId={routeId}/>
        </>)}
    </>
    )
    return (<>
            {isLoaded && (
                <div key={route?.id}  className="routePage">
                    <h2 id="routeName">{route.name}</h2>
                    <p id="routeActivity">{route.activity}</p>
                    <p id="routeDescription">{route.description}</p>
                    <p id="routeDate">{route.created_at}</p>
                    {sessionUser.id === route?.user_id && (
                    <>
                    <button className="editRouteBtn" onClick={(e) => {
                        e.preventDefault();
                        history.push(`/routes/${route.id}/edit`);
                        }}>
                        Edit Route
                    </button>
                    <RouteDeleteModal routeId={routeId}/>
                    <CommentCreateModal routeId={routeId}/>
                    </>)}
                    {commentss}
                </div>
                )}
            </>
   );
}
