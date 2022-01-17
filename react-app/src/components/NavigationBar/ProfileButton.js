import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  //full date format
  // let event = new Date(user.created_at);
  // let date = JSON.stringify(event)
  // date = date.slice(1,11).split('-')
  // date.push(date.shift())
  // date = date.join(',').replace(/\,/g, '/')
  let event = new Date(user?.created_at); //fri dec 31 2021
  let date = event.toLocaleDateString().slice(0,5) + event.toLocaleDateString().slice(7,9)


  return (
    <>
      <button onClick={openMenu} className="profile-button">
        {/* <i className="fa fa-user-circle" id="circle"/> */}
      </button>
      {showMenu && (
        <ul className="profile-dropdown" id="style">
          <li>{user.first_name}&nbsp;{user.last_name}</li>
          <li><i>Member Since</i> {date}</li>
          <li>
            <button className="logoutBtn" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
