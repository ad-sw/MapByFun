import React, { useState } from 'react';
import { Modal } from '../Context/Modal';
import {useParams} from 'react-router-dom'
import CommentCreateForm from './CommentCreateForm';
import './CommentCreateModal.css';

function CommentCreateModal(){
    const [showModal, setShowModal] = useState(false)
    // const {route_id} = useParams();

    return (
        <div className="commentCreateBtnContainer">
        <>
            <button onClick={() => setShowModal(true)} className="commentCreateBtn">Create Comment</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentCreateForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
        </div>
    )
}

export default CommentCreateModal
