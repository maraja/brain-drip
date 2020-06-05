import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { Component } from "react";
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
const { Content } = Layout;
const { Text } = Typography;
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
class RegisterContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <section>
          <Row type="flex" align="middle">
            <Col span={4} offset={10}>
              <div>
                <Text strong="true">Sign up and create your Path!</Text>
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
                  name="firstname"
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
                  name="lastname"
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
                  <a className="login-form-forgot" href="/terms">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a className="login-form-forgot" href="/terms/privacy">
                    Privacy Policy
                  </a>
                </Form.Item>
                <Divider />
                <Form.Item style={{ textAlign: "center" }}>
                  Already have an account?{" "}
                  <a className="login-form-forgot" href="/login">
                    Log in
                  </a>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </section>
      </Content>
    );
  }
}

export default RegisterContent;
