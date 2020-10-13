import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import Logo from '#root/components/UI/Logo/Logo';
import { REGISTRATION_PAGE } from '#root/settings/constant';
import SignInForm from './SignInForm';
import SocialLogin from '../SocialLogin';
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from '../Auth.style';

import signInImage from '#root/assets/img/login-page-bg.jpg';
import braindrip from '#root/assets/img/logo/logo_1.svg';

const SignIn = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Logo withLink linkTo="/" src={braindrip} title="braindrip." />
        <Title>Welcome Back</Title>
        <TitleInfo>Please log into your account</TitleInfo>
        <SignInForm />
        <Divider>Or log in with </Divider>
        <SocialLogin />
        <Text>
          Don't Have an Account?&nbsp;
          <Link to={REGISTRATION_PAGE}>Registration</Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signInImage})`,
            backgroundPosition: 'center center',
            height: '100vh',
            backgroundSize: 'cover',
          }}
        />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignIn;
