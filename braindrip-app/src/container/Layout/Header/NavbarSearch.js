import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import MapAutoComplete from '#root/components/Map/MapAutoComplete';
import { setStateToUrl, getStateFromUrl } from '#root/library/helpers/url_handler';
import { mapDataHelper } from '#root/components/Map/mapDataHelper';
import { LISTING_POSTS_PAGE } from '#root/settings/constant';
import { NavbarSearchWrapper } from './Header.style';

const NavbarSearch = (props) => {

  return (
    <NavbarSearchWrapper className="navbar_search">
      <MapAutoComplete updatevalue={(value) => updatevalueFunc(value)} />
      <FiSearch />
    </NavbarSearchWrapper>
  );
};

export default withRouter(NavbarSearch);
