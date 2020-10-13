import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import {
  HOME_PAGE
} from '#root/settings/constant';

const FooterMenu = () => {
  return (
    <Menu>
      <Menu.Item key="0">
        <NavLink to={`${HOME_PAGE}`}>Learning Paths</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default FooterMenu;
