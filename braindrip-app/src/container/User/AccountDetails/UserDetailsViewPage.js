import React, { useContext, Fragment } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import isEmpty from 'lodash/isEmpty';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosAdd,
} from 'react-icons/io';
import { Menu, Popover } from 'antd';
import Container from '#root/components/UI/Container/Container';
import Image from '#root/components/UI/Image/Image';
import Heading from '#root/components/UI/Heading/Heading';
import Text from '#root/components/UI/Text/Text';
import { ProfilePicLoader } from '#root/components/UI/ContentLoader/ContentLoader';
import Loader from '#root/components/Loader/Loader';
import AuthProvider  from '#root/context/AuthProvider';
import UserItemLists from './UserItemLists';
import UserFavItemLists from './UserFavItemLists';
import UserContact from './UserContact';
import useDataApi from '#root/library/hooks/useDataApi';
import {
  CREATE_LEARNING_PATH,
  USER_FAVOURITES,
  USER_LEARNING_BUCKETS,
} from '#root/settings/constant';
import UserDetailsPage, {
  NavigationArea,
} from './UserDetails.style';

const ProfileNavigation = (props) => {
  const { match, className } = props;
  const { user: reduxUser } = useSelector(state => state.user);
  return (
    <NavigationArea>
      <Container fluid={true}>
        <Menu className={className}>
          <Menu.Item key="0">
            <NavLink exact to={`${match.url}`}>
              My Learning Paths
            </NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to={`${match.url}${USER_LEARNING_BUCKETS}`}>
              My Learning Buckets
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to={`${match.url}${USER_FAVOURITES}`}>
              Favourites
            </NavLink>
          </Menu.Item>
        </Menu>

        {reduxUser && (
          <Link className="add_card" to={CREATE_LEARNING_PATH}>
            <IoIosAdd /> Create Learning Path
          </Link>
        )}
      </Container>
    </NavigationArea>
  );
};

const ProfileRoute = (props) => {
  const { match } = props;
  return (
    <Container fluid={true}>
      <Route exact path={`${match.path}`} component={UserItemLists} />
      <Route
        path={`${match.path}${USER_LEARNING_BUCKETS}`}
        component={UserFavItemLists}
      />
      <Route
        path={`${match.path}${USER_FAVOURITES}`}
        component={UserContact}
      />
    </Container>
  );
};

export default function UserDetailsViewPage(props) {
  return (
    <UserDetailsPage>
      <AuthProvider>
        <ProfileNavigation {...props} />
        <ProfileRoute {...props} />
      </AuthProvider>
    </UserDetailsPage>
  );
}
