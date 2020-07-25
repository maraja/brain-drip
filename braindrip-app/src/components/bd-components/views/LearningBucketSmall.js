import React from 'react'

import { Link } from 'react-router-dom'

import { Card, Row, Col, Typography, Divider } from "antd";

const { Title, Text, Paragraph } = Typography;

function LearningBucketSmall({ learningBucket }) {
    console.log(learningBucket);
    return (
        <>
          <Link to={`/learning-bucket/id/${learningBucket.id}`}><Title level={4}>
            {learningBucket.name}
          </Title></Link>

        <Paragraph>
            <Text>{learningBucket.description}</Text>
        </Paragraph>
        <Paragraph>
            <Text>Tags: {learningBucket.description}</Text>
        </Paragraph>
        <Paragraph>
            <Text>{learningBucket.learningBucketResources ? learningBucket.learningBucketResources.length : 0} Resources</Text>
        </Paragraph>
        </>
    )
}

export default LearningBucketSmall
