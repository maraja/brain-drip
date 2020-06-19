import React from "react";

import LearningPathsContent from "#root/components/bd-components/LearningPathsSearchResult.js";

import Layout from "#root/components/Root/Layout";
import Container from "#root/components/bd-components/Container";

import { Typography } from "antd";
const { Title } = Typography;

const LearningPathsSearchResult = (props) => {
  return (

    <Layout>
      <Container>
        <Title> Results for: {props.match.params.searchString}</Title>
        <LearningPathsContent searchString={props.match.params.searchString} />
      </Container>
    </Layout>
  );

};

export default LearningPathsSearchResult;
