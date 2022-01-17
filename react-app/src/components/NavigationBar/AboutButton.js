import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function AboutButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  return (
    <>
      <div class="dropdown">
      <button class="route-button" activeClassName="link-active">About</button>
        <div class="dropdown-content">
          <NavLink to={`/about`} exact={true} activeClassName='active' id="communityLink">Our Story</NavLink>
          <NavLink to={`/ambassador-program`} exact={true} activeClassName='active' id="communityLink">Ambassadors</NavLink>
          <NavLink to={`/faq`} exact={true} activeClassName='active'>FAQs</NavLink>
        </div>
      </div>
    </>
  );
}

export default AboutButton;
