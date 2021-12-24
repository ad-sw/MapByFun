import React, {useState, useEffect} from 'react';
import { Modal } from '../Context/Modal';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addFriend, getAllFriends, removeFriend } from '../../store/friend';
import {removeNonFriend} from '../../store/nonfriend';


export default function FriendBtns({user_id, friend_id}) {
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    console.log(sessionUser, 'this is session friends idk')
    const dispatch = useDispatch()

    const handleDelete = async(e) => {
        e.preventDefault();
        await dispatch (getAllFriends(user_id));
        await dispatch(removeFriend(user_id, friend_id))
        setShowModal(false);
    }
    // console.log(sessionUser.friends.includes(friend_id), 'session friends idk')
    const handleAdd = async(e) => {
        e.preventDefault();
        const payload = {user_id, friend_id}
        await dispatch (getAllFriends(user_id));
        await dispatch(addFriend(payload),
        await dispatch(removeNonFriend(payload)),
        )
    }

    let button = null;
    if (sessionUser.friends.includes(friend_id)) {
        button = (
            <>
            <div>
                <button type="submit" onClick={() => setShowModal(true)} className="friendUnfriendBtn">Unfriend</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className="commentDeleteModal">
                        <div className="form">
                            <p>Are you sure you want to unfriend this user?</p>
                            <button type="submit" onClick={handleDelete} className="friendUnfriendConfirmBtn">Yes</button>
                        </div>
                        </div>
                    </Modal>
                )}
            </div>
            </>
        )
    } else if (!sessionUser.friends.includes(friend_id)) {
        button = (
            <button type="submit" onClick={handleAdd} className="friendAddBtn">Add Friend</button>
        )
    }

    return (
    <>
    <div>
        {/* <button type="submit" onClick={() => setShowModal(true)} className="friendUnfriendBtn">Unfriend</button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}> */}
                {button}
            {/* </Modal>
        )} */}
    </div>
    </>
    );
}
