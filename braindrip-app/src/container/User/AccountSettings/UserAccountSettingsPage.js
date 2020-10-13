import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { Row, Col, Menu, Avatar } from 'antd';
import Container from '#root/components/UI/Container/Container.style';
import UserCreateOrUpdateForm from './UserCreateOrUpdateForm';
import ChangePassWord from './ChangePassWordForm';
import {
  USER_PASSWORD_CHANGE_PAGE,
  USER_PROFILE_PAGE,
} from '#root/settings/constant';
import AccountSettingWrapper, {
  AccountSidebar,
  UserAvatar,
  SidebarMenuWrapper,
  ContentWrapper,
  UserName,
  FromWrapper,
} from './AccountSettings.style';

const AccountSettingNavLink = (props) => {
  const { match } = props;
  return (
    <SidebarMenuWrapper>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1">
          <NavLink exact to={`${match.url}`}>
            Edit Profile
          </NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to={`${match.url}${USER_PASSWORD_CHANGE_PAGE}`}>
            Change Password
          </NavLink>
        </Menu.Item>
      </Menu>
    </SidebarMenuWrapper>
  );
};

const AccountSettingRoute = (props) => {
  const { match } = props;
  return (
    <FromWrapper>
      <Route exact path={`${match.path}`} component={UserCreateOrUpdateForm} />
      <Route
        path={`${match.path}${USER_PASSWORD_CHANGE_PAGE}`}
        component={ChangePassWord}
      />
    </FromWrapper>
  );
};

export default function UserAccountSettingsPage(props) {
  return (
    <AccountSettingWrapper>
      <Container fullWidth={true}>
        <Row gutter={30}>
          <Col md={9} lg={6}>
            <AccountSidebar>
              <UserAvatar>
                <Avatar
                  src="http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png"
                  alt="avatar"
                />
                <ContentWrapper>
                  <UserName>Aziz Acharki Ahmedh</UserName>
                  <Link to={USER_PROFILE_PAGE}>View profile</Link>
                </ContentWrapper>
              </UserAvatar>
              <AccountSettingNavLink {...props} />
            </AccountSidebar>
          </Col>
          <Col md={15} lg={18}>
            <AccountSettingRoute {...props} />
          </Col>
        </Row>
      </Container>
    </AccountSettingWrapper>
  );
}
