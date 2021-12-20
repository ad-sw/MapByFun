import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from '../context/Modal';
import CommentEditForm from './CommentEditForm';


function CommentEditModal({route_id , comment_id, content}){
    const [showModal, setShowModal] = useState(false)
    console.log(comment_id, 'comment_id in indexjs modal edit')
    return (
        <div>
        <>
            <button onClick={() => setShowModal(true)} className="commentEditBtn">Edit Comment</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentEditForm
                        route_id={route_id}
                        commentId={comment_id}
                        setShowModal={setShowModal}
                        content={content}
                    />
                </Modal>
            )}
        </>
        </div>
    )
}

export default CommentEditModal
