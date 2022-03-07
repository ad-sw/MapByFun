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
            <div onClick={() => setShowModal(true)} className="pencil"><img src="https://user-images.githubusercontent.com/86431563/156966199-83801254-52ad-482e-acb8-a40db8ed9d1c.png" alt="edit" className='pencil' width="15px" height="15px"></img></div>
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
