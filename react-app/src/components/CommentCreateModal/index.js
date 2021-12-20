import React, { useState } from 'react';
import { Modal } from '../context/Modal';
import {useParams} from 'react-router-dom'
import CommentCreateForm from './CommentCreateForm';
import './CommentCreateModal.css';

function CommentCreateModal(){
    const [showModal, setShowModal] = useState(false)
    const {route_id} = useParams();

    return (
        <div className="commentCreateBtnContainer">
        <>
            <button onClick={() => setShowModal(true)} className="commentCreateBtn">Creat Comment</button>
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
