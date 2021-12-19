import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { removeRoute, getAllRoutes } from '../../store/route'

import './RouteDeleteModal.css'


const RouteDeleteConfirmation = () => {
    const history = useHistory()
    const {routeId} = useParams()
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(removeRoute(routeId))
        dispatch(getAllRoutes())
        history.push('/routes')
    }

    console.log(useSelector(state => state.routes), 'testing again')


    return (
        <>
        <div className="routeDeleteModal">
        <div className="form">
            <p>Are you sure you want to delete this route?</p>
            <button type="submit" onClick={handleDelete} className="routeDeleteConfirmBtn">Delete</button>
        </div>
        </div>
        </>
    )
}

export default RouteDeleteConfirmation
