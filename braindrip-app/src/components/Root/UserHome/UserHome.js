import React, { Component } from "react";
import styled from "styled-components";
import Header from "#root/components/Root/Layout/Header";
import UserContent from "#root/components/Root/UserHome/UserContent.js";
import Footer from "#root/components/Root/Layout/Footer";
import { Divider } from "antd";

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem;
  width: 100%;
`;

class UserHome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Header isLoggedIn={true}/>
        <Divider />
        <UserContent />
        <Footer />
      </Wrapper>
    );
  }
}

export default UserHome;
