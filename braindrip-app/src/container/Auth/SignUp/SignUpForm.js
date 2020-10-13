import React, { useEffect, useState } from 'react';
import { useMutation } from "@apollo/client";
import { Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Link } from "react-router-dom";
import { MdLockOpen } from 'react-icons/md';
import { Input, Switch,   Form, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import FormControl from '#root/components/UI/FormControl/FormControl';


import SmallError from "#root/components/bd-components/SmallError"
import SmallSuccess from "#root/components/bd-components/SmallSuccess"

import { signupUser } from "#root/actions/userActions"
import { SIGNUP_USER } from "#root/graphql/mutations"

// @ todo add sucess message
export default () => {
  const { control, watch, errors, handleSubmit } = useForm({
    mode: 'onChange',
  });
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const [mutationSignup, { loading, data, error }] = useMutation(SIGNUP_USER, {onError: () => null})

  const { user: reduxUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onFinish = async values => {
    let results = await mutationSignup({ variables: values })
  }

  useEffect(() => {
    console.log(data, loading, error)
    if (error) SmallError(error.message);
    else if (data) {
      SmallSuccess(data.createUser.message);
      const { newUser } = data.createUser;
      dispatch(signupUser(newUser));
    }
  }, [data, error])

  if (reduxUser) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return (
    <form onSubmit={handleSubmit(onFinish)}>
      <FormControl
        label="First Name"
        htmlFor="firstName"
        error={
          errors.firstName && (
            <>
              {errors.firstName?.type === 'required' && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          id="firstName"
          name="firstName"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl>
      <FormControl
        label="Last Name"
        htmlFor="lastName"
        error={
          errors.username && (
            <>
              {errors.username?.type === 'required' && (
                <span>This field is required!</span>
              )}
            </>
          )
        }
      >
        <Controller
          as={<Input />}
          id="lastName"
          name="lastName"
          defaultValue=""
          control={control}
          rules={{
            required: true,
          }}
        />
      </FormControl>
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
      <FormControl
        label="Confirm password"
        htmlFor="confirmPassword"
        error={
          confirmPassword &&
          password !== confirmPassword && (
            <span>Your password is not same!</span>
          )
        }
      >
        <Controller
          as={<Input.Password />}
          defaultValue=""
          control={control}
          id="confirmPassword"
          name="confirmPassword"
        />
      </FormControl>
      <Form.Item style={{ textAlign: "center", fontSize: "14px" }}>
            By signing up, you agree to our{" "}
            <Link className="login-form-forgot" to="/terms">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link className="login-form-forgot" to="/privacy-policy">
              Privacy Policy
            </Link>
          </Form.Item>
      <Button
        className="signin-btn"
        type="primary"
        htmlType="submit"
        size="large"
        style={{ width: '100%' }}
      >
        <MdLockOpen />
        Register
      </Button>
    </form>
  );
};
