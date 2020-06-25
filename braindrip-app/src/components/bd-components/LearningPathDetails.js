import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Card, Row, Col, Typography, Divider } from "antd";

const { Title, Text, Paragraph } = Typography;

const GET_LEARNING_PATH_DETAIL = gql`
  query getLearningPath($id: String!) {
    learningPath(id: $id) {
      id
      name
      description
      difficulty
      learningPathResources {
        id
        url
        type
        topic
        description
        sequenceNumber
      }
    }
  }
`;

const LearningPathDetails = ({ id, rowSpan = 8 }) => {
  const { data, loading, error } = useQuery(GET_LEARNING_PATH_DETAIL, {
    variables: { id },
  });
  if (loading) return <Paragraph>Loading ...</Paragraph>;
  if (data)
    return (
      <div className="site-card-wrapper">
        <Col span={16} offset={4}>
          <Title level={3}>
            {data.learningPath.name}({data.learningPath.difficulty})
          </Title>

          <Text>{data.learningPath.description}</Text>
        </Col>
        <Divider />
        <Row>
          {data.learningPath &&
            data.learningPath.learningPathResources.map((r) => (
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
      </div>
    );
};

LearningPathDetails.propTypes = {};

export default LearningPathDetails;
