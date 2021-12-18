import React, {useState} from 'react'
import { Modal } from '../context/Modal';
import RouteDeleteConfirmation from './RouteDeleteConfirmation'
import './RouteDeleteModal.css'


function RouteDeleteModal({routes}) {
    const [showModal, setShowModal] = useState(false)

  return (
    <div>
    <>
        <div onClick={() => setShowModal(true)} className="routeDeleteModalBtn">Delete Route</div>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <RouteDeleteConfirmation routes={routes} setShowModal={setShowModal}/>
            </Modal>
        )}
    </>
    </div>
  );
}

export default RouteDeleteModal;
