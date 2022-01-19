import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {searchAllRoutes, getAllRoutes} from '../../store/route';
import { useSelector } from 'react-redux';
import{ NavLink, useParams } from 'react-router-dom'

const FriendRouteSearchForm = () => {
    const history = useHistory();
    const [term, setTerm] = useState('');
    const {userId} = useParams();
    // const user_id = useSelector(state => state.session.user?.id)
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            if (term.length === 0) {
                await dispatch(getAllRoutes(userId))
                history.push(`/users/${userId}/explore`);
            }
            if (term.length > 0) {
                await dispatch(searchAllRoutes(userId, term));
                history.push(`/users/${userId}/explore/${term}`);
            }
            setIsLoaded(true)
        })();
    }, [setIsLoaded, dispatch, userId, term, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.length > 0) {
            dispatch(searchAllRoutes(userId, term));
            history.push(`/users/${userId}/explore/${term}`);
        }
        else if (term.length === 0) {
            dispatch(getAllRoutes(userId));
            history.push(`/users/${userId}/explore`);
        }
    }

    const onHandleFormSubmit = (e) => {
        e.preventDefault();
        setTerm('');
        history.push(`/users/${userId}/explore`);
    }

    return (
        <div className='searchbarWrap'>
            <form id='searchForm' onSubmit={handleSubmit}>
                <input
                className='searchbarInput'
                placeholder='Enter a keyword'
                value={term}
                onChange= {(e) => setTerm(e.target.value)}/>
                <button className='search-btn' type='submit'>Search</button>
                <button onClick={onHandleFormSubmit}>Reset</button>
            </form>
        </div>
    )
}

export default FriendRouteSearchForm;
