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

    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    //   };
    //   useEffect(() => {
    //     if (!showMenu) return;
    //     const closeMenu = () => {
    //       setShowMenu(false);
    //     };
    //     document.addEventListener('click', closeMenu);
    //     return () => document.removeEventListener("click", closeMenu);
    //   }, [showMenu]);
    //   <i onClick={openMenu} className="fa fa-ellipsis-v"></i>
    //     {showMenu && (
//                           <ul className="profile-dropdown">
//                           <div><CommentEditModal commentId={comment?.id} routeId={routeId}/></div>
//                           <div><CommentDeleteModal commentId={comment?.id} routeId={routeId}/></div>
//                           </ul>
//                           )}

    let commentss = currentRouteComments?.map((comment) =>
    <>
        <div>{comment?.content}</div>
        {sessionUser?.id === route?.user_id && (
        <>
        <CommentEditModal commentId={comment?.id} routeId={routeId} content={comment?.content}/>
        <CommentDeleteModal commentId={comment?.id} routeId={routeId}/>
        </>)}
        {comment?.user_id === sessionUser.id && sessionUser?.id !== route?.user_id && (
        <>
        <CommentEditModal commentId={comment?.id} routeId={routeId} content={comment?.content}/>
        <CommentDeleteModal commentId={comment?.id} routeId={routeId}/>
        </>)}
    </>
    )
    const activities = ['Walk',
    'Run',
    'Hike',
    'Sport / Other Activity',
    'Winter Sport / Activity',
    'Bike Ride',
    'Social',
    'Volunteer',
    'Food']

    return (<>
            {isLoaded && (<>
                <div key={route?.id}  className="routePage">
                    <div className="map"><MapContainer/></div>
                        <div className="routeInfoDiv">
                            <div className="routeTextt">
                                <h2 id="routeName">{route.name}</h2>
                                <p id="routeActivity">{activities[route.activity_id - 1]}</p>
                                <p id="routeDescription">{route.description}</p>
                                <p id="routeDate">{route.created_at}</p>
                                {sessionUser.id === route?.user_id && (
                                <>

                                <button id="EditCreateDeleteBtns" onClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/routes/${route.id}/edit`);
                                    }}>
                                    Edit Route
                                </button>
                                    {/* <RouteDeleteModal routeId={routeId}/> */}
                                    <CommentCreateModal routeId={routeId}/>
                                    </>)}
                            </div>
                            <div className="commentInfoDiv">
                                <div>{commentss}</div>
                                {route?.user_id in friendSession &&
                                (<CommentCreateModal routeId={routeId}/>)}
                            </div>
                        </div>
                </div>
                </>
                )}
            </>
   );
}
