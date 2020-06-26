import React from 'react'

import { Card, Row, Col, Typography, Divider } from "antd";

const { Title, Text, Paragraph } = Typography;

function LearningPathLarge({ learningPath }) {
    return (
        <>
        <Col span={16} offset={4}>
          <Title level={2}>
            {learningPath.name}
          </Title>

          <Paragraph>
              <Text>{learningPath.description}</Text>
          </Paragraph>
          <Paragraph>
              <Text>Difficulty: {learningPath.difficulty}</Text>
          </Paragraph>
        </Col>
        <Divider />
        <Row>
          {learningPath.learningPathResources &&
            learningPath.learningPathResources.map((r) => (
              <Col key={r.id} span={rowSpan}>
                <Card
                  title={`${r.type}: ${r.topic}`}
                  extra={
                    <a href={r.url} target="blank_">
                      Resource
                    </a>
                  }
                >
                  {r.sequenceNumber} <br />
                  {r.description}
                </Card>
              </Col>
            ))}
        </Row>
        </>
    )
}

export default LearningPathLarge
