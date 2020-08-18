
import React, { useState, useEffect } from "react";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";
import Title2 from "#root/components/bd-components/text/Title2";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

import { Card, Row, Col, Typography } from "antd";
const { Title, Paragraph } = Typography;

const GET_LEARNING_PATHS = gql`
    query getLearningPaths($searchString: String!) {
        learningPathSearch(searchString: $searchString) {
            id
            name
            description
        }
    }
`;

const LearningPathsSearchResult = (props) => {
  
  let searchString = props.match.params.searchString
  let rowSpan = 8

  const { data, loading, error } = useQuery(GET_LEARNING_PATHS, { variables: { searchString } })
  if (loading) return <Paragraph>Loading ...</Paragraph>;
  return (

    <Layout>
      <Container>
        <Title2> Results for {props.match.params.searchString}.</Title2>
        <Row>
          {data &&
            data.learningPathSearch.map((r) => (
              <Col key={r.id} span={rowSpan}>
                <Card
                  title={r.name}
                  extra={<Link to={`/learning-path/id/${r.id}`}>Details</Link>}
                >
                  {r.description}
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </Layout>
  );

};

export default LearningPathsSearchResult;
