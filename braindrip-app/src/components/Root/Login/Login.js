import React from "react";
import { Divider } from "antd";
import styled from "styled-components";

import LoginContent from "./LoginContent";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

function Login() {
  return (
    <Layout>
        <Container>
          <LoginContent />
        </Container>
      </Layout>
  )
}

export default Login
