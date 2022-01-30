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
            // await dispatch(getAllUsers());
            setIsLoaded(true)
        })();
    }, [dispatch, sessionUser])

    //let sessionLinks;
    //if (sessionUser) {
        let sessionLinks = (<>
            <div className='main-splash-container'>
                    <div className="homePage">
                    <img className="mapFront" title="Artist: Michael Tompsett" src="https://user-images.githubusercontent.com/86431563/150725585-c384a920-246a-4647-9394-cf414b291875.jpg"></img>
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

    // if (!isLoaded) {
    //     return (
    //     <div id="loadingGif">
    //             <img src={"https://cdn.dribbble.com/users/1976516/screenshots/6860281/dribb.gif"} height="400px" width="600px" alt="loading"/>
    //             <div className="loadText">Loading</div>
    //         </div>
    //     );
    // }

    if (!isLoaded) {
        return (
        <div className="t4">
            <video id="mediaContent" preload="none" muted="" loop="" playsinline="" autoplay="" src="https://cdn.dribbble.com/users/4187655/screenshots/8421375/media/eaa37c1d3e989e818ab5cd3748a09867.mp4">
            </video>
            <div className="loadText">Loading</div>
        </div>
        );
      }

    return (<>{isLoaded && (<>
        <div id="logBtns">{sessionLinks}</div>
            <div className="t4">
                    <video id="mediaContent" preload="true" muted="" loop="" playsinline="" autoplay="" src="https://cdn.dribbble.com/users/4187655/screenshots/8421375/media/eaa37c1d3e989e818ab5cd3748a09867.mp4">
                    </video>
                    <div className="loadText">Loading</div>
            </div>
        </>
        )}
    </>
    )
}
