import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from '../Social';
import {notification, message} from 'antd';

const clientID = '640438313452270'

class FacebookButton extends React.Component {

  async responseFacebook(response) {
    console.log(response);
  }

  responseFacebookFail(response) {
    console.log(response);
  }

  render() {
    return (
      <div>
          <SocialButton
            provider="facebook"
            type="facebook"
            scope="public_profile"
            appId={clientID}
            className={'facebook-button'}
            onLoginSuccess={this.responseFacebook.bind(this)}
            onLoginFailure={this.responseFacebookFail.bind(this)}
          >
            Facebook
          </SocialButton>
      </div>
    );
  }
}

export default FacebookButton;
