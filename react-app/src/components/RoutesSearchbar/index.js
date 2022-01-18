import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {searchAllRoutes, getAllRoutes} from '../../store/route';
import { useSelector } from 'react-redux';
import{ NavLink, useParams } from 'react-router-dom'
import UserRouteReadModal from "../UserRoutesReadAll";

const RouteSearchForm = () => {
    const history = useHistory();
    const [term, setTerm] = useState('');
    const userId = useSelector(state => state.session.user?.id)
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            setIsLoaded(true)
            await dispatch(getAllRoutes(userId))
            if (term.length > 0) {
                await dispatch(searchAllRoutes(userId, term));
                history.push(`/users/${userId}/explore/${term}`);
            }
        })();
    }, [setIsLoaded, dispatch, userId, term, history]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.length > 0) {
            dispatch(searchAllRoutes(userId, term));
            history.push(`/users/${userId}/explore/${term}`);
        }
        else if (term.length === 0 || !term) {
            dispatch(getAllRoutes(userId));
            history.push(`/users/${userId}/explore`);
        }
    }

    const onHandleFormSubmit = (e) => {
        e.preventDefault();
        setTerm('');
        history.push(`/users/${userId}/search`);
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

export default RouteSearchForm;
