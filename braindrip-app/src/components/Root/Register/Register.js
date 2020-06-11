import React, { Component } from "react";
import { Divider } from "antd";
import styled from "styled-components";

import RegisterContent from "./RegisterContent";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Container>
          <RegisterContent />
        </Container>
      </Layout>
    );
  }
}

export default Register;
