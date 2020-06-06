import React, { Component } from "react";
import { Layout, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

class Downvotes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Title level={2}>Downvotes</Title>
      </Content>
    );
  }
}

export default Downvotes;
