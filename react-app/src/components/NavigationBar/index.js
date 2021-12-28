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
import * as sessionActions from '../../store/session';

function NavBar(){
  const [isLoaded, setIsLoaded] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
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
      <RouteButton user={sessionUser}/>
      </>
    )
  }

  let communityLinks;
  if (sessionUser) {
    communityLinks = (
      <>
      <CommunityButton user={sessionUser}/>
      </>
    )
  }

  let shopLinks;
  if (sessionUser) {
    shopLinks = (
      <>
      <ShopButton user={sessionUser}/>
      </>
    )
  }

  if (!sessionUser) {
    sessionLinks = (
      <>
        <NavLink to='/login' exact={true} activeClassName='active'>
          Login
        </NavLink>
        <NavLink to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink>
        <LogoutButton/>
      </>
    );
  }

  return (<>
    <header className="navbar">
      <div id='linking'>
        <div id="homeLink"><NavLink exact to="/">MapByFun</NavLink></div>
      </div>
      <div id="routeLink">{isLoaded && routeLinks}</div>
      <div id="communityLink">{isLoaded && communityLinks}</div>
      <div id="shopLink">{isLoaded && shopLinks}</div>
      <div id="logBtns">{isLoaded && sessionLinks}</div>
    </header>
    </>
  );
}

export default NavBar;
