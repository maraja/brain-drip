import React, { Component } from "react";
import styled from "styled-components";
import GoogleButton from "#root/components/Social/google";
import FacebookButton from "#root/components/Social/facebook";
import Header from "#root/components/Root/Layout/Header";
import Content from "#root/components/Root/Layout/Content";
import Footer from "#root/components/Root/Layout/Footer";
import { Divider } from "antd";

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem;
  width: 100%;
`;

class Home extends Component {
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

export default Home;
