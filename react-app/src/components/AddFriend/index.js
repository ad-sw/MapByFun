// import React, { useState } from 'react';
// import { Modal } from '../Context/Modal';
// import {useParams} from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import {addFriend} from '../../store/friend';
// import {removeNonFriend} from '../../store/nonfriend';

// export default function AddFriend({friend_id, user_id}){
//     const [showModal, setShowModal] = useState(false)
//     const sessionUser = useSelector(state => state.session.user)
//     const dispatch = useDispatch();

//     let friendsId = Object.keys(sessionUser?.friends).filter(friend => +friend === friend_id)

//     const handleAdd = async(e) => {
//         e.preventDefault();
//         const payload = {
//         user_id,
//         friend_id
//         }
//         await dispatch(addFriend(payload),
//         await dispatch(removeNonFriend(payload)),
//         )
//     }

//     return (
//         <div className="friendAddBtnContainer">
//         <>
//         {friendsId && <button type="submit" onClick={handleAdd} className="friendAddBtn">Add Friend</button>}
//         {!friendsId && null}
//         </>
//         </div>
//     )
// }
