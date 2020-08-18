import React from 'react'
import { Link } from 'react-dom'

import { Card, Row, Col, Typography, Divider, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

import LearningBucketResourceCard from './LearningBucketResourceCard'

function LearningBucketLarge({ learningBucket }) {
    return (
        <>
        <Col span={16} offset={4}>
          <Title level={2}>
            {learningBucket.name}
          </Title>

          <Paragraph>
              <Text>{learningBucket.description}</Text>
          </Paragraph>
          <Paragraph>
              <Text>Tags: &nbsp;
              {learningBucket.tags &&
                learningBucket.tags.map((r) => (
                      <>
                    {r.name}, &nbsp;
                    </>
                ))}
              </Text>
          </Paragraph>
        </Col>
        <Divider />
        <Row>
          <LearningBucketResourceCard learningBucket={learningBucket} />
        </Row>
        </>
    )
}

export default LearningBucketLarge
