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
  background-size: cover;
  background-position: center;
  background-image: url(${banner});
`;

const HomeBanner = () => {
  return (
    <section className="banner">
      <BannerImage />
      <AutoCompleteSearch />
    </section>
  );
}


export default HomeBanner;
