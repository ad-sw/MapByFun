import React, {useState, useEffect} from 'react';
import { Modal } from '../Context/Modal';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { removeFriend } from '../../store/friend';

export default function RemoveFriend({user_id, friend_id}) {
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = async(e) => {
        e.preventDefault();
        await dispatch(removeFriend(user_id, friend_id))
        setShowModal(false);
    }

    return (
    <>
    <div>
        <button type="submit" onClick={() => setShowModal(true)} className="friendUnfriendBtn">Unfriend Friend</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="commentDeleteModal">
                <div className="form">
                    <p>Are you sure you want to unfriend this user?</p>
                    <button type="submit" onClick={handleDelete} className="friendUnfriendConfirmBtn">Delete</button>
                </div>
                </div>
            </Modal>
        )}
    </div>
    </>
    );
}
