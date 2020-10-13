import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "#root/actions/userActions";

import {
  HOME_PAGE,
  LEARNING_PATHS,
  USER_ACCOUNT_SETTINGS_PAGE,
} from '#root/settings/constant';

const MobileMenu = ({ className }) => {
  // auth context
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logoutUser());
    history.push('/');
  }
  const { user: reduxUser } = useSelector(state => state.user);
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={HOME_PAGE}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={LEARNING_PATHS}>Learning Paths</NavLink>
      </Menu.Item>
      {reduxUser && (
        <Menu.Item key="3">
          <NavLink to={USER_ACCOUNT_SETTINGS_PAGE}>Account Settings</NavLink>
        </Menu.Item>
      )}
      {reduxUser && (
        <Menu.Item key="4">
          <button onClick={handleLogout}>Log Out</button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default MobileMenu;
