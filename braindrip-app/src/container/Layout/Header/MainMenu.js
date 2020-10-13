import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE,
  LEARNING_PATHS
} from '#root/settings/constant';

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LEARNING_PATHS}`}>Learning Paths</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
