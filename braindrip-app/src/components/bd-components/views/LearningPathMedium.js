import React from 'react'

import { Card, Row, Col, Typography, Divider } from "antd";

const { Title, Text, Paragraph } = Typography;

function LearningPathMedium({ learningPath }) {
    return (
      <>
        <Title level={4}>
          {learningPath.name}
        </Title>

      <Paragraph>
          <Text>{learningPath.description}</Text>
      </Paragraph>
      <Paragraph>
          <Text>Difficulty: {learningPath.difficulty}</Text>
      </Paragraph>
      <Paragraph>
          <Text>{learningPath.learningPathResources ? learningPath.learningPathResources.length : 0} Resources</Text>
      </Paragraph>
      </>
    )
}

export default LearningPathMedium
