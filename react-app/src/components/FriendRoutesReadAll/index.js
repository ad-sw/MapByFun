import {useSelector, useDispatch} from 'react-redux';
import {getFriendRoutes} from '../../store/route';
import {useEffect, useState} from 'react';
import { NavLink, useParams, useHistory } from 'react-router-dom';

export default function FriendRouteReadModal({userId, friendId}) {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory()

    useEffect(() => {
        (async () => {
            await dispatch(getFriendRoutes(userId, friendId));
            setIsLoaded(true)
        })();
    }, [dispatch, userId, friendId]);

    const dashRoutes = useSelector(state => Object.values(state.routes))
    const activities = ['Walk',
                        'Run',
                        'Hike',
                        'Sport / Other Activity',
                        'Winter Sport / Activity',
                        'Bike Ride',
                        'Social',
                        'Volunteer',
                        'Food']

    const test = dashRoutes?.map(route => {
        return (<>
            <tr className="routes-table-row">
            <td className="name"><NavLink key={route.id} to={`/routes/${route.id}`}>
                {route.name}</NavLink></td>
                <td>{route.created_at}</td>
                <td>{activities[route.activity_id - 1]}</td>
                <td>{/*image to go here*/}</td>
                <td>{route.description}</td>
                <td>
                    <button id="userProfileViewLink" onClick={(e) => {
                        e.preventDefault();
                        history.push(`/routes/${route.id}`);
                        }}>
                    View
                    </button>
                </td>
            </tr>
            </>
            )
        })

    return (<>{isLoaded && (
        <div className='routes-table-container'>
            <table className='routes-table'>
            <thead>
                <tr>
                <th className='table-header'>Name</th>
                <th className='table-header'>Created</th>
                <th className='table-header'>Activity</th>
                <th className='table-header'>Privacy</th>
                <th className='table-header'>Description</th>
                <th className='table-header'>Options</th>
                </tr>
            </thead>
            <tbody>
                {test}
            </tbody>
            </table>
        </div>
        )}
    </>
    );
}
