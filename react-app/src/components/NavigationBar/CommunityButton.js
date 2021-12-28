import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function CommunityButton({ user }) {
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

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      <button onClick={openMenu} className="community-button">
        Community
      </button>
      {showMenu && (
        <ul className="community-dropdown" id="style">
          <li><NavLink to={`/users/${sessionUser.id}/friends`} exact={true} activeClassName='active'>
          My Friends
          </NavLink></li>
          <li><NavLink to={`/users/${sessionUser.id}/people`} exact={true} activeClassName='active'>
          Find Friends
          </NavLink></li>
        </ul>
      )}
    </>
  );
}

export default CommunityButton;
