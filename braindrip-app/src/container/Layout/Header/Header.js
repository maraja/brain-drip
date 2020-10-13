import React, { useState, useContext } from 'react';
import Sticky from 'react-stickynode';
import { withRouter } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { Button, Drawer } from 'antd';
import Logo from '#root/components/UI/Logo/Logo';
import Text from '#root/components/UI/Text/Text';
import TextLink from '#root/components/UI/TextLink/TextLink';
import Navbar from '#root/components/Navbar/Navbar';
import { useSelector } from "react-redux";
import { LayoutContext } from '#root/context/LayoutProvider';
import useWindowSize from '#root/library/hooks/useWindowSize';
import { USER_PROFILE_PAGE } from '#root/settings/constant';
import AuthMenu from './AuthMenu';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import ProfileMenu from './ProfileMenu';
import HeaderWrapper, {
  MobileNavbar,
  CloseDrawer,
  AvatarWrapper,
  AvatarImage,
  AvatarInfo,
  LogoArea,
} from './Header.style';

import braindrip from '#root/assets/img/logo/logo_1.svg';
const avatarImg = `http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png`;

const LogoIcon = () => (
  <svg width="25" height="27.984" viewBox="0 0 25 27.984">
  </svg>
);

export default withRouter(function Header({ location }) {
  const [{ searchVisibility }] = useContext(LayoutContext);
  const { user: reduxUser } = useSelector(state => state.user);
  const { width } = useWindowSize();
  const [state, setState] = useState(false);

  const sidebarHandler = () => {
    setState(!state);
  };

  const headerType = 'default';

  return (
    <HeaderWrapper>
      <Sticky
        top={-1}
        innerZ={10001}
        activeClass="isHeaderSticky"
      >
        {width > 991 ? (
          <Navbar
            logo={
              <>
                {headerType === 'transparent' && <LogoIcon />}
                <Logo
                  withLink
                  linkTo="/"
                  src={braindrip}
                  title="Braindrip."
                />
              </>
            }
            navMenu={<MainMenu />}
            authMenu={<AuthMenu />}
            isLogin={reduxUser? true: false}
            avatar={<Logo src={avatarImg} />}
            profileMenu={<ProfileMenu avatar={<Logo src={avatarImg} />} />}
            headerType={headerType}
            location={location}
            searchVisibility={searchVisibility}
          />
        ) : (
          <MobileNavbar className={headerType}>
            <LogoArea>
              <>
                {headerType === 'transparent' && <LogoIcon />}
                <Logo
                  withLink
                  linkTo="/"
                  src={braindrip}
                  title="Braindrip."
                />
              </>
            </LogoArea>
            <Button
              className={`hamburg-btn ${state ? 'active' : ''}`}
              onClick={sidebarHandler}
            >
              <span />
              <span />
              <span />
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={sidebarHandler}
              width="285px"
              className="mobile-header"
              visible={state}
            >
              <CloseDrawer>
                <button onClick={sidebarHandler}>
                  <IoIosClose />
                </button>
              </CloseDrawer>
              {reduxUser ? (
                <AvatarWrapper>
                  <AvatarImage>
                    <Logo src={avatarImg} />
                  </AvatarImage>
                  <AvatarInfo>
                    <Text as="h3" content="Nova Scotia" />
                    <TextLink
                      link={USER_PROFILE_PAGE}
                      content="View Profile"
                    />
                  </AvatarInfo>
                </AvatarWrapper>
              ) : (
                <AuthMenu className="auth-menu" />
              )}
              <MobileMenu className="main-menu" />
            </Drawer>
          </MobileNavbar>
        )}
      </Sticky>
    </HeaderWrapper>
  );
});
