import React, {useState, useEffect} from 'react';
import { Modal } from '../context/Modal';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { removeRoute, getAllRoutes } from '../../store/route'
import './RouteDeleteModal.css';

function RouteDeleteModal({routeId}) {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleDelete = (e) => {
    e.preventDefault();

    dispatch(removeRoute(routeId));
    // dispatch(getAllRoutes);
    setShowModal(false);
    history.push('/routes');
}

useEffect(()=>{
  dispatch(getAllRoutes())},
  [dispatch]
)

return (

  <>
  <div>
      <button type="submit" onClick={() => setShowModal(true)} className="routeDeleteModalBtn">Delete Route</button>
      {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div className="routeDeleteModal">
              <div className="form">
                <p>Are you sure you want to delete this route?</p>
                <button type="submit" onClick={handleDelete} className="routeDeleteConfirmBtn">Delete</button>
              </div>
            </div>
          </Modal>
      )}
  </div>
  </>
);
}

export default RouteDeleteModal;
