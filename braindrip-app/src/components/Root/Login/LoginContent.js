import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/client";
import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
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

import SmallError from "#root/components/bd-components/SmallError"
import SmallSuccess from "#root/components/bd-components/SmallSuccess"

import { loginUser } from "#root/actions/userActions"

const { Text } = Typography;
// note REM units stand for relative to root element font-size.

const LOGIN_USER = gql`
    query userLogin($email: String!, $password: String!) {
        userLogin(email: $email, password: $password) {
          success
          message
          user {
            id
            firstName
            lastName
          }
        }
    }
`;

let email = ""
let password = ""

const LoginContent = () => {
  const [queryLogin, { loading, data, error }] = useLazyQuery(LOGIN_USER, {variables: {email, password}})

  const { user: reduxUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onFinish = async values => {
    email = values.email;
    password = values.password;
    let results = await queryLogin()
    // console.log(data, loading, results)
  }

  useEffect(() => {
    if (error) SmallError(error.message);
    else if (data) {
      SmallSuccess(data.userLogin.message);
      const { user } = data.userLogin;
      dispatch(loginUser(user));
    }
  }, [data])

  return (
    
    <section id="login-component">
      {reduxUser && <h1>{reduxUser.firstName}</h1>}
    <Row type="flex" align="middle">
      <Col span={24}>
        <div>
          <Text strong="true">Log in to Your BrainDrip Account!</Text>
        </div>
        <Divider />

        <Button
          type="primary"
          size="large"
          className="login-form-button ant-form-item"
        >
          Continue with Facebook
        </Button>
        <Button
          type="danger"
          size="large"
          className="login-form-button ant-form-item"
        >
          Continue with Google
        </Button>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
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
              Log in
            </Button>
            <div style={{ textAlign: "center" }}>
              or{" "}
              <a href="/forgot">
                Forgot Password
              </a>
            </div>
          </Form.Item>

          <Divider />
          <Form.Item style={{ textAlign: "center" }}>
            Don't have an account yet? {" "}
            <Link className="login-form-forgot" to="/signup">
              Sign up
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  </section>
  )
}

export default LoginContent
