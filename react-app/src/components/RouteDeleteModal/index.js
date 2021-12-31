import React, {useState, useEffect} from 'react';
import { Modal } from '../Context/Modal';
import {useHistory, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { deleteRoute } from '../../store/route'
import './RouteDeleteModal.css';

function RouteDeleteModal({routeId}) {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const userId = useParams()

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteRoute(routeId));
    setShowModal(false);
    history.push(`/users/${userId}/routes`);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

return (
    <div>
        <button type="submit" onClick={() => setShowModal(true)} id="userProfileViewLink">Delete</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <div className="deleteModal">
                <div className="form">
                  <p>Delete this route?</p>
                  <div className="yesNCanelBtnsWrap">
                  <button type="submit" onClick={handleDelete} id="friendUnfriendConfirmBtn">Yes</button>
                  <button type="submit" onClick={handleCancel} id="friendUnfriendConfirmBtn">Cancel</button>
                  </div>
                </div>
              </div>
            </Modal>
        )}
    </div>
  );
}

export default RouteDeleteModal;
