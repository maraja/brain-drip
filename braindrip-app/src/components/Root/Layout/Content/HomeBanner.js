import React, { Component } from "react";
import { Typography, Card } from "antd";
import styled from "styled-components";
const { Title } = Typography;

import { Button } from "antd";
import banner from "#root/assets/img/banner1.png";

const BannerImage = styled.div`
  background-color: #ffffff;
  height: 400px;
  /*background-repeat: no-repeat;*/
  background-size: contain;
  background-position: center;
  background-image: url(${banner});
`;

class HomeBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="banner">
        <BannerImage>
          <Card
            style={{
              width: 360,
              padding: "25px",
              borderRadius: "10px",
              top: "20%",
              left: "5%",
              boxShadow: "0px 0px 5px 5px",
            }}
            size="small"
          >
            <Title level={2}>Your Learning Path </Title>
            <p>Build and explore thousands of Learning Paths.</p>
            <Button href="/signup" size="large">
              Join for Free
            </Button>
          </Card>
        </BannerImage>
      </section>
    );
  }
}

export default HomeBanner;
