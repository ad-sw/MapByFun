import React, { useState } from 'react';
import { Modal } from '../Context/Modal';
import {useParams} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {addFriend} from '../../store/friend';

export default function AddFriend({friend_id, user_id}){
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();

    const handleAdd = async(e) => {
        e.preventDefault();
        const payload = {
        user_id,
        friend_id
        }
        await dispatch(addFriend(payload, friend_id, user_id))
    }

    return (
        <div className="friendAddBtnContainer">
        <>
        <button type="submit" onClick={handleAdd} className="friendAddBtn">Add Friend</button>
        </>
        </div>
    )
}
