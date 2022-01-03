import {useSelector, useDispatch} from 'react-redux';
import {getFriendRoutes} from '../../store/route';
import {useEffect, useState} from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';

export default function FriendRouteReadModal({userId, friendId}) {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory()
    const friendSession = useSelector(state => state.friends)

    useEffect(() => {
        (async () => {
            await dispatch(getFriendRoutes(userId, friendId));
            setIsLoaded(true)
        })();
    }, [dispatch, userId, friendId]);


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
        let date = event.toLocaleDateString()

        return (<>
            <tr className="routes-table-row">
            <td className="name" id="nameColor">
                {!(route?.user_id in friendSession) && (
                route.name)}
                {route?.user_id in friendSession && (
                <NavLink key={route.id} to={`/routes/${route.id}`}>
                {route.name}</NavLink>)}</td>
                <td>{date}</td>
                <td>{activities[route.activity_id - 1]}</td>
                <td>{<center><img title="viewable by friends" src="https://user-images.githubusercontent.com/86431563/147837757-50dc021b-9531-4274-8ed9-9660b0aa53f8.png" width="28" height="28" className="privacyIcon"></img></center>}</td>
                <td id="distanceCenter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'n/a'}</td>
                <td>
                {!(route?.user_id in friendSession) && ('n/a')}
                {route?.user_id in friendSession &&
                <button id="userProfileViewLink" onClick={(e) => {
                    e.preventDefault();
                    history.push(`/routes/${route.id}`);
                    }}>
                View
                </button>}
                </td>
            </tr>
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
