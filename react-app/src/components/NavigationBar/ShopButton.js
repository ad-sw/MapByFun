import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function ShopButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();

  return (
    <>
      <div class="dropdown">
      <button class="route-button" activeClassName="link-active">Shop</button>
        <div class="dropdown-content">
          <NavLink to={`/404`} exact={true} activeClassName='active'>Local</NavLink>
          <NavLink to={`/404`} exact={true} activeClassName='active'>Tourist</NavLink>
        </div>
      </div>
    </>
  );
}

export default ShopButton;
