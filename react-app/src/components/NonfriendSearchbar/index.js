import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import{ NavLink, useParams } from 'react-router-dom'
import UserRouteReadModal from "../UserRoutesReadAll";
import { getAllNonFriends, searchAllNonFriends } from '../../store/nonfriend';

const NonfriendSearchForm = () => {
    const history = useHistory();
    const [term, setTerm] = useState('');
    const userId = useSelector(state => state.session.user?.id)
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (term.length === 0) {
                await dispatch(getAllNonFriends(userId));
                history.push(`/users/${userId}/discover`);
            }
            if (term.length > 0) {
                await dispatch(searchAllNonFriends(userId, term));
                history.push(`/users/${userId}/discover/${term}`);
            }
            setIsLoaded(true)
        })();
    }, [setIsLoaded, dispatch, userId, term, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.length > 0) {
            dispatch(searchAllNonFriends(userId, term));
            history.push(`/users/${userId}/discover/${term}`);
        }
        else if (term.length === 0) {
            dispatch(getAllNonFriends(userId));
            history.push(`/users/${userId}/discover`);
        }
    }

    const onHandleFormSubmit = (e) => {
        e.preventDefault();
        setTerm('');
        history.push(`/users/${userId}/discover`);
    }

    return (
        <div className='searchbarWrap2'>
            <form id='searchForm' onSubmit={handleSubmit}>
                <input
                className='searchbarInput'
                placeholder='Find users'
                value={term}
                onChange= {(e) => setTerm(e.target.value)}/>
                <button className='search-btn' type='submit'>Search</button>
                <button onClick={onHandleFormSubmit} className='search-btn'>Reset</button>
            </form>
        </div>
    )
}

export default NonfriendSearchForm;
