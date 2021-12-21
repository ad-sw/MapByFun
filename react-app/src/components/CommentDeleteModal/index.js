import React, {useState, useEffect} from 'react';
import { Modal } from '../Context/Modal';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { deleteComment } from '../../store/comment';
import {getAllRoutes, getOneRoute} from '../../store/route';
import './CommentDeleteModal.css';

function CommentDeleteModal({commentId}) {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(commentId));
    setShowModal(false);
}

return (
  <>
  <div>
      <button type="submit" onClick={() => setShowModal(true)} className="commentDeleteModalBtn">Delete Comment</button>
      {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div className="commentDeleteModal">
              <div className="form">
                <p>Are you sure you want to delete this comment?</p>
                <button type="submit" onClick={handleDelete} className="commentDeleteConfirmBtn">Delete</button>
              </div>
            </div>
          </Modal>
      )}
  </div>
  </>
);
}

export default CommentDeleteModal;
