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

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('mouseover', closeMenu);

    return () => document.removeEventListener("mouseover", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button onClick={openMenu} className="shop-button">
        Shop
      </button>
      {showMenu && (
        <ul className="shop-dropdown" id="style">
          <li><NavLink to={`/404`} exact={true} activeClassName='active'>
          Shop
          </NavLink></li>
        </ul>
      )}
    </>
  );
}

export default ShopButton;
