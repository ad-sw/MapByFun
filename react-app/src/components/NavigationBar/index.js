import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import ProfileButton from './ProfileButton';
import '../../../src/index.css'

function NavBar(){
  const [isLoaded, setIsLoaded] = useState(false)
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
        // await dispatch(getAllUsers());
        setIsLoaded(true)
    })();
}, [dispatch, sessionUser])

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
          <LogoutButton />
      </>
    );
  }

  return (

      <header className="navbar">
        <div id='linking'>
          <div id="homeLink"><NavLink exact to="/">MapByFun</NavLink></div>
        </div>
        <div id="logBtns">{isLoaded && sessionLinks}</div>
      </header>

  );
}

export default NavBar;
