import React from "react";
import { Typography, Card } from "antd";
import styled from "styled-components";
const { Title } = Typography;

import { Button } from "antd";
import banner from "#root/assets/img/banner1.png";


import AutoCompleteSearch from "#root/components/bd-components/AutoCompleteSearch.js";

const BannerImage = styled.div`
  background-color: #ffffff;
  height: 400px;
  /*background-repeat: no-repeat;*/
  background-size: contain;
  background-position: center;
  background-image: url(${banner});
`;

const HomeBanner = () => {
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
      <AutoCompleteSearch />
    </section>
  );
}


export default HomeBanner;
