import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";

import { Card, Row, Col, Typography } from "antd";

const { Paragraph } = Typography;

const GET_LEARNING_PATHS = gql`
  {
    learningPaths {
      id
      name
      description
      difficulty
    }
  }
`;

const GET_LEARNING_PATHS_BY_USER = gql`
  {
    userLearningPaths {
      id
      name
      description
      difficulty
    }
  }
`;

const LearningPathList = ({ isUser = false, rowSpan = 8 }) => {
  const { data, loading, error } = useQuery(
    isUser ? GET_LEARNING_PATHS_BY_USER : GET_LEARNING_PATHS
  );

  if (loading) return <Paragraph>Loading ...</Paragraph>;
  if (data && isUser) {
    data.learningPaths = data.userLearningPaths;
  }
  return (
    <div className="site-card-wrapper">
      <Row>
        {data &&
          data.learningPaths.map((r) => (
            <Col key={r.id} span={rowSpan}>
              <Card
                title={r.name}
                extra={<a href={`/learning-path/id/${r.id}`}>Details</a>}
              >
                {r.description}
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

LearningPathList.propTypes = {};

export default LearningPathList;
