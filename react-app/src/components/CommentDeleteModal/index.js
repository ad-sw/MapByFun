import React, {useState, useEffect} from 'react';
import { Modal } from '../context/Modal';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { deleteComment } from '../../store/comment';
import {getAllRoutes, getOneRoute} from '../../store/route';
import './CommentDeleteModal.css';

function CommentDeleteModal({comment_id}) {
  const [showModal, setShowModal] = useState(false)
  // console.log(useSelector(state => state.routes.currentRoute.comments), 'these are comments in delete modal');
  const dispatch = useDispatch()
//   const history = useHistory()

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteComment(comment_id));
    setShowModal(false);
}

// useEffect(()=>{

// },
//   [dispatch]
// )

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
