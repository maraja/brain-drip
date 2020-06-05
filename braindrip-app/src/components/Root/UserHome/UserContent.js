import React, { Component } from "react";
import UserNavigation from "./UserNavigation";
import { Layout, Input, Row, Col, Divider, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

class UserContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Row type="flex" align="middle">
          <Col span={16} offset={4}>
            <Title level={2}>My BrainDrip</Title>
          </Col>
          <Col span={16} offset={4}>
            <UserNavigation/>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default UserContent;
