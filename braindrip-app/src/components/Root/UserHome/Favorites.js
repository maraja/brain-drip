import React, { Component } from "react";
import { Layout, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Content>
        <Title level={2}>Favorites</Title>
      </Content>
    );
  }
}

export default Favorites;
