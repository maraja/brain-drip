import React from 'react'

import { Link } from 'react-router-dom'

import { Card, Row, Col, Typography, Divider } from "antd";

const { Title, Text, Paragraph } = Typography;

function LearningPathSmall({ learningPath }) {
    return (
        <>
          <Link to={`/learning-path/id/${learningPath.id}`}><Title level={4}>
            {learningPath.name}
          </Title></Link>

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

export default LearningPathSmall
