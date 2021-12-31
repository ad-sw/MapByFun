import React, { useState, useEffect } from 'react';
import { Modal } from '../Context/Modal';
import {useParams} from 'react-router-dom'
import CommentCreateForm from './CommentCreateForm';
import './CommentCreateModal.css';

function CommentCreateModal(){
    const [showModal, setShowModal] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
        })();
    }, [setIsLoaded]);

    return (<>
        <div className="commentCreateBtnContainer">
            <button onClick={() => setShowModal(true)} id="EditCreateDeleteBtns">Create Comment</button>
            {isLoaded && showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentCreateForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </div>
        </>
    )
}

export default CommentCreateModal
