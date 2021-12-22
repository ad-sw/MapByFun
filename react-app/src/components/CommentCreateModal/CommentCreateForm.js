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

        if(content.length > 400) {
            error.push('. : Please enter a comment shorter than 400 characters.')
        } else if(content.length < 3) {
            error.push('. : Please enter a comment longer than three letters.')
        }
        return error;
    }

    const handleCreate = async(e) => {
        e.preventDefault()
        const errorsArr = validator()
        if(errorsArr.length) {
            setErrors(errorsArr)
        }else{
            const payload = {
                user_id,
                route_id: routeId,
                id,
                content
            }
            const data = await dispatch(createComment(payload))
            if(data){
                setErrors(data)
            } else {
                setShowModal(false);
            }
        }
    }


    return (
        <div className='commentFormContainer'>
            <form className='commentForm' onSubmit={handleCreate}>
            <div className="errors">
                {errors.map((error, idx) => (
                <div key={idx}>{error.split(':')[1]}</div>
            ))}
            </div>
                <textarea
                className='commentContentInput'
                placeholder='Content'
                required
                onChange= {(e) => setContent(e.target.value)}/>
                <button type='submit' className="commentCreateBtn">Create Comment</button>
            </form>
        </div>
    )
}

export default CommentCreateForm;