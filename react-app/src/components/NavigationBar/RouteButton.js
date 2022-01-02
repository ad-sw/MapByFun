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
      <div class="dropdown">
      <div className="ttBtn"><button class="route-button" activeClassName="link-active">Routes</button></div>
        <div class="dropdown-content">
          <NavLink to={`/routes/new`} exact={true} activeClassName='active' id="communityLink">Create Route</NavLink>
          <NavLink to={`/users/${sessionUser.id}/routes`} exact={true} activeClassName='active'>My Routes</NavLink>
        </div>
      </div>
    </>
  );
}

export default RouteButton;
