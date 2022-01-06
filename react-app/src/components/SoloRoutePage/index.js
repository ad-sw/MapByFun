import React, { useEffect, useState } from "react";
import { Modal } from '../Context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'
import {getOneRoute} from  '../../store/route'
import { getAllRouteComments } from "../../store/comment";
import CommentCreateModal from '../CommentCreateModal';
import CommentDeleteModal from '../CommentDeleteModal';
import './SoloRoutePage.css';
import CommentEditModal from "../CommentEditModal";
import MapContainer from "../Maps";
import '../../../src/index.css'

export default function RoutePage(){
    let dispatch = useDispatch();
    let {routeId} = useParams();
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    // const [showMenu, setShowMenu] = useState(false);
    const sessionUser = useSelector(state => state.session.user)
    const friendSession = useSelector(state => state.friends)
    const route = useSelector(state => state.routes[routeId])
    let currentRouteComments = useSelector(state => Object.values(state?.comments))

    useEffect(() => {
        (async () => {
            await dispatch(getOneRoute(routeId));
            await dispatch(getAllRouteComments(routeId));
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser, routeId])

    let commentss = currentRouteComments?.map((comment) =>
    <>
        <div className="editFormCommentsView">
        <div className="commentContentt">{comment?.content}</div>
            <div>
            {sessionUser?.id === route?.user_id && (
            <>
                <div id="editDeleteIcons">
                <CommentEditModal commentId={comment?.id} routeId={routeId} content={comment?.content}/>
                <CommentDeleteModal commentId={comment?.id} routeId={routeId}/>
                </div>
            </>
            )}
            {comment?.user_id === sessionUser.id && sessionUser?.id !== route?.user_id && (
            <>
            <div id="editDeleteIcons">
                <CommentEditModal commentId={comment?.id} routeId={routeId} content={comment?.content}/>
                <CommentDeleteModal commentId={comment?.id} routeId={routeId}/>
            </div>
            </>
            )}

            </div>
        </div>
    </>
    )

    const activities = ['Walk', 'Run', 'Hike', 'Sport / Other Activity',
    'Winter Sport / Activity', 'Bike Ride', 'Social', 'Volunteer', 'Food']

    let event = new Date(route?.created_at); //fri dec 31 2021
    let date = event.toLocaleDateString().slice(0,4) + event.toLocaleDateString().slice(6,8)

    // let date = JSON.stringify(event)
    // date = date.slice(1,11).split('-')
    // date.push(date.shift())
    // date = date.join(',').replace(/\,/g, '/')
    return (<>
            {isLoaded && (<>
                <div key={route?.id}  className="routePage">
                    <div className="map"><MapContainer className="map"/></div>
                        {/* <div className="routeInfoContainer"> */}
                        <div className="routeInfoDiv">
                        <div id='routeLabel'>Route Details</div>
                            <div id="routeTextt">
                                <div id="routeName">{route.name}</div>
                                Activity
                                <div id="routeActivity">{activities[route.activity_id - 1]}</div>
                                Description
                                <div id="routeDescription"><div className="tes">{route.description}</div></div>
                                <div id="dateProf">Created&nbsp;
                                    <div id="routeDate">{date}</div></div>
                                <div id="descProf">
                                {sessionUser.id === route?.user_id && (
                                <>
                                <button id="EditCreateDeleteBtns" onClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/routes/${route.id}/edit`);
                                    }}>
                                    Edit Route
                                </button>
                                </>
                                )}</div>
                            </div>
                            <div id="commentBtn">
                            {sessionUser.id === route?.user_id && (
                                <>
                            <CommentCreateModal routeId={routeId}/>
                            </>
                                )}
                            {route?.user_id in friendSession &&
                            (<CommentCreateModal routeId={routeId}/>)}
                            </div>
                            <div id='commentLabel'>Comments</div>
                            <div className="commentInfoDiv">
                                {commentss}
                            </div>
                        </div>
                </div>
                </>
                )}
            </>
   );
}
