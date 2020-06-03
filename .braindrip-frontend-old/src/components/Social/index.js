import React from 'react'
import SocialLogin from 'react-social-login'

import { Button, Icon } from 'antd';
 
const LoginButton = ({ children, type, triggerLogin, ...props }) => {
  let icon = type === "facebook" 
    ? <Icon type="facebook" style={{fontSize: 25}} /> 
    : <Icon type="google" style={{fontSize: 25}} />
  return (
    <Button onClick={triggerLogin} {...props}>
      {icon} <span className="text">{ children }</span>
    </Button>
  )
}
 
export default SocialLogin(LoginButton)
