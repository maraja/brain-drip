import React, { Component } from "react";
import { Layout, Row, Col, Divider } from "antd";
const { Content } = Layout;
import HomeBanner from "./HomeBanner";
import PopularPaths from "./PopularPaths";
import BrainDripGoals from "./BrainDripGoals";

class BrainDripContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Row type="flex" align="middle">
          <Col span={16} offset={4}>
            <HomeBanner />
          </Col>
          <Col span={16} offset={4}>
            <Divider />
            <BrainDripGoals />
          </Col>
          <Col span={16} offset={4}>
            <Divider />
            <PopularPaths />
          </Col>
        </Row>
      </Content>
    );
  }
}

export default BrainDripContent;
