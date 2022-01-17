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
            setIsLoaded(true)
            if (term.length === 0) {
                await dispatch(getAllNonFriends(userId));
            }
            if (term.length > 0) {
                await dispatch(searchAllNonFriends(userId, term));
                history.push(`/users/${userId}/discover/${term}`);
            }
        })();
    }, [setIsLoaded, dispatch, userId, term, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.length > 0) {
            dispatch(searchAllNonFriends(userId, term));
            history.push(`/users/${userId}/discover/${term}`);
        }
        else if (term.length === 0 || !term) {
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
        <div className='searchbarWrap'>
            <form id='searchForm' onSubmit={handleSubmit}>
                <input
                className='searchbarInput'
                placeholder='Discover projects'
                value={term}
                onChange= {(e) => setTerm(e.target.value)}/>
                <button className='search-btn' type='submit'>Search</button>
                <button onClick={onHandleFormSubmit}>Reset</button>
            </form>
        </div>
    )
}

export default NonfriendSearchForm;
