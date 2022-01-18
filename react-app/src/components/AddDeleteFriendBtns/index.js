import React, {useState, useEffect} from 'react';
import { Modal } from '../Context/Modal';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addFriend, getAllFriends, removeFriend } from '../../store/friend';
import {removeNonFriend, getAllNonFriends} from '../../store/nonfriend';
import '../../../src/index.css'

export default function FriendBtns({user_id, friend_id}) {
    const [showModal, setShowModal] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    // const sessionUser = useSelector(state => state.session.user)
    const friendSession = useSelector(state => state.friends)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            // await dispatch(getAllNonFriends(user_id));
            // await dispatch(getAllFriends(user_id));
            setIsLoaded(true)
        })();
    }, [dispatch, setIsLoaded, user_id]);

    const handleDelete = async(e) => {
        e.preventDefault();
        await dispatch (getAllFriends(user_id));
        await dispatch(removeFriend(user_id, friend_id));
        setShowModal(false);
    }
    const handleAdd = async(e) => {
        e.preventDefault();
        const payload = {user_id, friend_id};
        await dispatch(removeNonFriend(payload));
        await dispatch(getAllNonFriends(user_id));
        await dispatch(addFriend(payload));
        await dispatch(getAllNonFriends(user_id));
        setIsLoaded(true)
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

    let button = null;
    if (friend_id in friendSession) {
        button = (
            <>
            <div>
                <button type="submit" onClick={() => setShowModal(true)} className="friendUnfriendBtn">Unfriend</button>
                {isLoaded && showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className="deleteModal">
                            <p>Unfriend this user?</p>
                            <div className="yesNCanelBtnsWrap">
                                <button type="submit" onClick={handleDelete} id="friendUnfriendConfirmBtn">Yes</button>
                                <button type="submit" onClick={handleCancel} id="friendUnfriendConfirmBtn">Cancel</button>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
            </>
        )
    } else if (!(friend_id in friendSession)) {
        button = (<>
            <button type="submit" onClick={handleAdd} className="friendUnfriendBtn">Add</button>
            </>
        )
    }

    return (
        <div>
            {button}
        </div>
    );
}
