import React, { useState, useRef } from 'react';
import { Menu } from 'antd';
import useOnClickOutside from '#root/library/hooks/useOnClickOutside';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutUser } from "#root/actions/userActions";
import {
  USER_PROFILE_PAGE,
  USER_ACCOUNT_SETTINGS_PAGE,
  CREATE_LEARNING_PATH,
} from '#root/settings/constant';

const ProfileMenu = ({ avatar, history }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const handleDropdown = () => {
    setState(!state);
  };
  const closeDropdown = () => {
    setState(false);
  };
  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => setState(false));
  function handleLogout() {
    dispatch(logoutUser());
    history.push('/');
  }

  return (
    <div className="avatar-dropdown" ref={dropdownRef}>
      <div className="dropdown-handler" onClick={handleDropdown}>
        {avatar}
      </div>

      <Menu className={`dropdown-menu ${state ? 'active' : 'hide'}`}>
        <Menu.Item onClick={closeDropdown} key="0">
          <NavLink to={USER_PROFILE_PAGE}>View Profile</NavLink>
        </Menu.Item>
        <Menu.Item onClick={closeDropdown} key="1">
          <NavLink to={CREATE_LEARNING_PATH}>Create Learning Path</NavLink>
        </Menu.Item>
        <Menu.Item onClick={closeDropdown} key="2">
          <NavLink to={USER_ACCOUNT_SETTINGS_PAGE}>Account Settings</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <button onClick={handleLogout}>Log Out</button>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(ProfileMenu);
