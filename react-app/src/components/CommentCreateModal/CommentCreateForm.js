import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createComment } from '../../store/comment';
import {useParams} from 'react-router-dom'
import './CommentCreateModal.css';

const CommentCreateForm = ({setShowModal}, id) => {
    const [errors, setErrors] = useState([]);
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const {routeId} = useParams();

    const validator = () => {
        let error = []

        if(content.length > 401) {
            error.push('. : Please enter a comment shorter than 400 characters.')
        } else if(content.length < 4) {
            error.push('. : Please enter a comment longer than 3 characters.')
        }
        return error;
    }

    const handleCreate = async(e) => {
        e.preventDefault()
        const errorsArr = validator()
        if (errorsArr.length) {
            setErrors(errorsArr)
        } else {
            const payload = {
                user_id,
                route_id: routeId,
                id,
                content
            }
            const data = await dispatch(createComment(payload))
            if (data) {
                setErrors(data)
            } else {
                setShowModal(false);
            }
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
    }


    return (
        <div className='deleteModal3'>
            <div className="errors0">
                {errors.map((error, idx) => (
                <div key={idx}>{error.split(':')[1]}</div>
            ))}
            </div>
            <form className='form' onSubmit={handleCreate}>
                <textarea
                className='commentContent'
                placeholder='Comment content'
                required
                onChange= {(e) => setContent(e.target.value)}/>
                <div className="yesNCanelBtnsWrap2">
                    <button type='submit' id="friendUnfriendConfirmBtn1">Create</button>
                    <button type="submit" onClick={handleCancel} id="friendUnfriendConfirmBtn1">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CommentCreateForm;
