import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Card, Row, Col, Typography, Divider } from "antd";
import LearningPathLarge from "#root/components/bd-components/views/LearningPathLarge"

import { GET_LEARNING_PATH_DETAIL } from "#root/graphql/queries"

// console.log(GET_LEARNING_PATH_DETAIL)

const { Title, Text, Paragraph } = Typography;

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

const LearningPathDetails = (props) => {

  const id = props.match.params.id
  const { data, loading, error } = useQuery(GET_LEARNING_PATH_DETAIL, {
    variables: { id },
  });
  if (loading) return <Paragraph>Loading ...</Paragraph>;
  if (data)
    return (
      <Layout>
        <Container>
          <LearningPathLarge learningPath={data.learningPath} />
        </Container>
      </Layout>
    );
};
export default LearningPathDetails;
