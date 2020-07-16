import React from 'react'

import { Link } from 'react-router-dom'

import { Card, Row, Col, Typography, Divider } from "antd";

const { Title, Text, Paragraph } = Typography;

function LearningPathListItem({ learningPath }) {
    return (
        <>
          <Text>{learningPath.name}</Text>
        </>
    )
}

export default LearningPathListItem
