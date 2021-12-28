import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function RouteButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();


  return (
    <>
      {/* <button onClick={openMenu} className="route-button">
        Routes
      </button> */}
      {showMenu && (
        <ul className="route-dropdown" id="style">
          <li><NavLink to={`/routes/new`} exact={true} activeClassName='active'>
          Create Route
          </NavLink></li>
          <li><NavLink to={`/users/${sessionUser.id}/routes`} exact={true} activeClassName='active'>
          My Routes
          </NavLink></li>
        </ul>
      )}
    </>
  );
}

export default RouteButton;
