import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Modal } from '../Context/Modal';
import CommentEditForm from './CommentEditForm';


function CommentEditModal({routeId , commentId, content}){
    const [showModal, setShowModal] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
        })();
    }, [setIsLoaded]);

    return (
        <><div>
            <button onClick={() => setShowModal(true)} id="EditCreateDeleteBtns">Edit</button>
            {isLoaded && showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentEditForm
                        routeId={routeId}
                        commentId={commentId}
                        setShowModal={setShowModal}
                        acontent={content}
                    />
                </Modal>
                )}
            </div>
        </>
    )
}

export default CommentEditModal
