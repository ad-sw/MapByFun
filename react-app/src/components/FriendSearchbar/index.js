import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import{ NavLink, useParams } from 'react-router-dom'
import UserRouteReadModal from "../UserRoutesReadAll";
import { getAllFriends, searchAllFriends } from "../../store/friend";

const FriendSearchForm = () => {
    const history = useHistory();
    const [term, setTerm] = useState('');
    const userId = useSelector(state => state.session.user?.id)
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
            if (term.length === 0) {
                await dispatch(getAllFriends(userId));
                history.push(`/users/${userId}/find`);
            }
            if (term.length > 0) {
                await dispatch(searchAllFriends(userId, term));
                history.push(`/users/${userId}/find/${term}`);
            }
        })();
    }, [setIsLoaded, dispatch, userId, term, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.length > 0) {
            dispatch(searchAllFriends(userId, term));
            history.push(`/users/${userId}/find/${term}`);
        }
        else if (term.length === 0) {
            dispatch(getAllFriends(userId));
            history.push(`/users/${userId}/find`);
        }
    }

    const onHandleFormSubmit = (e) => {
        e.preventDefault();
        setTerm('');
        history.push(`/users/${userId}/find`);
    }

    return (
        <div className='searchbarWrap2'>
            <form id='searchForm' onSubmit={handleSubmit}>
                <input
                className='searchbarInput'
                placeholder='Search friends'
                value={term}
                onChange= {(e) => setTerm(e.target.value)}/>
                <button className='search-btn' type='submit'>Search</button>
                <button onClick={onHandleFormSubmit} className='search-btn'>Reset</button>
            </form>
        </div>
    )
}

export default FriendSearchForm;
