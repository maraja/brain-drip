import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Card, Row, Col, Typography, Divider } from "antd";

import { GET_LEARNING_PATH_DETAIL } from "#root/graphql/queries"

// console.log(GET_LEARNING_PATH_DETAIL)

const { Title, Text, Paragraph } = Typography;


const LearningPathEdit = ({ id, rowSpan = 8 }) => {
  const { data, loading, error } = useQuery(GET_LEARNING_PATH_DETAIL, {
    variables: { id },
  });
  if (loading) return <Paragraph>Loading ...</Paragraph>;
  if (data)
    return (
      <>
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
      </>
    );
};

LearningPathEdit.propTypes = {};

export default LearningPathEdit;
