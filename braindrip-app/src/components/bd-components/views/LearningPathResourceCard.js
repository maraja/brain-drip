import React from 'react'
import { Link } from 'react-dom'

import { Card, Row, Col, Typography, Divider, Space } from "antd";

const { Title, Text, Paragraph } = Typography;

function LearningPathResourceCard({ learningPath }) {
    return (
        <>
          {learningPath.learningPathResources &&
            learningPath.learningPathResources.map((r) => (
              <Col key={r.id} span={24}>
                <Card
                  title={`${r.type}: ${r.topic}`}
                  style={{marginBottom: 25}}
                >
                    <a href={r.url} target="_blank">Click here for resource!</a><br />
                  {r.sequenceNumber} <br />
                  {r.description}
                </Card>
              </Col>
            ))}
        </>
    )
}

export default LearningPathResourceCard
