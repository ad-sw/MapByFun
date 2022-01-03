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
            <button onClick={() => setShowModal(true)} className="pencil"><img src="https://user-images.githubusercontent.com/86431563/147906903-b7d81cf4-8b2f-4135-9094-454046d7d198.png" alt="edit" width="12" height="11" className='pencil'></img></button>
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
