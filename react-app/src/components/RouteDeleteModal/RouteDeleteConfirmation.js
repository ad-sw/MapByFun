import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { allRoutes, removeRoute } from '../../store/route'

import './RouteDeleteConfirmation.css'


const RouteDeleteConfirmation = () => {
    const history = useHistory()
    const {id} = useParams()
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(removeRoute(id))
        dispatch(allRoutes())
        history.push('/routes')
    }

    return (

        <div className="routeDeleteModal">
            <div className="sidebar2"></div>
        <div className="form">
            <p>Are you sure you want to delete this route?</p>
            <button type="submit" onClick={handleDelete} className="routeDeleteConfirmBtn">Delete</button>
        </div>
        </div>
    )
}

export default RouteDeleteConfirmation
