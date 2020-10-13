import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout as LayoutWrapper } from 'antd';
import useWindowSize from '#root/library/hooks/useWindowSize';
import LayoutProvider from '#root/context/LayoutProvider';
import {
  LEARNING_PATHS,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  USER_PROFILE_PAGE,
  USER_ACCOUNT_SETTINGS_PAGE,
  CREATE_LEARNING_PATH,
  PRIVACY_PAGE,
  CHANGE_PASSWORD_PAGE,
  FORGET_PASSWORD_PAGE,
  USER_IMAGE_EDIT_PAGE,
  USER_PASSWORD_CHANGE_PAGE,
} from '#root/settings/constant';
import Header from './Header/Header';
import Footer from './Footer/Footer';
const { Content } = LayoutWrapper;

export default withRouter(function Layout({ children, location }) {
  const { width } = useWindowSize();
  const singlePageUrlFromConst = CREATE_LEARNING_PATH.split('/');
  const singlePageUrlFormLocation = location.pathname.split('/');

  return (
    <LayoutProvider>
      {location.pathname === LOGIN_PAGE ||
      location.pathname === CHANGE_PASSWORD_PAGE ||
      location.pathname === FORGET_PASSWORD_PAGE ||
      location.pathname === REGISTRATION_PAGE ? (
        <Content>{children}</Content>
      ) : (
        <Fragment>
          <Header />
          <Content>{children}</Content>
          
          <Fragment>
              <Footer />
              {singlePageUrlFormLocation[1] === singlePageUrlFromConst[1] && (
                <Fragment>
                  {width < 1200 && <div style={{ height: '74px' }} />}
                </Fragment>
              )}
            </Fragment>
        </Fragment>
      )}
    </LayoutProvider>
  );
});
