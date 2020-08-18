import { useMutation, useLazyQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import {
  Typography,
  Divider,
  Layout,
  Row,
  Col,
  Form,
  Input,
  Button,
} from "antd";
const { Text } = Typography;

import SmallError from "#root/components/bd-components/SmallError"
import SmallSuccess from "#root/components/bd-components/SmallSuccess"

import { signupUser } from "#root/actions/userActions"
import { SIGNUP_USER } from "#root/graphql/mutations"


function RegisterContent() {
  // for some reason, there is a glitch with useMutation.
  // you must override the onError callback to receive the error variable from the output.
  const [mutationSignup, { loading, data, error }] = useMutation(SIGNUP_USER, {onError: () => null})

  const { user: reduxUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onFinish = async values => {
    console.log(data, loading, error)
    let results = await mutationSignup({ variables: values })
    // console.log(data, loading, error)
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

  return (
    
    <section>
    <Row type="flex" align="middle">
      <Col span={24}>
        <div>
          <Text strong="true">Sign up to start creating paths!</Text>
        </div>
        <Divider />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your First Name!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="First Name"
            />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last Name!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Last Name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="login-form-button"
            >
              Sign up
            </Button>
          </Form.Item>
          <Form.Item style={{ textAlign: "center", fontSize: "10px" }}>
            By signing up, you agree to our{" "}
            <Link className="login-form-forgot" to="/terms">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link className="login-form-forgot" to="/privacy-policy">
              Privacy Policy
            </Link>
          </Form.Item>
          <Divider />
          <Form.Item style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Link className="login-form-forgot" to="/login">
              Log in
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </section>
  )
}

export default RegisterContent
