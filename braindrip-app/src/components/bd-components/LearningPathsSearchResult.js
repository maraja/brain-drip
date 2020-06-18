import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";

import { Card, Row, Col, Typography } from "antd";

const { Paragraph } = Typography;

const GET_LEARNING_PATHS = gql`
    query getLearningPaths($searchString: String!) {
        learningPathSearch(searchString: $searchString) {
            id
            name
            description
        }
    }
`;


const LearningPathList = ({ searchString, rowSpan = 8 }) => {

  const { data, loading, error } = useQuery(GET_LEARNING_PATHS, { variables: { searchString } })
  if (loading) return <Paragraph>Loading ...</Paragraph>;
  console.log(searchString)

  return (
    <div className="site-card-wrapper">
      <Row>
        {data &&
          data.learningPathSearch.map((r) => (
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
