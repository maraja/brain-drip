import React, { Component } from "react";
import { Layout, Input, Row, Col, Divider, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

class Upvotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Title level={2}>Upvotes</Title>
      </Content>
    );
  }
}

export default Upvotes;
