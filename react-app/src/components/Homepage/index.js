import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ NavLink } from 'react-router-dom'
import {getAllUsers} from  '../../store/user'
import "./Homepage.css"
import ProfileButton from "../NavigationBar/ProfileButton";
// import LogoutButton from "../auth/LogoutButton";
import '../../../src/index.css'

export default function HomePage(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getAllUsers());
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser])

    //let sessionLinks;
    //if (sessionUser) {
        let sessionLinks = (<>
            {/* <a id="artistName" href="https://www.lowes.com/pd/Trademark-Fine-Art-Michael-Tompsett-Philadelphia-Pennsylvania-Street-Map-18x24-Canvas-Art/1002797748?cm_mmc=psm-_-c-_-prd-_-dcr-_-pin-_-shp-_-0-_-0-_-0-_-trademark_fine_art&epik=dj0yJnU9THpsWFRTN2dVNHZ0QXhrVUtFQkZfY2UxTjV5Zl9LUUkmcD0wJm49aTJNVXRDMkRqbnVYOHFTZ2N3QnJ2dyZ0PUFBQUFBR0hNRUVZ" target="_blank" rel="noopener noreferrer">Artist: Michael Tompsett</a> */}
            {/* <a id="artistName" href="https://illo.tv" target="_blank" rel="noopener noreferrer">Image Credit: ILLO Studio</a> */}
        <div className='main-splash-container'>
            {/* <div className='home-image'> */}
                <div className="homePage">
                <img className="mapFront" title="Artist: Michael Tompsett" src="https://imgc.allpostersimages.com/img/posters/new-york-city-street-map_u-L-Q1AUL790.jpg?artHeight=900&artPerspective=n&artWidth=900"></img>
                {/* <a href="https://illo.tv/"><img title="ILLO Studio image" className="mapFront" src="https://admin.illo.tv/storage/uploads/2020/03/30/5e8226fb21ab1airbnb-preview-large.jpg"></img></a> */}
                </div>
            <div className='slogan-container'>
                <hr className='home-hr' size='8' />
                <div className='slogan'><i>See Some (S)miles</i></div>
                <hr className='home-hr' size='8' />
            </div>
            <div className='homepage-text-container'>
                <span className='text-info'>Map out and share with</span>
                <span className='text-info'>friends. Discover local</span>
                <span className='text-info'>events around you.</span>
                <NavLink to='/sign-up' className='home-sign-up'><b><i>Sign Up</i></b></NavLink>
                <div className='home-login-container'>
                    <span className='login-q'>Already a member?</span>
                    <NavLink to='/login' className='home-login'>LOG IN</NavLink>
                </div>
            </div>
        </div>
        </>);

    if (!isLoaded) {
        return (
        <div id="loadingGif">
                <img src={"https://cdn.dribbble.com/users/1976516/screenshots/6860281/dribb.gif"} height="400px" width="600px" alt="loading"/>
                <div className="loadText">Loading</div>
            </div>
        );
    }

    return (
    <div id="logBtns">{isLoaded && sessionLinks}</div>
    )
}
