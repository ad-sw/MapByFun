import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from '../Context/Modal';
import CommentEditForm from './CommentEditForm';


function CommentEditModal({routeId , commentId, content}){
    const [showModal, setShowModal] = useState(false)

    return (
        <><div>
            <button onClick={() => setShowModal(true)} className="commentEditBtn">Edit Comment</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentEditForm
                        routeId={routeId}
                        commentId={commentId}
                        setShowModal={setShowModal}
                        content={content}
                    />
                </Modal>
                )}
            </div>
        </>
    )
}

export default CommentEditModal
