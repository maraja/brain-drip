import React, { Component } from "react";
import { Divider } from "antd";
import styled from "styled-components";

import Header from "#root/components/Root/Layout/Header";
import Content from "./RegisterContent";
import Footer from "#root/components/Root/Layout/Footer";
const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem;
  width: 100%;
`;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Header isLoggedIn={false}/>
        <Divider />
        <Content />
        <Footer />
      </Wrapper>
    );
  }
}

export default Register;
