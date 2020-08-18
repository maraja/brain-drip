import React from "react";
import { Layout, Row, Col, Space, Divider, Typography } from "antd";
const { Footer } = Layout;
const { Text } = Typography;
import Social from "./Social";
import ImportantLinks from "./ImportantLinks";

import styled from 'styled-components'

const BDFooter = styled(Footer)`
`

const BrainDripFooter = () => {
  return (
    <div className="footer">
      <BDFooter>
        <Divider />
        <ImportantLinks />
        <Divider />
        <Row>
          <Col span={6} order={1}>
            <Text> © 2020 BrainDrip Inc. All rights reserved.</Text>
          </Col>
          <Col span={12} order={3}></Col>
          <Col span={6} order={4}>
            <Space style={{ float: "right" }}>
              <Social />
            </Space>
          </Col>
        </Row>
      </BDFooter>
    </div>
  );
};

export default BrainDripFooter;
