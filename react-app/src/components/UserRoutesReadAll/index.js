import {useSelector, useDispatch} from 'react-redux';
import {getAllRoutes} from '../../store/route';
import {useEffect, useState} from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';
import RouteDeleteModal from "../RouteDeleteModal";
import {searchAllRoutes} from '../../store/route';
import '../../../src/index.css'

function UserRouteReadModal() {
    const dispatch = useDispatch();
    const {term} = useParams()
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory()
    const {userId} = useParams()
    // const userId  = useSelector(state => state.session.user?.id);

    useEffect(() => {
        (async () => {
            // // if (term) {
            //     await dispatch(getAllRoutes(userId))
            // //}
            if (!term) {
                await dispatch(getAllRoutes(userId))
            }
            setIsLoaded(true)
        })();
    }, [dispatch, term, userId]);

    let dashRouted = useSelector(state => Object.values(state.routes.searchedRoutes || state.routes))

    const activities = ['Walk', 'Run', 'Hike', 'Sport / Other Activity',
    'Winter Sport / Activity', 'Bike Ride', 'Social', 'Volunteer', 'Food']

    const test = dashRouted.map(route => {
        if (!route) {
            return null;
        }

        let event = new Date(route?.created_at); //fri dec 31 2021
        let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)

        return (<>{isLoaded &&(
                    <tr className="routes-table-row">
                    <td className="td-name" id="nameColor">
                        <NavLink key={route.id} to={`/routes/${route.id}`}>{route.name}</NavLink></td>
                        <td>{date}</td>
                        <td>{activities[route?.activity_id - 1]}</td>
                        <td>{<center><NavLink to={`/users/${userId}/find`}><img id="privacyimg" title="viewable by friends" className="privacyIcon" src="https://user-images.githubusercontent.com/86431563/147837757-50dc021b-9531-4274-8ed9-9660b0aa53f8.png" width="28" height="28"></img></NavLink></center>}</td>
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
                    </tr>)}
                </>
                )
            })

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
