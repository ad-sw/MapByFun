import {useSelector, useDispatch} from 'react-redux';
import {getAllRoutes} from '../../store/route';
import {useEffect, useState} from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import RouteDeleteModal from "../RouteDeleteModal";
import '../../../src/index.css'

function UserRouteReadModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory()
    const { userId }  = useParams();

    useEffect(() => {
        (async () => {
            await dispatch(getAllRoutes(sessionUser.id));
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser]);

    
    const dashRoutes = useSelector(state => Object.values(state.routes))
    const activities = ['Walk', 'Run', 'Hike', 'Sport / Other Activity',
    'Winter Sport / Activity', 'Bike Ride', 'Social', 'Volunteer', 'Food']

    const test = dashRoutes?.map(route => {
        //way 1
        // let event = new Date(route.created_at);
        // let date = JSON.stringify(event)
        // date = date.slice(1,11).split('-')
        // date.push(date.shift())
        // date = date.join(',').replace(/\,/g, '/')
        let event = new Date(route?.created_at); //fri dec 31 2021
        let date = event.toLocaleDateString().slice(0,4) + event.toLocaleDateString().slice(6,8)

        return (<>
                    <tr className="routes-table-row">
                    <td className="td-name" id="nameColor">
                        <NavLink key={route.id} to={`/routes/${route.id}`}>{route.name}</NavLink></td>
                        <td>{date}</td>
                        <td>{activities[route.activity_id - 1]}</td>
                        <td>{<center><NavLink to={`/users/${userId}/friends`}><img id="privacyimg" title="viewable by friends" className="privacyIcon" src="https://user-images.githubusercontent.com/86431563/147837757-50dc021b-9531-4274-8ed9-9660b0aa53f8.png" width="28" height="28"></img></NavLink></center>}</td>
                        <td id="distanceCenter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'n/a'}</td>
                        <td>
                            <button id="userProfileViewLink" onClick={(e) => {
                                e.preventDefault();
                                history.push(`/routes/${route.id}`);
                                }}>
                            View
                            </button>
                            <button id="userProfileViewLink" onClick={(e) => {
                                e.preventDefault();
                                history.push(`/routes/${route.id}/edit`);
                                }}>
                            Edit
                            </button>
                            <RouteDeleteModal routeId={route.id}/>
                        </td>
                    </tr>
                </>
                )
            })

    // if (!isLoaded) {
    // return (
    // <div id="loadingGif">
    //         <img src={"https://cdn.dribbble.com/users/1976516/screenshots/6860281/dribb.gif"} height="400px" width="600px" alt="loading"/>
    //         <div className="loadText">Loading</div>
    //     </div>
    // );
    //}

    return (<>{isLoaded && (<>
        <div className='routes-table-container'>
        <div className="tableBodyScroll">
            <table className='routes-table'>
            <thead>
                <tr>
                <th className='table-header'>Route Name</th>
                <th className='table-header'>Created</th>
                <th className='table-header'>Activity</th>
                <th className='table-header'>Privacy</th>
                <th className='table-header'>Distance</th>
                <th className='table-header'>Options</th>
                </tr>
            </thead>
            <tbody className="tableBodyScroll">
                {test}
            </tbody>
            </table>
            </div>
        </div>
            </>
            )}
        </>
    );
}

export default UserRouteReadModal;
