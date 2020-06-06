import React, { Component } from "react";
import { Row, Col, Typography } from "antd";
const { Title } = Typography;
import { MonitorOutlined, FireOutlined, ToolOutlined } from "@ant-design/icons";

class BrainDripGoals extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section
        className="goals"
        style={{ textAlign: "center", padding: "50px 0px 50px 0px" }}
      >
        <Title level={2}>Achive your goals with BrainDrip</Title>
        <Row>
          <Col span={8} order={1}>
            <MonitorOutlined style={{ fontSize: "30px", padding: "20px" }} />
            <Title level={4}>Learn the latest skills</Title>
          </Col>
          <Col span={8} order={2}>
            <FireOutlined style={{ fontSize: "30px", padding: "20px" }} />
            <Title level={4}>Get ready for a career</Title>
          </Col>
          <Col span={8} order={3}>
            <ToolOutlined style={{ fontSize: "30px", padding: "20px" }} />
            <Title level={4}>Training and development programs</Title>
          </Col>
        </Row>
      </section>
    );
  }
}

export default BrainDripGoals;
