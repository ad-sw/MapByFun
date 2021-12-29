import {useSelector, useDispatch} from 'react-redux';
import {getAllRoutes} from '../../store/route';
import {useEffect, useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import RouteDeleteModal from "../RouteDeleteModal";
import '../../../src/index.css'

function UserRouteReadModal() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false)
    const { friendId }  = useParams();

    useEffect(() => {
        (async () => {
            await dispatch(getAllRoutes(sessionUser.id));
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser]);

    const dashRoutes = useSelector(state => Object.values(state.routes))

    const test = dashRoutes?.map(route => {
        return (<>
                    <tr className="routes-table-row">
                    <NavLink key={route.id} to={`/routes/${route.id}`}>
                        <td className="name">{route.name}</td></NavLink>
                        <td>{route.created_at}</td>
                        <td>{route.activity}</td>
                        <td>{/*image to go here*/}</td>
                        <td>{route.description}</td>
                        <td>
                            <NavLink to={`/routes/${route.id}/edit`} exact={true} className="friendUnfriendBtn">
                            Edit
                            </NavLink>
                            <RouteDeleteModal routeId={route.id}/>
                        </td>
                    </tr>
                </>
                )
            })

    return (<>{isLoaded && (<>
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
            </>
            )}
        </>
    );
}

export default UserRouteReadModal;
