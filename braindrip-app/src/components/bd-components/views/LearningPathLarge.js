import React from 'react'
import { Link } from 'react-dom'

import { Card, Row, Col, Typography, Divider, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

import LearningPathResourceCard from './LearningPathResourceCard'

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
          <Paragraph>
              <Text>Tags: &nbsp;
              {learningPath.tags &&
                learningPath.tags.map((r) => (
                      <>
                    {r.name}, &nbsp;
                    </>
                ))}
              </Text>
          </Paragraph>
        </Col>
        <Divider />
        <Row>
          <LearningPathResourceCard learningPath={learningPath} />
        </Row>
        </>
    )
}

export default LearningPathLarge
