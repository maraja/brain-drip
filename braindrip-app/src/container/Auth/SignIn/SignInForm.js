import React, { useContext,  useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useLazyQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch, Button } from 'antd';
import FormControl from '#root/components/UI/FormControl/FormControl';
import { FORGET_PASSWORD_PAGE } from '#root/settings/constant';
import { FieldWrapper, SwitchWrapper, Label } from '../Auth.style';
import SmallError from "#root/components/bd-components/SmallError"
import SmallSuccess from "#root/components/bd-components/SmallSuccess"
import { loginUser } from "#root/actions/userActions"
import { LOGIN_USER } from "#root/graphql/queries"
import { useAuthToken } from "#root/auth/authToken";

const SignInForm = () => {
  const { control, errors, handleSubmit } = useForm();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector(state => state.user);

  const [queryLogin, { loading, data, error }] = useLazyQuery(LOGIN_USER, { variables: { email, password } })
  const [_, setAuthToken, removeAuthtoken] = useAuthToken();
  const { user: reduxUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onFinish = async values => {
    setEmail(values.email);
    setPassword(values.password);
    removeAuthtoken()
    let results = await queryLogin()
    // console.log(data, loading, results)
  }

  useEffect(() => {
    setIsLoggedIn(user ? true : false)
    if (error) SmallError(error.message);
    else if (data) {
      SmallSuccess(data.userLogin.message);
      const { user, token } = data.userLogin;
      setAuthToken(token);
      dispatch(loginUser(user));
      setIsLoggedIn(true)
    }
  }, [data, error]);
  
  if (isLoggedIn) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <form onSubmit={handleSubmit(onFinish)}>
      <FormControl
        label="Email"
        htmlFor="email"
        error={
          errors.email && (
            <>
              {errors.email?.type === 'required' && (
                <span>This field is required!</span>
              )}
              {errors.email?.type === 'pattern' && (
                <span>Please enter a valid email address!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          type="email"
          id="email"
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          }}
        />
      </FormControl>
      <FormControl
        label="Password"
        htmlFor="password"
        error={
          errors.password && (
            <>
              {errors.password?.type === 'required' && (
                <span>This field is required!</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span>Password must be at lest 6 characters!</span>
              )}
              {errors.password?.type === 'maxLength' && (
                <span>Password must not be longer than 20 characters!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input.Password />}
          defaultValue=""
          control={control}
          id="password"
          name="password"
          rules={{ required: true, minLength: 6, maxLength: 20 }}
        />
      </FormControl>
      <FieldWrapper>
        <SwitchWrapper>
          <Controller
            as={<Switch />}
            name="rememberMe"
            defaultValue={false}
            valueName="checked"
            control={control}
          />
          <Label>Remember Me</Label>
        </SwitchWrapper>
        <Link to={FORGET_PASSWORD_PAGE}>Forget Password ?</Link>
      </FieldWrapper>
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: '100%' }}
      >
        <MdLockOpen />
        Login
      </Button>
    </form>
  );
};

export default SignInForm;
