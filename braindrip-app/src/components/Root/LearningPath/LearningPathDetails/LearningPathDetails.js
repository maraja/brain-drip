import React, { Component } from "react";
import { Divider, Row, Col } from "antd";
import styled from "styled-components";

import Header from "#root/components/Root/Layout/Header";
import LearningPathDetailsContent from "#root/components/bd-components/LearningPathDetails.js";
import Footer from "#root/components/Root/Layout/Footer";
const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 0.5rem;
  width: 100%;
`;

const LearningPathDetails = (props) => {

  return (
    <Wrapper>
      <Header isLoggedIn={false} />
      <Divider />
      <Row type="flex" align="middle">
        <Col span={16} offset={4}>
          <LearningPathDetailsContent id={props.match.params.id} />
        </Col>
      </Row>
      <Footer />
    </Wrapper>
  );
};

export default LearningPathDetails;
