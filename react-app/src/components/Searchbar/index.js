import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {searchAllRoutes} from '../../store/route';

const SearchForm = () => {
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        (async () => {
            dispatch(searchAllRoutes(term))
        })();
    }, [dispatch, term]);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchAllRoutes(term))
        history.push(`/search/${term}`)
    }

    return (
        <div className='searchbar-container'>
            <form className='search-form' onSubmit={handleSubmit}>
                <input
                className='searchbar-input'
                placeholder='Route name or keyword'
                value={term}
                onChange= {(e) => setTerm(e.target.value)}/>
                <button className='searchBtn' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;
