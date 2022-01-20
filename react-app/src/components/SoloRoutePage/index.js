import React, { useEffect, useState } from "react";
import { Modal } from '../Context/Modal';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useHistory} from 'react-router-dom'
import {getOneRoute} from  '../../store/route'
import {getAllNonUserUsers} from '../../store/user'
import {getAllFriends} from '../../store/friend'
import { getAllRouteComments } from "../../store/comment";
import CommentCreateModal from '../CommentCreateModal';
import CommentDeleteModal from '../CommentDeleteModal';
import './SoloRoutePage.css';
import CommentEditModal from "../CommentEditModal";
import MapContainer from "../Maps";
import '../../../src/index.css'

export default function RoutePage(){
    let dispatch = useDispatch();
    const [user, setUser] = useState({});
    // const [users, setUsers] = useState([]);
    let {routeId} = useParams();
    const history = useHistory()
    const [isLoaded, setIsLoaded] = useState(false)
    // const [showMenu, setShowMenu] = useState(false);
    const sessionUser = useSelector(state => state.session.user)
    // const sessionUserId = sessionUser?.id
    const friendSession = useSelector(state => state.friends)
    const route = useSelector(state => state.routes[routeId])
    // const idk = useSelector(state => state.users)
    const userId = route?.user_id
    let currentRouteComments = useSelector(state => Object.values(state?.comments))

    useEffect(() => {
        (async () => {
            await dispatch(getOneRoute(routeId));
            await dispatch(getAllRouteComments(routeId));
            await dispatch(getAllNonUserUsers(sessionUser?.id));
            // const response = await fetch(`/api/users/${userId}`);
            // const user = await response.json();
            // await dispatch(getAllUsers());
            // setUser(user);
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser, routeId])



    let event = new Date(route?.created_at);
    let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)
    const allUsersList = useSelector(state => Object.values(state.users))
    allUsersList.unshift(sessionUser)
    var res = allUsersList.sort(({id:a}, {id:b}) => a - b);
    // allUsersList.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))

    console.log(res, 'here')

    let commentss = currentRouteComments?.map((comment) =>
    <>
        <div className="editFormCommentsView">
        <div className="commentContentt">
            {comment?.content}
            <div className="commentAuthor">{res[comment?.user_id-1]?.first_name} {date}</div>
        </div>
            <div>
            {sessionUser?.id === route?.user_id && comment?.user_id === sessionUser.id && (
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


    if (!user) {
        return null;
    }


    if (!isLoaded) {
        return (
        <div id="t">
            <video id="mediaContent" preload="true" muted="" loop="" playsinline="" autoplay="" src="https://cdn.dribbble.com/users/4187655/screenshots/8421375/media/eaa37c1d3e989e818ab5cd3748a09867.mp4">
            </video>
            <div className="loadText">Loading</div>
        </div>
        );
    }

    const activities = ['Walk', 'Run', 'Hike', 'Sport / Other Activity',
    'Winter Sport / Activity', 'Bike Ride', 'Social', 'Volunteer', 'Food']

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
                                <div id="dateProf">
                                    {/* allUsersList[route.user_id][first_name] */}
                                    {sessionUser?.id === route.user_id && (<div className="routeUser">Me ({res[userId-1]['first_name']}) on</div>)}
                                    {sessionUser?.id !== route.user_id && (<div className="routeUser">{res[userId-1]['first_name']} on</div>)}
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
                            {sessionUser.id === route?.user_id && !(route?.user_id in friendSession) && (
                                <>
                            <CommentCreateModal routeId={routeId}/>
                            </>
                                )}
                            {route?.user_id in friendSession && sessionUser.id !== route?.user_id &&
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
