import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import ProfileButton from './ProfileButton';
import RouteButton from './RouteButton';
import CommunityButton from './CommunityButton';
import ShopButton from './ShopButton';
import '../../../src/index.css';
import AboutMe from '../AboutMe';

function NavBar(){
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    (async () => {
        setIsLoaded(true)
    })();
}, [dispatch, sessionUser])

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser}/>
      </>
    );
  }

  let routeLinks;
  if (sessionUser) {
    routeLinks = (
      <>
      <RouteButton user={sessionUser} id="routeLink" activeClassName="link-active"/>
      </>
    )
  }

  let communityLinks;
  if (sessionUser) {
    communityLinks = (
      <>
      <CommunityButton user={sessionUser} id="communityLink" activeClassName="link-active"/>
      </>
    )
  }

  let shopLinks;
  if (sessionUser) {
    shopLinks = (
      <>
      <ShopButton user={sessionUser} id="routeLink" activeClassName="link-active"/>
      </>
    )
  }

  if (!sessionUser) {
    sessionLinks = (
      <>
        <NavLink className="logBtns1" to='/login' exact={true} activeClassName='active1'>
          Login
        </NavLink>
        <NavLink className="logBtns1" to='/sign-up' exact={true} activeClassName='active1'>
          Sign Up
        </NavLink>
      </>
    );
  }

  return (<>
    <header className="navbar">
      <div id='linking'>
        <div id="homeLink"><NavLink exact to="/"><i id="testing12">MapByFun</i></NavLink></div>
      </div>
      <div id="routeLink" activeClassName="link-active">{isLoaded && routeLinks}</div>
      <div id="communityLink" activeClassName="link-active">{isLoaded && communityLinks}</div>
      <div id="shopLink" activeClassName="link-active">{isLoaded && shopLinks}</div>
      <div className="logBtns" activeClassName="link-active">{isLoaded && sessionLinks}</div>
    </header>
    <AboutMe/>
    </>
  );
}

export default NavBar;
