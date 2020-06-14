import React from "react";
import { Divider } from "antd";
import styled from "styled-components";

import RegisterContent from "./RegisterContent";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

function Register() {
  return (
    <Layout>
        <Container>
          <RegisterContent />
        </Container>
      </Layout>
  )
}

export default Register
