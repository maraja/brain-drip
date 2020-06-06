import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React, { Component } from "react";
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
const { Content } = Layout;
const { Text } = Typography;
// note REM units stand for relative to root element font-size.
const mutation = gql`
  mutation($email: String!, $password: String!) {
    createUserSession(email: $email, password: $password) {
      id
      user {
        email
        id
      }
    }
  }
`;
/*
const [createUserSession] = useMutation(mutation);
const {
  formState: { isSubmitting },
  handleSubmit,
  register,
} = useForm();

const onSubmit = handleSubmit(async ({ email, password }) => {
  const result = await createUserSession({
    variables: {
      email,
      password,
    },
  });

  console.log(result);
});*/
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
class Login extends Component {
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
                  <a className="login-form-forgot" href="/signup">
                    Sign up
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

export default Login;
