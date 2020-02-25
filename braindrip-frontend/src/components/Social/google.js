import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {withRouter, Link} from 'react-router-dom';
import SocialButton from '../Social';
import {notification, message} from 'antd';

/** redux actions */
// import {sendGoogleAuthRequest} from '../../actions/social';

import axios from 'axios';

const clientID = '660332362380-uem3bp3emnsbq9k4dvdsdikfsmtgg5np.apps.googleusercontent.com'

class GoogleButton extends React.Component {
//   state = {
//   };

  async responseGoogle(response) {
    console.log("success", response);
  }

  async responseGoogleFail(response) {
    console.log("fail", response);
  }

  render() {
    return (
      <div>
          <SocialButton
            provider="google"
            type="google"
            className="google-button"
            appId={clientID}
            onLoginSuccess={this.responseGoogle.bind(this)}
            onLoginFailure={this.responseGoogleFail.bind(this)}
          >
            Google
          </SocialButton>
      </div>
    );
  }
}

// GoogleButton.propTypes = {
//   user_type: PropTypes.string.isRequired
// };

// const mapStateToProps = (state) => {
//   const isLoggedIn = !!state.app.accessToken;
//   return {isLoggedIn};
// };

// const mapDispatchToProps = (dispatch) => ({
//   handleAuth: (values, history) => dispatch(sendGoogleAuthRequest(values, history))
// });

export default GoogleButton;
