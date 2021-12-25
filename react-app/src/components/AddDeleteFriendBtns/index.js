import React, {useState, useEffect} from 'react';
import { Modal } from '../Context/Modal';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addFriend, getAllFriends, removeFriend } from '../../store/friend';
import {removeNonFriend, getAllNonFriends} from '../../store/nonfriend';


export default function FriendBtns({user_id, friend_id}) {
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    const friendSession = useSelector(state => state.friends)
    console.log(friendSession, 'object stuff here')
    console.log(sessionUser, 'this is session friends idk')
    const dispatch = useDispatch()

    const handleDelete = async(e) => {
        e.preventDefault();
        await dispatch (getAllFriends(user_id));
        await dispatch(removeFriend(user_id, friend_id))
        setShowModal(false);
    }
    const handleAdd = async(e) => {
        e.preventDefault();
        const payload = {user_id, friend_id}
        // await dispatch (getAllFriends(user_id));
        // await dispatch (getAllNonFriends(user_id));
        await dispatch(addFriend(payload),
        await dispatch(removeNonFriend(payload)),
        )
    }

    useEffect(() => {
        (async () => {
            await dispatch(getAllNonFriends(user_id));
            await dispatch(getAllFriends(user_id));
        })();
    }, [dispatch, user_id]);

    let button = null;
    if (friend_id in friendSession) {
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
    } else if (!(friend_id in friendSession)) {
        button = (<>
            <button type="submit" onClick={handleAdd} className="friendAddBtn">Add Friend</button>
            </>
        )
    }

    return (
    <>
        <div>
            {button}
        </div>
    </>
    );
}
