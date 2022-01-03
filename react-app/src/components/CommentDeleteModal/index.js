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
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    (async () => {
        setIsLoaded(true)
    })();
  }, [setIsLoaded]);

    const handleDelete = (e) => {
      e.preventDefault();
      dispatch(deleteComment(commentId));
      setShowModal(false);
  }
  const handleCancel = (e) => {
    e.preventDefault();
    setShowModal(false);
  }

  return (
    <>
    <div>
        <button type="submit" onClick={() => setShowModal(true)} className="close"><i className="fa fa-close"></i></button>
        {isLoaded && showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <div className="deleteModal2">
                <div className="formModal">
                  <p>Delete this comment?</p>
                  <div className="yesNCanelBtnsWrap2">
                  <button type="submit" onClick={handleDelete} id="friendUnfriendConfirmBtn2">Okay</button>
                  <button type="submit" onClick={handleCancel} id="friendUnfriendConfirmBtn2">Cancel</button>
                  </div>
                </div>
              </div>
            </Modal>
        )}
    </div>
    </>
  );
}

export default CommentDeleteModal;
