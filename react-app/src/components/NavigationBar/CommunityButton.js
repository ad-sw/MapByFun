import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';
import '../../../src/index.css';

function CommunityButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();


  return (
    <>
      <div class="dropdown">
      <button class="route-button" activeClassName="link-active">Community</button>
        <div class="dropdown-content">
          <NavLink to={`/users/${sessionUser.id}/friends`} exact={true} id="communityLink">My Friends</NavLink>
          <NavLink to={`/users/${sessionUser.id}/people`} exact={true}>Find Friends</NavLink>
        </div>
      </div>
    </>
  );
}

export default CommunityButton;
